"use client";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Text from "../../atoms/text/text.component";
import { PageNameType } from "../../navigation/navigation.type";
import Image from "next/image";

interface SidebarItemProps {
  active?: boolean;
  icon: React.ReactNode;
  text: string;
  subMenu?: SubMenuItemProps[] | null;
  path: PageNameType;
  setPagePath: (params: PageNameType) => void;
}

interface SubMenuItemProps extends Omit<SidebarItemProps, "expanded"> {
  subMenu?: never;
}

export default function SidebarItem({
  icon,
  active = false,
  text,
  subMenu = null,
  path,
  setPagePath,
}: SidebarItemProps) {
  return (
    <>
      <li>
        <button
          onClick={() => setPagePath(path)}
          className={`
         group relative my-1 flex w-full cursor-pointer
         items-center rounded-md px-3
         py-2 font-medium transition-colors
         ${
           active && !subMenu
             ? "text-primary-500 bg-gradient-to-tr from-indigo-200 to-indigo-100"
             : "text-gray-600 hover:bg-indigo-50"
         }
     `}
        >
          <span className="h-6 w-6">
            <Image
              src={icon as string}
              alt="sidebar icın"
              width={200}
              height={200}
            />
          </span>
          <Text
            text={text}
            className={`overflow-hidden text-start transition-all ml-3 w-44`}
          />

          <div className={`absolute right-2 h-4 w-4 transition-all`}>
            <ChevronRightIcon />
          </div>
        </button>
      </li>
    </>
  );
}
