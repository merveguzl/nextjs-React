"use client";

import Button from "../../atoms/button/button.component";
import Text from "../../atoms/text/text.component";
import { DashboardItem } from "@/app/src/api/models/dashboard";

const HomeAlert = ({ item }: { item: DashboardItem }) => {
  return (
    <div className="flex flex-col">
      <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-7xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange to-secondary rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-7 py-6 bg-white rounded-lg leading-none flex items-top justify-start space-x-6">
            <svg
              className="w-8 h-8 text-orange"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
              ></path>
            </svg>
            <div className="space-y-2">
              <Text
                text={item.title}
                className="text-background w-64 overflow-hidden text-ellipsis whitespace-nowrap"
              />
              <Button
                text={`${item.button}→`}
                className="block text-orange group-hover:text-slate-800 transition duration-200"
                // onClick={() => navigate(item.path)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAlert;
