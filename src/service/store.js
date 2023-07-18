import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useRecepies = create(
  devtools((set) => ({
    recepies: [],
    addRecepies: (data) =>
      set((state) => ({ recepies: [...state.recepies, ...data] })),
    removeRecepies: () => set({ recepies: [] }),
  }))
);
