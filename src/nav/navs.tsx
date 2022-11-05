import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Box, HStack, Icon, Pressable, Text, usePropsResolutionTest, View } from "native-base";
import VaultScreen from "../screens/VaultScreen";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import SettingsScreen from "../screens/SettingsScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import CreatePasswordScreen from "../screens/CreateScreen";

export type NativeStackProps = {
  Home: undefined;
  Create: undefined;
};

export type BottomTabsProps = {
  Vault: undefined;
  Settings: undefined;
};

const NativeStack = createNativeStackNavigator<NativeStackProps>();
const BottomTab = createBottomTabNavigator<BottomTabsProps>();

const Home = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Vault"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarBackground: () => {
          return <Box bg="white" shadow={3} flex={1}></Box>;
        },
        tabBarLabel(props) {
          return (
            <Text fontSize="xs" color={props.focused ? "amber.500" : "gray.500"}>
              {route.name}
            </Text>
          );
        },
      })}
    >
      <BottomTab.Screen
        name="Vault"
        component={VaultScreen}
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

const NavigationHandler = () => {
  return (
    <NativeStack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShadowVisible: false,
        header(props) {
          return (
            <SafeAreaView style={{ backgroundColor: "white", paddingBottom: 10 }} edges={["top", "right", "left"]}>
              <Box>
                <HStack alignItems="center">
                  {route.name !== "Home" ? (
                    <Icon as={MaterialIcons} name="keyboard-arrow-left" size={8} color="gray.900" />
                  ) : (
                    <Box size={8} />
                  )}
                  <Text fontSize="2xl" fontWeight="bold">
                    {props.options.title ? props.options.title : route.name}
                  </Text>
                </HStack>
              </Box>
            </SafeAreaView>
          );
        },
      })}
    >
      <NativeStack.Screen name="Home" component={Home} options={{ title: "Vault" }} />
      <NativeStack.Screen name="Create" component={CreatePasswordScreen} />
    </NativeStack.Navigator>
  );
};

export default NavigationHandler;
