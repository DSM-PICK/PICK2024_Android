import { Test } from "@/screens/Test";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "@/screens/Login";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="login"
      >
        <Stack.Screen name="onBoard" component={Test} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Test} />
        <Stack.Screen name="schedule" component={Test} />
        <Stack.Screen name="notice" component={Test} />
        <Stack.Screen name="noticeDetail" component={Test} />
        <Stack.Screen name="my" component={Test} />
        <Stack.Screen name="apply" component={Test} />
        <Stack.Screen name="move" component={Test} />
        <Stack.Screen name="outtingTemp" component={Test} />
        <Stack.Screen name="outtingHome" component={Test} />
        <Stack.Screen name="outtingPass" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
