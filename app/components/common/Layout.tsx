import { getColors } from "@/utils/functions/getColors";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface PropTypes {
  children: React.ReactNode;
  home?: boolean;
}

export default function Layout({ children, home }: PropTypes) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 15,
        backgroundColor: home ? getColors(["primary", 1100]) : "white",
      }}
    >
      {children}
    </SafeAreaView>
  );
}
