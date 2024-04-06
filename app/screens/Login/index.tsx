import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, View } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { Text, Input, Button } from "@commonents";
import { post, setToken } from "@/utils";
import { path } from "@/constants";
import { Layout } from "@layouts";

export const Login = () => {
  const [data, setData] = useState({
    account_id: "",
    password: "",
  });
  const [error, setError] = useState({
    account_id: false,
    password: false,
  });
  const disabled = !!!data.account_id || !!!data.password;
  const navigation = useNavigation();

  const handleChange = ({ text, name }) => {
    setData({ ...data, [name]: text });
  };

  const { mutate: loginFn } = useMutation({
    mutationFn: () => post(`${path.user}/login`, data),
    onError: ({ status }: any) =>
      setError({
        ...error,
        [status === 500 ? "account_id" : "password"]: true,
      }),
    onSuccess: async (res: AxiosResponse) => {
      const { access_token, refresh_token } = res?.data;
      await setToken(access_token, refresh_token);
      navigation.reset({ routes: [{ name: "홈" as never }] });
    },
  });

  return (
    <Layout>
      <View style={styles.inputContainer}>
        <Image
          source={require("@/assets/Logo.png")}
          style={styles.logoElement}
        />
        <Text type={["body", 2]} color={["neutral", 400]}>
          스퀘어 계정으로 로그인해주세요.
        </Text>
        <View style={{ gap: 5 }}>
          <Input
            value={data.account_id}
            onChange={handleChange}
            name="account_id"
            placeholder="아이디"
            error={error.account_id}
          />
          <Text
            type={["caption", 2]}
            color={["error", 400]}
            hidden={!error.account_id}
          >
            아이디를 다시 확인해 주세요
          </Text>
        </View>

        <View style={{ gap: 5 }}>
          <Input
            value={data.password}
            onChange={handleChange}
            name="password"
            placeholder="비밀번호"
            error={error.password}
            password
          />
          <Text
            type={["caption", 2]}
            color={["error", 400]}
            hidden={!error.password}
          >
            비밀번호를 다시 확인해 주세요
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          size="full"
          color={["primary", 400]}
          onPress={loginFn as any}
          disabled={disabled}
        >
          로그인
        </Button>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 5,
    gap: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  logoElement: {
    width: 120,
    height: 40,
  },
});
