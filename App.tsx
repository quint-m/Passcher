import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavigationHandler from "./src/nav/Navs";

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <NavigationHandler />
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
