import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async () => {
  const accessToken = await AsyncStorage.getItem("accessToken");
  const account = await AsyncStorage.getItem("account").then((i) =>
    i?.split("||")
  );
  return { accessToken, account };
};

export const removeToken = async () => {
  await AsyncStorage.removeItem("accessToken");
  await AsyncStorage.removeItem("account");
  return;
};

export const setToken = async (accessToken: string, account: string[]) => {
  await AsyncStorage.setItem("accessToken", accessToken);
  await AsyncStorage.setItem("account", account.join("||"));
  return;
};
