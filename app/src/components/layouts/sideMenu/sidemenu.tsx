"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import SidebarItem from "../../molecules/sideBarItem/sideBarItem";
import { getMenu } from "@/app/src/api/services/menu";
import { useQuery } from "@tanstack/react-query";
import Text from "../../atoms/text/text.component";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import useUserStore from "@/app/src/store/user";
import { hideLoading, showLoading } from "@/app/src/store/app";
import { JSX } from "react";
import { MakeSidebarProps } from "./sidemenu.type";
import { MenuResponse } from "@/app/src/api/models/menu";
import Image from "next/image";
import { queryName } from "@/app/src/constants/queryName";

function Sidebar({
  isOpen,
  toggleSidebar,
  children,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
  children?: JSX.Element | JSX.Element[];
}) {
  const { setLogin } = useUserStore();

  const onLogOut = () => {
    showLoading();
    setTimeout(() => {
      setLogin(false);
      // navigate(NavigationNames.ROOT);
      hideLoading();
    }, 1500);
  };

  return (
    <>
      {isOpen ? (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 sm:hidden"
          onClick={toggleSidebar}
        />
      ) : (
        <div></div>
      )}

      <aside
        className={`fixed left-0 top-0 z-30 h-full w-64 bg-white shadow-lg transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:w-64`}
      >
        <nav className="flex h-full flex-col border-r bg-white shadow-sm">
          <div className="flex items-center justify-between p-4 pb-2">
            <Image
              src="https://thinksmobility.com/wp-content/uploads/2022/02/logo.svg"
              className="overflow-hidden transition-all w-32"
              alt="Logo"
              width={200}
              height={200}
            />
            <button className="sm:hidden p-1.5" onClick={toggleSidebar}>
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <ul className="flex-1 px-3">{children}</ul>

          <button
            onClick={onLogOut}
            className="group relative my-1 flex w-full cursor-pointer items-center rounded-md px-3 py-2 font-medium transition-colors text-gray-600 hover:bg-indigo-50"
          >
            <Text
              text={"Çıkış Yap"}
              className="overflow-hidden text-start transition-all ml-3 w-44"
            />
            <div className="absolute right-2 h-4 w-4 transition-all">
              <ChevronRightIcon />
            </div>
          </button>

          <div className="border-t p-3 flex justify-center">
            <Image
              src="https://thinksmobility.com/wp-content/uploads/2022/02/logo.svg"
              alt="Logo"
              className="h-10 w-10"
              width={200}
              height={200}
            />
          </div>
        </nav>
      </aside>
    </>
  );
}

export default function MakeSidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  setPagePath,
}: MakeSidebarProps) {
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const { data: menuData } = useQuery({
    queryKey: [queryName.GET_MENU],
    queryFn: async (): Promise<MenuResponse> => {
      return await getMenu();
    },
  });

  return (
    <div className="relative">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
        {menuData ? (
          menuData?.map((item, index) => (
            <SidebarItem key={index} {...item} setPagePath={setPagePath} />
          ))
        ) : (
          <div></div>
        )}
      </Sidebar>
    </div>
  );
}
