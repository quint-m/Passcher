import React from "react";
import { Pressable, View } from "native-base";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { IViewProps } from "native-base/lib/typescript/components/basic/View/types";

interface IDismissibleView extends IViewProps {
  children?: React.ReactNode;
}

const DismissibleView: React.FC<IDismissibleView> = (props) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View {...props} flex={1}>
        {props.children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DismissibleView;
