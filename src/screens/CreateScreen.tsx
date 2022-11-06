import { View, Text, VStack, Stack, Input, Icon, Divider, Box } from "native-base";
import React, { useState } from "react";
import PasscherHeading from "../components/create/PasscherHeading";
import DismissibleView from "../components/DismissibleView";
import { Ionicons } from "@expo/vector-icons";
import PasscherWeblink from "../components/create/PasscherWeblink";
import { nanoid } from "nanoid";
import { Password } from "../models/PasswordModel";
import AnimatedMeterBar from "../components/AnimatedMeterBar";

const CreatePasswordScreen = () => {
  const [pwVisible, setPwVisible] = useState(false);
  let [password, setPassword] = useState<Password>({
    _id: nanoid(),
    title: "",
    username: "",
    password: "",
    category: "UNKNOWN",
  });

  return (
    <DismissibleView flex={1} background="white" p={5}>
      <PasscherHeading
        style={{ mb: 10 }}
        password={password}
        onIconSelect={(cat) => setPassword({ ...password, category: cat })}
      />
      <Stack mb={3}>
        <Text fontWeight="semibold" color="amber.500">
          Username
        </Text>
        <Input variant="unstyled" pl={0} placeholder="Enter username..." />
      </Stack>
      <Divider mb={3} />
      <Stack mb={8}>
        <Text fontWeight="semibold" color="amber.500">
          Password
        </Text>
        <Input
          variant="unstyled"
          pl={0}
          type={pwVisible ? "text" : "password"}
          placeholder="Enter password..."
          onChangeText={(text) => setPassword({ ...password, password: text })}
          InputRightElement={
            <Icon as={Ionicons} name={pwVisible ? "ios-eye" : "ios-eye-off"} onPress={() => setPwVisible(!pwVisible)} />
          }
        />
        <Box>
          <AnimatedMeterBar
            style={{ backgroundColor: "red", height: 2, borderRadius: 10 }}
            emptyColor="red.500"
            fullColor="green.600"
            passwordInput={password.password}
          />
        </Box>
      </Stack>
      <PasscherWeblink />
    </DismissibleView>
  );
};

export default CreatePasswordScreen;
