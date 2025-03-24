import React from "react";

import { useTranslation } from "next-i18next";
import { ButtonPropsType } from "./button.type";

export default function Button(props: ButtonPropsType) {
  const { t } = useTranslation();

  const text = t(props.text);
  return (
    <button onClick={props.onClick} className={props?.className} {...props}>
      {text}
    </button>
  );
}
