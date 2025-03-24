import { create } from "zustand";

type HudStore = {
  visible: boolean;
  showLoading: () => void;
  hideLoading: () => void;
};

export const useLoadingStore = create<HudStore>((set) => ({
  visible: false,
  showLoading: () => set({ visible: true }),
  hideLoading: () => set({ visible: false }),
}));

// Export functions directly
export const showLoading = () => useLoadingStore.getState().showLoading();
export const hideLoading = () => useLoadingStore.getState().hideLoading();
