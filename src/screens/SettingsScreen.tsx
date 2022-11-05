import { View, Text } from "react-native";
import React from "react";
import { atom, useAtom } from "jotai";
import { queryAtom } from "../atoms/QueryAtom";

const SettingsScreen = () => {
  const [query] = useAtom(queryAtom);

  return (
    <View>
      <Text>{query}</Text>
    </View>
  );
};

export default SettingsScreen;
