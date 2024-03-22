declare module "BoxType" {
  type roundType = "none" | "sm" | "lg" | "full";
  export interface propType {
    children: React.ReactNode;
    rounded?: roundType;
    onPress?: () => void;
    width?: string | number;
    height?: string | number;
  }
}

declare module "CarouselType" {
  export interface PropType {
    children: React.ReactElement[];
    height: string;
    onScroll?: (item: number) => void;
    first?: number | undefined;
  }
}

declare module "HiddenType" {
  export interface PropType {
    data: any;
    children: React.ReactElement[] | React.ReactElement;
  }
}

declare module "LayoutType" {
  export interface PropType {
    children: React.ReactNode;
    name?: string;
    home?: boolean;
    isDone?: boolean;
    onDone?: () => void;
    noHorizontalPadding?: boolean;
  }
}
