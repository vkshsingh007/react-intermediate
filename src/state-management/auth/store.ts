import { create } from "zustand";

interface AuthStore {
  user: string;
  login: (username: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: "",
  login: (username) => set((store) => ({ user: username })),
  logout: () => set((store) => ({ user: "" })),
}));

export default useAuthStore;
