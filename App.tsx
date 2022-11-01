import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import NavigationHandler from "./src/nav/navs";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <NavigationHandler />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
