import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { enableScreens } from "react-native-screens";
import { useEffect, useRef, useState } from "react";
import { Animated, Image } from "react-native";
import Navigation from "@/navigation/Navigation";
import { getToken } from "@/utils/token";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
});

export default function App() {
  enableScreens(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [token, setToken] = useState(undefined);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const tokenFn = async () => {
      const { accessToken } = await getToken();
      setToken(accessToken);
    };
    tokenFn();
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start(() => setLoaded(true));
    }, 1400);
  }, []);

  const Loading = () => {
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
        <Loading />
      </QueryClientProvider>
    );
  }
}
