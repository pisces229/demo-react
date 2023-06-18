import { create } from 'zustand';

type Form = {
  stringValue?: string;
  numberValue?: number;
  booleanValue?: boolean;
};
const initForm: Form = {
  stringValue: '',
  numberValue: 0,
  booleanValue: false,
};

type StoreCreator = {
  form: Form;
  setForm: (value: Form) => void;
  getForm: () => Form;
};
export const usePageFirstStore = create<StoreCreator>()((set, get) => ({
  form: initForm,
  setForm: (value: Form) => set(() => ({ form: { ...initForm, ...value } })),
  getForm: () => get().form,
}));

export enum PageFirstAction {
  Empty = 0,
  Query = 1,
}
