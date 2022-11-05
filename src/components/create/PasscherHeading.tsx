import React, { useState } from "react";
import { Password } from "../../models/PasswordModel";
import { Box, HStack, VStack, Text, Input, Pressable, View, Center } from "native-base";
import { Image } from "react-native";
import ReactNativeModal from "react-native-modal";
import PasscherIconModal from "./PasscherIconModal";

const PasscherHeading = () => {
  let passwordResult: Password;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Box>
      <HStack space={5} alignItems="center">
        <Pressable
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Image source={require("../../node_modules/Questionmark_Gray.png")} style={{ width: 64, height: 64 }} />
        </Pressable>

        <VStack space={3}>
          <Input
            type="text"
            variant="unstyled"
            placeholder="Enter title..."
            w="lg"
            isRequired={true}
            p={0}
            style={{ fontSize: 16, fontWeight: "bold" }}
          />
          <Text fontWeight="normal" color="gray.500" fontSize="md">
            Login
          </Text>
        </VStack>
      </HStack>

      <PasscherIconModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </Box>
  );
};

export default PasscherHeading;
