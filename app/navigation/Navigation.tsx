import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as _ from "@/screens";

const Stack = createStackNavigator();

export default function Navigation({ auth }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
        initialRouteName={auth ? "홈" : "온보딩"}
      >
        <Stack.Screen name="온보딩" component={_.Onboard} />
        <Stack.Screen name="로그인" component={_.Login} />
        <Stack.Screen name="홈" component={_.Home} />
        <Stack.Screen name="급식" component={_.Meal} />
        <Stack.Screen name="일정" component={_.Schedule} />
        <Stack.Screen name="공지" component={_.Notice} />
        <Stack.Screen name="상세공지" component={_.DetailNotice} />
        <Stack.Screen name="My" component={_.My} />
        <Stack.Screen name="신청" component={_.Apply} />
        <Stack.Screen name="교실이동" component={_.Move} />
        <Stack.Screen name="외출" component={_.Out} />
        <Stack.Screen name="조기귀가" component={_.Out} />
        <Stack.Screen name="외출증" component={_.Pass} />
        <Stack.Screen name="감독 조회" component={_.Teacher} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
