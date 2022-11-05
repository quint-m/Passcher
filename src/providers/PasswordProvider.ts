import AsyncStorage from "@react-native-async-storage/async-storage";
import { Password } from "../models/PasswordModel";

const createPassword = async (password: Password) => {
  try {
    await AsyncStorage.setItem(password._id, JSON.stringify(password));
  } catch (e) {
    console.error(e);
  }
};

const getPassword = async (key: string) => {
  let result = "";
  try {
    await AsyncStorage.getItem(key).then((s) => {
      if (s) result = s;
    });
  } catch (e) {
    console.error(e);
  }

  return result;
};

const getAllPasswords = async () => {
  let rawDefs: readonly string[][] = [];
  let passwords: Password[] = [];

  try {
    await AsyncStorage.getAllKeys()
      .then((keys) => {
        return AsyncStorage.multiGet(keys);
      })
      .then((values) => {
        /**
         * Values is a key-value pair, where key = id and value = {}
         * We're decoding this to a multi-dimensional array of rawDefs[id][(1) obj as string]
         */
        rawDefs = values as unknown as string[][];
      });
  } catch (e) {
    console.error(e);
  }

  if (rawDefs != null) {
    rawDefs.forEach((password, i) => {
      let id = password.at(0);
      let obj = password.at(1);

      if (id && obj) passwords[i] = JSON.parse(obj);
    });
  }

  return passwords;
};

export { createPassword, getPassword, getAllPasswords };
