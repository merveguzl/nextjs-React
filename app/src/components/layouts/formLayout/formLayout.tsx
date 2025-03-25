"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLayoutPropsType } from "./formLayout.type";
import { LoginFormData } from "../../pages/login/login.type";

export default function FormLayout({
  defaultValues,
  children,
  schema,
  mode = "all",
  reValidateMode,
}: FormLayoutPropsType) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
    formState,
    ...formMethods
  } = useForm<LoginFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(schema) as any,
    mode,
    reValidateMode,
    defaultValues,
  });

  return (
    <>
      {children?.({
        handleSubmit,
        isValid,
        errors,
        getValues,
        register,
        formState,
        ...formMethods,
      })}
    </>
  );
}
