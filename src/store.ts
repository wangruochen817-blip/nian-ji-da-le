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
  title: 'Enter your document title here',
  subtitle: 'Author or subtitle',
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
