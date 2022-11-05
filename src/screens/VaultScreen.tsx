import { Box, Center, Pressable, Text, View } from "native-base";
import { SafeAreaView } from "react-native";
import AddPasswordItem from "../components/AddItemButton";
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

      <AddPasswordItem />
    </View>
  );
};

export default VaultScreen;
