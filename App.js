import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";

import { LoginScreen } from "./screens/user/LoginScreen";
import { SignupScreen } from "./screens/user/SignupScreen";
import { DashboardScreen } from "./screens/dashboard/DashboardScreen";
import { Colors } from "./constants/styles";
import { IconButton } from "./components/IconButton";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { ContactListScreen } from "./screens/contact/ContactListScreen";
import { CampaignListScreen } from "./screens/campaign/CampaignListScreen";
import { ContactEditScreen } from "./screens/contact/ContactEditScreen";
import { TemplateListScreen } from "./screens/template/TemplateListScreen";
import { CampaignEditScreen } from "./screens/campaign/CampaignEditScreen";
import ContactContextProvider from "./store/contact-context";
import CampaignContextProvider from "./store/campaign-context";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authContext = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="exit"
            color={tintColor}
            size={24}
            onPress={authContext.logout}
          />
        ),
      }}
    >
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Contacts" component={ContactListScreen} />
      <Stack.Screen name="ContactEdit" component={ContactEditScreen} />
      <Stack.Screen name="Campaigns" component={CampaignListScreen} />
      <Stack.Screen name="CampaignEdit" component={CampaignEditScreen} />
      <Stack.Screen name="Templates" component={TemplateListScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authContext = useContext(AuthContext);

  return (
    <NavigationContainer>
      {authContext.isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
      {/* <AuthStack /> */}
      {/* <AuthenticatedStack /> */}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <ContactContextProvider>
          <CampaignContextProvider>
            <Navigation />
          </CampaignContextProvider>
        </ContactContextProvider>
      </AuthContextProvider>
    </>
  );
}
