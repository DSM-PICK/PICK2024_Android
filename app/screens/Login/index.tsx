import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { StyleSheet, View } from "react-native";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { Text, Input, Button } from "@commonents";
import { setToken } from "@/utils";
import { Layout } from "@layouts";
import { login } from "@/api";

export const Login = () => {
  const [data, setData] = useState({
    account_id: "",
    password: "",
  });
  const [error, setError] = useState({
    account_id: false,
    password: false,
  });
  const disabled = data.account_id === "" || data.password === "";
  const navigation = useNavigation();

  const handleChange = ({ text, name }) => {
    setData({ ...data, [name]: text });
  };

  const { mutate: loginFn } = useMutation({
    mutationFn: () => login(data),
    onError: (err: any) => {
      if (err.response.data.status === 404) {
        setError({ ...error, account_id: true });
      }
    },
    onSuccess: async (res: AxiosResponse) => {
      const { access_token, refresh_token } = res?.data;
      await setToken(access_token, refresh_token);
      navigation.reset({ routes: [{ name: "홈" as never }] });
    },
  });

  return (
    <Layout>
      <View style={styles.inputContainer}>
        <Text type={["heading", 3]} color={["primary", 300]}>
          PiCK
        </Text>
        <Text type={["body", 2]} color={["neutral", 400]}>
          스퀘어 계정으로 로그인해주세요.
        </Text>
        <View style={styles.innerInputContainer}>
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

        <View style={styles.innerInputContainer}>
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
  innerInputContainer: {
    gap: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
