"use client";

import React from "react";
import Text from "../../atoms/text/text.component";
import FormLayout from "../../layouts/formLayout/formLayout";
import { schema } from "./login.schema";
import useUserStore from "@/app/src/store/user";
import { hideLoading, showLoading } from "@/app/src/store/app";
import Button from "../../atoms/button/button.component";
import { LoginFormData } from "./login.type";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginContainer() {
  const { setLogin } = useUserStore();

  const router = useRouter();

  const onSubmit = (data: LoginFormData) => {
    showLoading();
    console.log("data", data);
    setTimeout(() => {
      setLogin(true);
      router.push("/home");
      hideLoading();
    }, 1500);
  };

  return (
    <FormLayout schema={schema}>
      {({ register, handleSubmit, errors }) => (
        <div className="flex min-h-screen w-full flex-col justify-center items-center px-6 py-12 lg:px-8 bg-background">
          <div
            style={{ boxShadow: "1px 3px 1px rgba(255, 255, 255, 0.1)" }}
            className="bg-white w-full sm:max-w-sm rounded-lg border border-orange p-8 shadow-lg"
          >
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <Image
                className="mx-auto h-10 w-auto"
                src="https://thinksmobility.com/wp-content/uploads/2022/02/logo.svg"
                alt="Your Company"
                width={200}
                height={200}
              />
              <Text
                text="login"
                className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900"
              />
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Text
                    text="email"
                    className="block text-sm/6 font-medium text-gray-900"
                  />
                  <div className="mt-2">
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className={`block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 border-2 border-gray-300 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email ? (
                      <Text
                        text={(errors?.email.message as string) ?? ""}
                        className="mt-1 text-xs text-red-500"
                      />
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>

                <div>
                  <Text
                    text="password"
                    className="block text-sm/6 font-medium text-gray-900"
                  />
                  <div className="mt-2">
                    <input
                      type="password"
                      id="password"
                      {...register("password")}
                      className={`block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 border-2 border-gray-300 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${
                        errors.password && "border-red-500"
                      }`}
                    />
                    {errors.password ? (
                      <Text
                        text={(errors?.password.message as string) ?? ""}
                        className="mt-1 text-xs text-red-500"
                      />
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    text="login"
                  />
                </div>
              </form>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <Button
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                    text="forgot_password"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </FormLayout>
  );
}
