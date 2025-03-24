import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStoreProps {
  isLogin?: boolean;
}

interface UserStoreState extends UserStoreProps {
  setLogin: (isLogin: boolean) => void;
}

export const useUserStore = create<UserStoreState>()(
  persist(
    (set) => ({
      isLogin: false,
      setLogin: (isLogin) => set({ isLogin: isLogin }),
    }),
    {
      name: "user-storage",
    }
  )
);

export default useUserStore;
