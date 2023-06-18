import { create } from 'zustand';

type StoreCreator = {
  message: string;
  setMessage: (value: string) => void;
  getMessage: () => string;
};

export const usePageLayoutStore = create<StoreCreator>()((set, get) => ({
  message: '',
  setMessage: (value: string) => set(() => ({ message: value })),
  getMessage: () => get().message,
}));
