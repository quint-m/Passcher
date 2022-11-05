import { Box, Center, Pressable, Text, View } from "native-base";
import { SafeAreaView } from "react-native";
import DismissibleView from "../components/DismissibleView";
import PasswordList from "../components/PasswordList";
import SearchBar from "../components/SearchBar";

const VaultScreen = () => {
  return (
    <View bgColor="white" flex={1}>
      <Center>
        <SearchBar />
        <PasswordList></PasswordList>
      </Center>
    </View>
  );
};

export default VaultScreen;
