import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Box, Icon, Text, usePropsResolutionTest, View } from "native-base";
import VaultScreen from "../screens/VaultScreen";
import { Ionicons } from "@expo/vector-icons";
import SettingsScreen from "../screens/SettingsScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export type NativeStackProps = {
  Home: undefined;
};

export type BottomTabsProps = {
  Vault: undefined;
  Settings: undefined;
};

const NativeStack = createNativeStackNavigator<NativeStackProps>();
const BottomTab = createBottomTabNavigator<BottomTabsProps>();

const Home = () => {
  return (
    <NativeStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <NativeStack.Screen name="Home" component={VaultScreen} />
    </NativeStack.Navigator>
  );
};

const NavigationHandler = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Vault"
      screenOptions={({ route }) => ({
        headerShadowVisible: false,
        header(props) {
          return (
            <SafeAreaView style={{ backgroundColor: "white", paddingBottom: 10 }} edges={["top", "right", "left"]}>
              <Box width="80%" margin="auto">
                <Text fontSize="2xl" fontWeight="bold">
                  {route.name}
                </Text>
              </Box>
            </SafeAreaView>
          );
        },
        /** Set TabBar label color to either amber or gray, depending on focus state */
        tabBarLabel(props) {
          return (
            <Text fontSize="10px" color={props.focused ? "amber.500" : "gray.500"}>
              {route.name}
            </Text>
          );
        },
      })}
    >
      <BottomTab.Screen
        name="Vault"
        component={Home}
        options={({ route }) => ({
          tabBarIcon(props) {
            /** Set TabBar icon either to an open or a closed lock for the home screen, depending on the focus state */
            return props.focused ? (
              <Icon as={Ionicons} name="ios-lock-closed-sharp" size={5} color="amber.500" />
            ) : (
              <Icon as={Ionicons} name="ios-lock-open-sharp" size={5} color="gray.500" />
            );
          },
        })}
      />

      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={({ route }) => ({
          tabBarIcon(props) {
            /** Set TabBar icon either to an open or a closed lock for the home screen, depending on the focus state */
            return props.focused ? (
              <Icon as={Ionicons} name="ios-settings-sharp" size={5} color="amber.500" />
            ) : (
              <Icon as={Ionicons} name="ios-settings-outline" size={5} color="gray.500" />
            );
          },
        })}
      />
    </BottomTab.Navigator>
  );
};

export default NavigationHandler;
