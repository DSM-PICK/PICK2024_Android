import { Button } from "@commonents";

type SelectedType = {
  floor: number;
  classroom_name: string;
  start_period: number;
  end_period: number;
};

interface PropType {
  width: number;
  selected: any;
  setSelected: (props: SelectedType) => void;
  item: string;
}

export default function ClassButton({
  width,
  selected,
  setSelected,
  item,
}: PropType) {
  const { classroom_name: className } = selected;

  return (
    <Button
      size="custom"
      customSize={(width - 20) / 3}
      onPress={() => {
        setSelected({
          ...selected,
          classroom_name: className === item ? undefined : item,
        });
      }}
      fontColor={className === item ? ["neutral", 1100] : ["neutral", 50]}
      fontType={item.length < 6 ? ["body", 2] : ["body", 3]}
      color={className === item ? ["primary", 500] : ["primary", 1200]}
    >
      {item}
    </Button>
  );
}
