import { Button } from "@commonents";

interface PropType {
  setVisible: ([boolean, string]) => void;
  value: string;
  id: string;
  text: string;
}

const buttonOptions = {
  size: "auto",
  fontType: ["button", "ES"],
};

export default function MealButton({ setVisible, value, id, text }: PropType) {
  return (
    <Button
      onPress={() => setVisible([true, id])}
      id={id}
      fontColor={value === id ? ["neutral", 1100] : ["neutral", 50]}
      color={value === id ? ["primary", 500] : ["neutral", 1000]}
      {...(buttonOptions as any)}
    >
      {text}
    </Button>
  );
}
