"use client";
import "../../../../i18n";
import useUserStore from "@/app/src/store/user";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/app/src/lib/queryClient";
import MainNavigation from "./mainNavigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootNavigation() {
  const { isLogin } = useUserStore();

  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push("/login");
    }
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MainNavigation />
      </QueryClientProvider>
    </>
  );
}
