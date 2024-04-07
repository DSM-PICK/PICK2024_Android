import { PropType } from "HiddenType";

export default function HiddenView({ data, children }: PropType) {
  return !!data ? children : <></>;
}
