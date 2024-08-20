import { create } from "zustand";
import { createAuthSlice, IAuthSlice } from "./auth";

type RootState = IAuthSlice;

export const useRootStore = create<RootState>()((...a) => ({
  ...createAuthSlice(...a),
}));
