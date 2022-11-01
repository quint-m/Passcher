import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "native-base";
import VaultScreen from "../screens/vault-screen";

export type NativeStackProps = {
  Vault: undefined;
};

export type BottomTabsProps = {
  Home: undefined;
};

const NativeStack = createNativeStackNavigator<NativeStackProps>();
const BottomTab = createBottomTabNavigator<BottomTabsProps>();

const Home = () => {
  return (
    <NativeStack.Navigator initialRouteName="Vault" screenOptions={{ headerShown: false }}>
      <NativeStack.Screen name="Vault" component={VaultScreen} />
    </NativeStack.Navigator>
  );
};

const NavigationHandler = () => {
  return (
    <BottomTab.Navigator initialRouteName="Home" screenOptions={{ headerShadowVisible: false }}>
      <BottomTab.Screen name="Home" component={Home} options={{ title: "Vault" }} />
    </BottomTab.Navigator>
  );
};

export default NavigationHandler;
