import { execSync, spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, 'meta-screenshots');
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const pages = [
  { id: '1-adsmanager-campaigns', url: 'https://adsmanager.facebook.com/adsmanager/manage/campaigns', desc: 'Meta Ads Manager 广告活动管理页（登录页）' },
  { id: '2-help-find-ads', url: 'https://www.facebook.com/business/help/1672240856382578?id=771095996286784', desc: 'Meta 帮助中心 - 查找广告' },
  { id: '3-help-custom-columns', url: 'https://www.facebook.com/business/help/1774128496023644?id=771095996286784', desc: 'Meta 帮助中心 - 自定义列' },
  { id: '4-help-filter-view', url: 'https://www.facebook.com/business/help/1817398708576362?id=771095996286784', desc: 'Meta 帮助中心 - 筛选和查看' },
];

function runChrome(args, timeoutMs = 45000) {
  return new Promise((resolve, reject) => {
    const proc = spawn(CHROME, args, { stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '';
    proc.stdout.on('data', (d) => { stdout += d.toString(); });
    proc.stderr.resume();
    const timer = setTimeout(() => {
      try { proc.kill('SIGKILL'); } catch (e) {}
      resolve({ stdout, timeout: true });
    }, timeoutMs);
    proc.on('close', () => {
      clearTimeout(timer);
      resolve({ stdout, timeout: false });
    });
    proc.on('error', (err) => {
      clearTimeout(timer);
      resolve({ stdout: '', error: err.message });
    });
  });
}

function extractContent(html) {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';

  const headings = [];
  const headingRegex = /<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi;
  let m;
  while ((m = headingRegex.exec(html)) !== null) {
    const t = m[1].replace(/<[^>]+>/g, '').trim();
    if (t && t.length < 200 && !headings.includes(t)) headings.push(t);
  }

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyHtml = bodyMatch ? bodyMatch[1] : html;

  const paragraphs = [];
  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  while ((m = pRegex.exec(bodyHtml)) !== null) {
    const t = m[1].replace(/<[^>]+>/g, '').trim();
    if (t && t.length > 30) paragraphs.push(t);
  }

  const text = bodyHtml
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, '')
    .replace(/<template[\s\S]*?<\/template>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(div|p|li|h1|h2|h3|h4|h5|h6|tr|section|article)>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#\d+;/gi, ' ')
    .replace(/&\w+;/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]+/g, ' ')
    .trim();

  return { title, headings, paragraphs, text };
}

const results = [];

for (let i = 0; i < pages.length; i++) {
  const page = pages[i];
  console.log(`\n========== [${page.id}] ==========`);
  console.log(`  ${page.desc}`);
  console.log(`  URL: ${page.url}`);

  const userDataDir = path.join(OUTPUT_DIR, `tmp-${page.id}-${Date.now()}`);
  const screenshotFile = `${page.id}.png`;
  const domFile = `${page.id}-dom.html`;
  const textFile = `${page.id}-snapshot.txt`;
  const screenshotPath = path.join(OUTPUT_DIR, screenshotFile);

  // Step 1: Screenshot
  console.log('  1/2 截图中...');
  const ss = await runChrome([
    '--headless=new',
    '--disable-gpu',
    '--disable-features=VizDisplayCompositor',
    '--no-sandbox',
    `--user-data-dir=${userDataDir}`,
    '--hide-scrollbars',
    '--window-size=1440,2000',
    '--default-background-color=FFFFFF',
    `--screenshot=${screenshotPath}`,
    '--virtual-time-budget=12000',
    page.url,
  ], 45000);

  let screenshotSize = 0;
  if (fs.existsSync(screenshotPath)) {
    screenshotSize = fs.statSync(screenshotPath).size;
    console.log(`  ✅ 截图: ${screenshotFile} (${Math.round(screenshotSize/1024)} KB)`);
  } else {
    console.log(`  ⚠️ 截图可能未生成，重试...`);
    // Retry with a fresh profile and shorter time
    try { execSync(`rm -rf ${userDataDir}`); } catch(e) {}
    await runChrome([
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--hide-scrollbars',
      '--window-size=1440,2000',
      `--screenshot=${screenshotPath}`,
      '--virtual-time-budget=15000',
      page.url,
    ], 50000);
    if (fs.existsSync(screenshotPath)) {
      screenshotSize = fs.statSync(screenshotPath).size;
      console.log(`  ✅ 重试后截图成功: ${screenshotFile} (${Math.round(screenshotSize/1024)} KB)`);
    } else {
      console.log(`  ❌ 截图失败`);
    }
  }

  // Step 2: DOM dump
  console.log('  2/2 获取 DOM 内容...');
  const domResult = await runChrome([
    '--headless=new',
    '--disable-gpu',
    '--disable-features=VizDisplayCompositor',
    '--no-sandbox',
    '--hide-scrollbars',
    '--dump-dom',
    '--virtual-time-budget=12000',
    page.url,
  ], 45000);

  const domHtml = domResult.stdout || '';
  if (domHtml.length > 100) {
    fs.writeFileSync(path.join(OUTPUT_DIR, domFile), domHtml);
    const parsed = extractContent(domHtml);
    fs.writeFileSync(
      path.join(OUTPUT_DIR, textFile),
      `=== ${page.id} ===\n${page.desc}\nURL: ${page.url}\n\nPAGE TITLE: ${parsed.title}\n\n=== HEADINGS (h1-h6) ===\n${parsed.headings.join('\n')}\n\n=== PARAGRAPHS (first 20) ===\n${parsed.paragraphs.slice(0, 20).join('\n\n')}\n\n=== VISIBLE TEXT (first 8000 chars) ===\n${parsed.text.slice(0, 8000)}`
    );
    console.log(`  ✅ 内容已保存 (HTML ${Math.round(domHtml.length/1024)} KB)`);
    console.log(`  标题: ${parsed.title}`);
    console.log(`  主要标题: ${parsed.headings.slice(0, 3).join(' | ')}`);
    results.push({
      id: page.id,
      description: page.desc,
      url: page.url,
      pageTitle: parsed.title,
      headings: parsed.headings,
      paragraphs: parsed.paragraphs.slice(0, 20),
      text: parsed.text.slice(0, 5000),
      screenshotFile,
      screenshotSizeKb: Math.round(screenshotSize/1024),
      textFile,
      domFile,
    });
  } else {
    console.log(`  ⚠️ DOM dump 内容不足 (${domHtml.length} bytes)`);
    results.push({
      id: page.id,
      description: page.desc,
      url: page.url,
      error: 'DOM content too short',
      screenshotFile,
      screenshotSizeKb: Math.round(screenshotSize/1024),
    });
  }

  // Clean up
  try { execSync(`rm -rf ${userDataDir} 2>/dev/null`); } catch(e) {}
  await new Promise(r => setTimeout(r, 2000));
}

fs.writeFileSync(path.join(OUTPUT_DIR, 'results.json'), JSON.stringify(results, null, 2));

console.log('\n\n=============================');
console.log('✅ 全部页面处理完成');
console.log('=============================');
console.log('\n📁 输出目录:');
console.log(`   ${OUTPUT_DIR}`);
console.log('\n📄 生成的文件:');
fs.readdirSync(OUTPUT_DIR).sort().forEach(f => {
  const fullPath = path.join(OUTPUT_DIR, f);
  const stat = fs.statSync(fullPath);
  if (stat.isFile()) {
    console.log(`   ${f}  (${Math.round(stat.size/1024)} KB)`);
  }
});

console.log('\n\n📋 每个页面的内容摘要:');
for (const r of results) {
  console.log(`\n  [${r.id}] ${r.description}`);
  console.log(`     页面标题: ${r.pageTitle || '(未获取)'}`);
  console.log(`     截图文件: ${r.screenshotFile} (${r.screenshotSizeKb} KB)`);
  if (r.headings && r.headings.length) {
    console.log(`     主要标题:`);
    r.headings.slice(0, 3).forEach(h => console.log(`       - ${h.slice(0, 80)}`));
  }
  if (r.text && r.text.length > 100) {
    console.log(`     页面文本 (前200字): ${r.text.slice(0, 200).replace(/\n/g, ' ')}...`);
  }
}
