import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async () => {
  const accessToken = await AsyncStorage.getItem("accessToken");
  const refreshToken = await AsyncStorage.getItem("refreshToken");
  return { accessToken, refreshToken };
};

export const removeToken = async () => {
  await AsyncStorage.removeItem("accessToken");
  await AsyncStorage.removeItem("refreshToken");
  return;
};

export const setToken = async (accessToken: string, refreshToken: string) => {
  await AsyncStorage.setItem("accessToken", accessToken);
  await AsyncStorage.setItem("refreshToken", refreshToken);
  return;
};
