import { atom } from "jotai";
import { Password } from "../models/PasswordModel";

export const passwordAtom = atom([] as Password[]);
