import { Pressable, View } from "native-base";
import { IViewProps } from "native-base/lib/typescript/components/basic/View/types";
import React from "react";
import { Keyboard } from "react-native";

const DismissibleView: React.FC<IViewProps> = (props) => {
  return (
    <Pressable
      flex={1}
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View {...props}>{props.children}</View>
    </Pressable>
  );
};

export default DismissibleView;
