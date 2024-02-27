import { StyleSheet } from "react-native";
import { View } from "react-native";
import { useState } from "react";
import Button from "@/components/common/Button";
import Layout from "@/components/common/Layout";
import Input from "@/components/common/Input";
import Text from "@/components/common/Text";
import { getEmpty } from "@/utils/getEmpty";
import { login } from "@/api";
import { useMutation } from "@tanstack/react-query";
import { setToken } from "@/utils/token";
import { useNavigation } from "@react-navigation/native";
import { AxiosError, AxiosResponse } from "axios";

export const Login = () => {
  const [data, setData] = useState({
    account_id: "",
    password: "",
  });
  const [error, setError] = useState({
    account_id: false,
    password: false,
  });
  const disabled = getEmpty(data.account_id) || getEmpty(data.password);
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
      console.log(res?.data);
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
          onPress={loginFn}
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
