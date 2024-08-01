import React from "react";
type ButtonProps = {
  type: "reset" | "submit" | "button";
  name: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className: string;
  "data-name": string;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      type={props.type}
      name={props.name}
      onClick={props.onClick}
      className={props.className}
      data-name={props["data-name"]}
    >
      {props.name}
    </button>
  );
}
