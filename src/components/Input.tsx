import React from "react";

type InputProps = {
  type: "text" | "file";
  name: string;
  value?: string;
  placeholder: string;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: InputProps) {
  return (
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      className={props.className}
      onChange={props.onChange}
    />
  );
}

export default Input;
