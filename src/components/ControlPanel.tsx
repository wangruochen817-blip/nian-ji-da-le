import React from 'react';
import { useCoverStore } from '../store';
import { Type, Palette, LayoutTemplate, Layers, Download } from 'lucide-react';

const THEMES = [
  { id: 'minimal', label: '极简 Minimal' },
  { id: 'dark', label: '暗黑 Dark' },
  { id: 'solid', label: '纯色 Solid' },
  { id: 'gradient', label: '渐变 Gradient' },
  { id: 'glass', label: '毛玻璃 Glass' },
];

const FONTS = [
  { id: 'sans', label: '无衬线 Noto Sans' },
  { id: 'serif', label: '衬线 Noto Serif' },
  { id: 'zcool', label: '站酷快乐体' },
  { id: 'mashan', label: '手写 马善政' },
];

const PATTERNS = [
  { id: 'none', label: '无纹理 None' },
  { id: 'dots', label: '波点 Dots' },
  { id: 'grid', label: '网格 Grid' },
  { id: 'waves', label: '波纹 Waves' },
];

const COLORS = [
  '#3b82f6', // Blue
  '#ef4444', // Red
  '#10b981', // Green
  '#f59e0b', // Yellow
  '#8b5cf6', // Amber
  '#ec4899', // Purple
  '#6366f1', // Violet
  '#14b8a6', // Emerald
  '#0f172a', // Slate
  '#18181b', // Zinc
];

interface ControlPanelProps {
  onDownload: () => void;
  isDownloading: boolean;
}

export default function ControlPanel({ onDownload, isDownloading }: ControlPanelProps) {
  const store = useCoverStore();

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Text Inputs */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-zinc-800 font-semibold mb-2">
          <Type className="w-5 h-5" />
          <h2>文本内容</h2>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-600">文档标题</label>
          <textarea
            value={store.title}
            onChange={(e) => store.setTitle(e.target.value)}
            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            rows={3}
            placeholder="输入文章标题..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-600">副标题 / 作者</label>
          <input
            type="text"
            value={store.subtitle}
            onChange={(e) => store.setSubtitle(e.target.value)}
            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="输入副标题或作者名字..."
          />
        </div>
      </div>

      {/* Design Options */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-zinc-800 font-semibold">
          <Palette className="w-5 h-5" />
          <h2>设计样式</h2>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-zinc-600 flex items-center gap-2">
            <LayoutTemplate className="w-4 h-4" /> 主题风格
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => store.setTheme(theme.id)}
                className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                  store.theme === theme.id
                    ? 'bg-zinc-900 text-white border-zinc-900 shadow-md'
                    : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50'
                }`}
              >
                {theme.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-zinc-600 flex items-center gap-2">
            <Type className="w-4 h-4" /> 字体搭配
          </label>
          <div className="grid grid-cols-2 gap-2">
            {FONTS.map((font) => (
              <button
                key={font.id}
                onClick={() => store.setFontFamily(font.id)}
                className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                  store.fontFamily === font.id
                    ? 'bg-zinc-900 text-white border-zinc-900 shadow-md'
                    : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50'
                }`}
              >
                {font.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-zinc-600 flex items-center gap-2">
            <Layers className="w-4 h-4" /> 背景纹理
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {PATTERNS.map((pattern) => (
              <button
                key={pattern.id}
                onClick={() => store.setPattern(pattern.id)}
                className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                  store.pattern === pattern.id
                    ? 'bg-zinc-900 text-white border-zinc-900 shadow-md'
                    : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50'
                }`}
              >
                {pattern.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-zinc-600 flex items-center gap-2">
            <Palette className="w-4 h-4" /> 强调色
          </label>
          <div className="flex flex-wrap gap-3">
            {COLORS.map((color) => (
              <button
                key={color}
                onClick={() => store.setColorAccent(color)}
                className={`w-8 h-8 rounded-full shadow-sm transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400 ${
                  store.colorAccent === color ? 'scale-110 ring-2 ring-offset-2 ring-zinc-800' : ''
                }`}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Action */}
      <div className="pt-4 border-t border-zinc-200 mt-2">
        <button
          onClick={onDownload}
          disabled={isDownloading}
          className={`w-full py-4 px-6 rounded-xl flex items-center justify-center gap-2 font-bold text-white shadow-lg transition-all
            ${isDownloading 
              ? 'bg-zinc-400 cursor-not-allowed' 
              : 'bg-zinc-900 hover:bg-zinc-800 hover:shadow-xl hover:-translate-y-1 active:translate-y-0'
            }`}
        >
          {isDownloading ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Download className="w-6 h-6" />
          )}
          {isDownloading ? '正在生成...' : '下载高清头图'}
        </button>
      </div>
    </div>
  );
}
