import { Center, Text } from "native-base";
import DismissibleView from "../components/dismissible-view";
import PasswordList from "../components/password-list";
import Searchbar from "../components/searchbar";
import realmService from "../realm/realm-service";

const VaultScreen = () => {
  const passwords = realmService.objects("Password");

  return (
    <DismissibleView bgColor="white" flex={1}>
      <Center flex={1} justifyContent="row">
        <Searchbar />
        <PasswordList></PasswordList>
      </Center>
    </DismissibleView>
  );
};

export default VaultScreen;
