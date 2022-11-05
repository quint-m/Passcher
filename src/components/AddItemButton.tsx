import { View, Text, Box, Icon, Pressable, Center } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const AddPasswordItem = () => {
  return (
    <Box position="absolute" right={5} bottom={5}>
      <Icon as={Ionicons} name="ios-add-circle-sharp" size={12} color="amber.500" />
    </Box>
  );
};

export default AddPasswordItem;
