import { StateCreator } from "zustand";
import { IUser } from "../models";

type IStateUser = null | IUser;

export interface IAuthSlice {
  user: IStateUser;
  setUser: (user: IStateUser) => void;
}

export const createAuthSlice: StateCreator<IAuthSlice> = (set) => ({
  user: null,
  setUser: (user: IStateUser) => set({ user }),
});
