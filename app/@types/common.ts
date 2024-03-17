type SON = string | number;
type KSS = { [key: string]: string };

declare module "CommonType" {
  export type strOrNum = SON;
  export type stringObj = { [key: string]: string };
}

declare module "ButtonType" {
  type sizePropType =
    | "custom"
    | "full"
    | "extraLarge"
    | "large"
    | "medium"
    | "small"
    | "auto";
  export interface propType {
    size: sizePropType;
    children: string;
    id?: string;
    disabled?: boolean;
    customSize?: string | number;
    fontType?: [string, number | string];
  }
}

declare module "InputType" {
  type changeEventType = {
    text: string;
    name: string;
  };
  export interface PropType {
    value: string;
    placeholder: string;
    onChange: ({ text, name }: changeEventType) => void;
    name?: string;
    error?: boolean;
    disabled?: boolean;
    password?: boolean;
    multiLine?: number;
  }
}

declare module "ScrollPickerType" {
  export interface PropType {
    items: SON[];
    onScroll: (selected: SON, id: SON) => void;
    id?: SON;
  }
}

declare module "TextType" {
  type weightType = "B" | "M" | "R";
  export type typeType = SON[] | [string, SON, weightType];
  export interface propType {
    type: typeType;
    hidden?: boolean;
    onPress?: () => void;
  }
  export namespace constants {
    type weightType =
      | string
      | {
          M?: string;
          B?: string;
          R?: string;
        };

    export interface textStyleType {
      [key: string]: {
        [key: string]: {
          size: number;
          letterSpacing: number;
          weight: weightType;
          lineHeight: number;
        };
      };
    }
  }
}

declare module "CalanderType" {
  export interface calPropType {
    picks?: number[];
    onMove?: ({}: any) => void;
    onSelect?: ({}: any) => void;
  }
  export interface weekPropType {
    date: number[];
    setSelected: ([]) => void;
    picks: number[] | undefined;
    selected: number[] | undefined;
    onSelect: (({}) => void) | undefined;
  }
}

declare module "ModalType" {
  export interface PropType {
    children: React.ReactElement;
    type: number;
    visible: boolean;
    onAccept: () => void;
    setVisible: (visible: any) => void;
  }
}

declare module "ToggleType" {
  export interface PropType {
    items: string[];
    onPress: (item: string) => void;
  }
}
