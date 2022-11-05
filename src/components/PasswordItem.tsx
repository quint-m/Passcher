import { View, Text, Box, HStack, VStack, Pressable, Icon, Center } from "native-base";
import React from "react";
import { Password } from "../models/PasswordModel";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { usePasswordIcon } from "../hooks/usePasswordIcon";

const PasswordItem = (pw: Password) => {
  return (
    <View py={3} px={2} width="80%" margin="auto">
      <Pressable
        onPress={() => {
          alert(`Currently selected password: ${pw._id}`);
        }}
      >
        {/** TODO: Add icon here, got 'em in pictures */}
        <HStack justifyContent="space-between" alignItems="center">
          <HStack>
            <Center flexDirection="row">
              <Image source={usePasswordIcon(pw.category)} style={{ width: 42, height: 42, marginRight: 10 }} />
              <VStack>
                <Text fontWeight="bold">{pw.title}</Text>
                <Text fontWeight="semibold" color="gray.500">
                  {pw.username}
                </Text>
              </VStack>
            </Center>
          </HStack>

          <Icon as={MaterialIcons} name="keyboard-arrow-right" size={6} />
        </HStack>
      </Pressable>
    </View>
  );
};

export default PasswordItem;
