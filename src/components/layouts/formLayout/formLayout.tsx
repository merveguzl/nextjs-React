import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultSchema } from "./formSchema";
import { FormLayoutPropsType } from "./formLayout.type";

export default function FormLayout({
  defaultValues,
  children,
  schema = defaultSchema,
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
  } = useForm({
    resolver: zodResolver(schema),
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
