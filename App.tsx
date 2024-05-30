import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setBackgroundColorAsync } from "expo-navigation-bar";
import { enableScreens } from "react-native-screens";
import { useEffect, useRef, useState } from "react";
import Navigation from "@/navigation/Navigation";
import { Animated, Image } from "react-native";
import { getColors, getToken, post, setToken } from "@/utils";
import { StatusBar } from "expo-status-bar";
import { ToastManager } from "@commonents";
import * as Sentry from "@sentry/react-native";
import { path } from "@/constants";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: true,
      retryDelay: 300,
      staleTime: 10000,
    },
  },
});

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  debug: true,
});

function App() {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [token, setTokens] = useState(undefined);
  const [loaded, setLoaded] = useState(false);
  enableScreens(false);

  useEffect(() => {
    const color = async () => {
      await setBackgroundColorAsync(getColors(["primary", 1000]));
    };

    const tokenFn = async () => {
      const { account, accessToken, name } = await getToken();
      if (account) {
        const data = { account_id: account[0], password: account[1] };
        Sentry.configureScope((scope: Sentry.Scope) => {
          scope.setUser({
            id: data.account_id,
            username: name,
          });
        });
        post(`${path.user}/login`, data).then((res) => {
          setToken(res?.data.access_token, account, name);
        });
      }
      setTokens(accessToken);
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

export default Sentry.wrap(App);
