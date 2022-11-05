import { View, Text, Box, Icon, Pressable, Center } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackProps } from "../nav/Navs";

const AddPasswordItem = () => {
  const nav = useNavigation<NativeStackProps>();

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
