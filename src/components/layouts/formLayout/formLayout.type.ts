import { ReactNode } from "react";
import { FieldErrors, FieldValues, UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface ChildrenProps extends UseFormReturn<FieldValues> {
  isValid: boolean;
  errors: FieldErrors<FieldValues>;
}

export type FormLayoutPropsType = {
  defaultValues?: FieldValues;
  children?: (formMethods: ChildrenProps) => ReactNode;
  schema?: z.ZodObject<
    FieldValues,
    "strip",
    z.ZodTypeAny,
    FieldValues,
    FieldValues
  >;
  mode?: "all" | "onChange" | "onBlur" | "onSubmit";
  reValidateMode?: "onChange" | "onBlur" | "onSubmit";
};
