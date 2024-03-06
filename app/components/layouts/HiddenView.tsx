import React from "react";

interface PropTypes {
  data: any;
  children: React.ReactElement[] | React.ReactElement;
}

export default function HiddenView({ data, children }: PropTypes) {
  if (!!data) {
    return <>{children}</>;
  } else {
    return <></>;
  }
}
