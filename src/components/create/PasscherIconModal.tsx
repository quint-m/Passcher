import React, { useState } from "react";
import ReactNativeModal from "react-native-modal";
import { Box, Icon, Pressable, Text } from "native-base";
import { Password } from "../../models/PasswordModel";
import { PasswordIcons, usePasswordIcon } from "../../hooks/usePasswordIcon";
import { FlatList, Image } from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const RenderIcon = ({ item }: { item: Password["category"] }) => {
  return (
    <Pressable onPress={() => alert(item)}>
      <Image source={usePasswordIcon(item)} style={{ width: 64, height: 64 }} />
    </Pressable>
  );
};

const PasscherIconModal = (props: Props) => {
  return (
    <ReactNativeModal
      isVisible={props.visible}
      animationIn="zoomIn"
      animationOut="pulse"
      hasBackdrop={true}
      onBackdropPress={() => {
        props.onClose();
      }}
      hideModalContentWhileAnimating={true}
    >
      <Box h="1/2" justifyContent="center" borderRadius={15} bg="white" alignItems="center">
        <FlatList
          renderItem={RenderIcon}
          data={PasswordIcons}
          numColumns={5}
          directionalLockEnabled={true}
          horizontal={false}
        />
      </Box>
    </ReactNativeModal>
  );
};

export default PasscherIconModal;
