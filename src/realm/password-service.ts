import { UpdateMode } from "realm";
import realmService, { Password } from "./realm-service";

const savePassword = (title: string, password: string) => {
  realmService.write(() => {
    realmService.create(
      "Password",
      {
        recordID: "111",
        title: "test",
        password: "q20092001",
      },
      UpdateMode.Modified
    );
  });
};

// const updatePassword = (recordID: string, password: Password) => {
//   const passwords = realmService.objects("Password");
//   const selected = passwords.filtered(`recordID === '${recordID}'`);

//   selected.forEach((value: Realm.Object<Password>) => {
//     realmService.write(() => {
//       value.title: password.properties.title;
//     });
//   });
// };
