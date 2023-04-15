import { create } from 'zustand';

type Form = {
  stringValue?: string;
  numberValue?: number;
  booleanValue?: boolean;
}
const initForm: Form = {
  stringValue: '',
  numberValue: 0,
  booleanValue: false,
};

interface StoreCreator {
  form: Form;
  setForm: (value: Form) => void;
  getForm: () => Form;
}
export const usePageSecondStore = create<StoreCreator>()((set, get) => ({
  form: initForm,
  setForm: (value: Form) => set(() => ({ form: { ...initForm, ...value } })),
  getForm: () => get().form,
}));

export enum PageSecondAction {
  Empty = 0,
  Create = 1,
  Modify = 2,
}
