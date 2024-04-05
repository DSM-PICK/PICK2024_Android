import axios from "axios";
import { getToken } from "../tokenUtil";
import { path } from "@/constants";

export const refresh = async () => {
  const { refreshToken } = await getToken();
  return await axios.put(
    `${process.env.EXPO_PUBLIC_BASE_URL}${path.user}/refresh`,
    {},
    {
      headers: {
        "X-Refresh-Token": refreshToken,
      },
    }
  );
};
