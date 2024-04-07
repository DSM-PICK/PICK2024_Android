import { Button } from "@commonents";

type SelectedType = {
  floor: number;
  classroom_name: string;
  start_period: number;
  end_period: number;
};

interface PropType {
  selected: any;
  setSelected: (props: SelectedType) => void;
  item: number;
}

export default function ClassButton({ selected, setSelected, item }: PropType) {
  const { floor } = selected;

  return (
    <Button
      key={item}
      size="auto"
      onPress={() => setSelected({ ...selected, floor: item })}
      fontColor={item === floor ? ["neutral", 1100] : ["neutral", 50]}
      fontType={["body", 2]}
      color={item === floor ? ["primary", 500] : ["primary", 1200]}
    >
      {`${item}층`}
    </Button>
  );
}
