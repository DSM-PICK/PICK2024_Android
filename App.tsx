import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setBackgroundColorAsync } from "expo-navigation-bar";
import { enableScreens } from "react-native-screens";
import { useEffect, useRef, useState } from "react";
import Navigation from "@/navigation/Navigation";
import { Animated, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ToastManager } from "@commonents";
import { getColors, getToken } from "@/utils";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: true,
      retryDelay: 300,
      staleTime: 10000,
    },
  },
});

export default function App() {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [token, setToken] = useState(undefined);
  const [loaded, setLoaded] = useState(false);
  enableScreens(false);

  useEffect(() => {
    const color = async () => {
      await setBackgroundColorAsync(getColors(["primary", 1000]));
    };

    const tokenFn = async () => {
      const { accessToken } = await getToken();
      setToken(accessToken);
    };
    tokenFn();
    color();
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start(() => setLoaded(true));
    }, 1400);
  }, []);

  const Splash = () => {
    if (!loaded) {
      return (
        <Animated.View
          style={{
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            position: "absolute",
            opacity: fadeAnim,
          }}
        >
          <Image
            source={require("./app/assets/SPLogo.gif")}
            style={{ width: 300, height: 100 }}
          />
        </Animated.View>
      );
    }
  };

  if (token !== undefined) {
    return (
      <QueryClientProvider client={queryClient}>
        <Navigation auth={!!token} />
        <ToastManager />
        <Splash />
        <StatusBar style="dark" />
      </QueryClientProvider>
    );
  }
}
