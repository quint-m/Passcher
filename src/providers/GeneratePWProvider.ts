import "react-native-get-random-values";
import { nanoid } from "nanoid";
import { createPassword } from "./PasswordProvider";

const loadPWDefaults = async () => {
  for (let i = 0; i < 15; i++) {
    await createPassword({
      _id: nanoid(),
      title: `user ${i}`,
      username: "generic@moregenric.com",
      password: nanoid(5),
      category: "AirBnB",
    });
  }
};

export default loadPWDefaults;
