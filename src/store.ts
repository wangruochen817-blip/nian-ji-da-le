import { create } from 'zustand'

interface CoverState {
  title: string
  subtitle: string
  theme: string
  fontFamily: string
  pattern: string
  colorAccent: string
  setTitle: (title: string) => void
  setSubtitle: (subtitle: string) => void
  setTheme: (theme: string) => void
  setFontFamily: (font: string) => void
  setPattern: (pattern: string) => void
  setColorAccent: (color: string) => void
}

export const useCoverStore = create<CoverState>((set) => ({
  title: '在这里输入您的文档标题',
  subtitle: '作者或副标题 / Author or Subtitle',
  theme: 'minimal',
  fontFamily: 'sans',
  pattern: 'none',
  colorAccent: '#3b82f6', // Default blue
  setTitle: (title) => set({ title }),
  setSubtitle: (subtitle) => set({ subtitle }),
  setTheme: (theme) => set({ theme }),
  setFontFamily: (fontFamily) => set({ fontFamily }),
  setPattern: (pattern) => set({ pattern }),
  setColorAccent: (colorAccent) => set({ colorAccent }),
}))
