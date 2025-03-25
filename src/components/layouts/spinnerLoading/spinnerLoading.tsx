"use client";

import Lottie from "lottie-react";
import React from "react";
import LoadingGif from "../../../../public/assets/gif/loading.json";
import { useLoadingStore } from "@/src/store/app";
const LoadingSpinner = () => {
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
    </>
  );
};

export default LoadingSpinner;
