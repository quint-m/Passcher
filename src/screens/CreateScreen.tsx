import { View, Text } from "native-base";
import React from "react";
import PasscherHeading from "../components/create/PasscherHeading";
import DismissibleView from "../components/DismissibleView";

const CreatePasswordScreen = () => {
  return (
    <DismissibleView flex={1} background="white" p={5}>
      <PasscherHeading />
    </DismissibleView>
  );
};

export default CreatePasswordScreen;
