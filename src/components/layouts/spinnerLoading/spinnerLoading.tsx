"use client";

import Lottie from "lottie-react";
import React, { ReactNode } from "react";
import LoadingGif from "../../../../public/assets/gif/loading.json";
import { useLoadingStore } from "@/src/store/app";
const LoadingSpinner = ({ children }: { children: ReactNode }) => {
  const visible = useLoadingStore((state) => state.visible);

  return (
    <>
      {visible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Lottie
            animationData={LoadingGif}
            loop={true}
            autoplay={true}
            className="w-64 h-64"
          />
        </div>
      )}
      {children}
    </>
  );
};

export default LoadingSpinner;
