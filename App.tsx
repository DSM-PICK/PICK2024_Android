import MyStack from "@/navigation/Navigation";
import { enableScreens } from "react-native-screens";

export default function App() {
  enableScreens(false);
  return <MyStack />;
}
