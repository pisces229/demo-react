import { create } from 'zustand';

interface StoreCreator {
  action: number;
  setAction: (value?: number) => void;
  getAction: () => number;
}

export const usePageActionStore = create<StoreCreator>()((set, get) => ({
  action: 0,
  setAction: (value = 0) => set(() => ({ action: value })),
  getAction: () => get().action,
}));
