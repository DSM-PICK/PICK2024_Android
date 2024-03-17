import { PropType } from "HiddenType";

export default function HiddenView({ data, children }: PropType) {
  if (!!data) {
    return <>{children}</>;
  } else {
    return <></>;
  }
}
