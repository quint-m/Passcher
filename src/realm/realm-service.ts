import Realm from "realm";

export class Password extends Realm.Object {
  schema = {
    name: "",
    properties: {
      recordID: "string",
      title: "string",
      password: "string",
    },
    primaryKey: "recordID",
  };
}

export default new Realm({ schema: [Password] });
