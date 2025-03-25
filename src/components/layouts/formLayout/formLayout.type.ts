import { ReactNode } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormGetValues,
  UseFormReturn,
} from "react-hook-form";
import { z } from "zod";
import { LoginFormData } from "../../pages/login/login.type";

interface ChildrenProps extends UseFormReturn<LoginFormData> {
  isValid: boolean;
  errors: FieldErrors<FieldValues>;
  getValues: UseFormGetValues<LoginFormData>;
}

export type FormLayoutPropsType = {
  defaultValues?: FieldValues;
  children?: (formMethods: ChildrenProps) => ReactNode;
  schema: z.ZodObject<
    FieldValues,
    "strip",
    z.ZodTypeAny,
    FieldValues,
    FieldValues
  >;
  mode?: "all" | "onChange" | "onBlur" | "onSubmit";
  reValidateMode?: "onChange" | "onBlur" | "onSubmit";
};
