import React from "react";
import { TextPropsType } from "./text.type";

import { useTranslation } from "next-i18next";

export default function Text(props: TextPropsType) {
  const { t } = useTranslation();

  const text = t(props.text);
  return <p className={props?.className}>{text}</p>;
}
