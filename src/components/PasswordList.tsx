import { Center, FlatList, Heading, HStack, Pressable, Spinner, Text, View, VStack } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import loadPWDefaults from "../providers/GeneratePWProvider";
import { getAllPasswords } from "../providers/PasswordProvider";
import PasswordItem from "./PasswordItem";
import { useAtom } from "jotai";
import { filteredQueryAtom } from "../atoms/QueryAtom";
import { passwordAtom } from "../atoms/PasswordAtom";

const PasswordList = () => {
  const [passwords, setPasswords] = useAtom(passwordAtom);
  const [filteredPasswords] = useAtom(filteredQueryAtom);

  return (
    /** View 90% height, since search bar has 10 % height */
    <View h="90%" w="full">
      {/** Debug buttons for saving and removing password fillers from local storage */}
      <HStack justifyContent="center" space={3}>
        <Pressable
          onPress={() => {
            AsyncStorage.clear()
              .then(() => {
                setPasswords([]);
                alert("cleared!");
              })
              .catch((error) => {
                alert(error);
              });
          }}
        >
          <Text>Clear Passwords</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            loadPWDefaults().then(() => {
              getAllPasswords().then((pws) => {
                setPasswords(pws);
              });
              alert("Generated Passwords!");
            });
          }}
        >
          <Text>Generate Passwords</Text>
        </Pressable>
      </HStack>

      {/** Rendering password list / loading spinner, if passwords array is still empty */}
      <Center h="100%" w="100%">
        {passwords ? (
          <FlatList
            data={filteredPasswords}
            renderItem={({ item }) => <PasswordItem {...item} />}
            keyExtractor={(password) => password._id}
            w="100%"
          />
        ) : (
          <HStack space={3}>
            <Spinner />
            <Heading fontSize="sm" color="primary.500">
              Loading Passwords
            </Heading>
          </HStack>
        )}
      </Center>
    </View>
  );
};

export default PasswordList;
