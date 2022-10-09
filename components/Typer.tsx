import React from "react";
import { TypeAnimation } from "react-type-animation";

type Props = {
  children: string;
  delay?: number;
};

export const Typer = (props: Props) => {
  const sequence = new Array<string | number>();
  for (let i = 0; i <= props.children.length; i++) {
    sequence.push(props.children.substring(0, i));
    sequence.push(props.delay || 50);
  }

  return <TypeAnimation sequence={sequence} wrapper="p" cursor={true} />;
};
