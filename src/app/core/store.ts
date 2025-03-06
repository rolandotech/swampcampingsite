import { create } from 'zustand'

interface pageState {
  page: string
  setPage: (by: string) => void
}

export const useSwampStore = create<pageState>()((set) => ({
 page: 'intro',
 setPage: (by) => set(() => ({ page: by }))
}))
