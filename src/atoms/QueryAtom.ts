import { atom } from "jotai";
import { passwordAtom } from "./PasswordAtom";

export const queryAtom = atom("");

export const filteredQueryAtom = atom((get) =>
  get(passwordAtom).filter((password) => password.title.toLowerCase().includes(get(queryAtom).toLowerCase()))
);
