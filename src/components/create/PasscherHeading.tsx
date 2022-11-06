import React, { useState } from "react";
import { Password } from "../../models/PasswordModel";
import { Box, HStack, VStack, Text, Input, Pressable, View, Center, IBoxProps } from "native-base";
import { Image } from "react-native";
import PasscherIconModal from "./PasscherIconModal";
import { nanoid } from "nanoid";
import { usePasswordIcon } from "../../hooks/usePasswordIcon";

type Props = {
  style: IBoxProps;
  password: Password;
  onIconSelect?: (category: Password["category"]) => void;
  onTitleSubmit?: () => void;
};

const PasscherHeading = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Box {...props.style}>
      <HStack space={5} alignItems="center">
        <Pressable
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Image source={usePasswordIcon(props.password.category)} style={{ width: 64, height: 64 }} />
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

      <PasscherIconModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={(cat) => {
          props.onIconSelect && props.onIconSelect(cat);
          setModalVisible(false);
        }}
      />
    </Box>
  );
};

export default PasscherHeading;
