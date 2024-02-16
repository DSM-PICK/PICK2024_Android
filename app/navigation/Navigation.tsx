import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { DetailNotice } from "@/screens/DetailNotice";
import { Onboard } from "@/screens/Onboard";
import { Notice } from "@/screens/Notice";
import { Login } from "@/screens/Login";
import { Test } from "@/screens/Test";
import { Home } from "@/screens/Home";
import { Meal } from "@/screens/Meal";
import { My } from "@/screens/My";

const TransitionOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionOptions,
        }}
        initialRouteName="홈"
      >
        <Stack.Screen name="온보딩" component={Onboard} />
        <Stack.Screen name="로그인" component={Login} />
        <Stack.Screen name="홈" component={Home} />
        <Stack.Screen name="급식" component={Meal} />
        <Stack.Screen name="일정" component={Test} />
        <Stack.Screen name="공지" component={Notice} />
        <Stack.Screen name="상세공지" component={DetailNotice} />
        <Stack.Screen name="My" component={My} />
        <Stack.Screen name="신청" component={Test} />
        <Stack.Screen name="교실이동" component={Test} />
        <Stack.Screen name="외출" component={Test} />
        <Stack.Screen name="조기귀가" component={Test} />
        <Stack.Screen name="외출증" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
