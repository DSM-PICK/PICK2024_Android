import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { enableScreens } from "react-native-screens";
import Navigation from "@/navigation/Navigation";
import { useEffect, useState } from "react";
import { getToken } from "@/utils/token";

const queryClient = new QueryClient();

export default function App() {
  enableScreens(false);

  const [token, setToken] = useState(undefined);
  useEffect(() => {
    const tokenFn = async () => {
      const { accessToken } = await getToken();
      setToken(accessToken);
    };
    tokenFn();
  }, []);

  if (token !== undefined) {
    return (
      <QueryClientProvider client={queryClient}>
        <Navigation auth={!!token} />
      </QueryClientProvider>
    );
  }
}
