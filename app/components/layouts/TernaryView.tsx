import { PropType } from "TernaryType";

export default function TernaryView({ data, onTrue, onFalse }: PropType) {
  return !!data ? onTrue : onFalse;
}
