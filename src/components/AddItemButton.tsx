import { View, Text, Box, Icon, Pressable, Center } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { BottomTabsProps, NativeStackProps } from "../nav/Navs";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const AddPasswordItem = () => {
  const nav = useNavigation<NavigationProp<NativeStackProps>>();

  return (
    <Box position="absolute" right={5} bottom={5}>
      <Pressable
        onPress={() => {
          nav.navigate("Create");
        }}
      >
        <Icon as={Ionicons} name="ios-add-circle-sharp" size={12} color="amber.500" />
      </Pressable>
    </Box>
  );
};

export default AddPasswordItem;
