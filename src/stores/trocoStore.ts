import { create }from 'zustand';

interface TrocoStore {
  inputValue: string;
  setInputValue: (value: string) => void;
}

const useTrocoStore = create<TrocoStore>((set) => ({
  inputValue: '',
  setInputValue: (value) => set({ inputValue: value }),
}));

export default useTrocoStore;
