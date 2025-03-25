"use client";

import { useState } from "react";
import MakeSidebar from "../layouts/sideMenu/sidemenu";
import { Routes, Route } from "react-router-dom";
import { NavigationNames } from "./navigation.type";
import HomeContainer from "../pages/home/home";
import CalendarContainer from "../pages/calendar/calendar";
import SettingsContainer from "../pages/settings/settings";
import { Bars3Icon } from "@heroicons/react/24/outline"; // Menü butonu için
import ProjectContainer from "../pages/project/project";

export default function MainNavigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-white shadow-lg transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-64`}
      >
        <MakeSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      {!isSidebarOpen && (
        <button
          className="absolute top-4 left-4 z-50 md:hidden bg-gray-100 p-2 rounded-full shadow"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Bars3Icon className="h-6 w-6 text-gray-700" />
        </button>
      )}

      {/* Sayfanın kalan kısmı */}
      <div className="flex-1 flex flex-col h-screen overflow-auto p-4 md:p-6 lg:p-8">
        <Routes>
          <Route path={NavigationNames.ROOT} element={<HomeContainer />} />
          <Route
            path={NavigationNames.CALENDAR}
            element={<CalendarContainer />}
          />
          <Route
            path={NavigationNames.PROJECT}
            element={<ProjectContainer />}
          />
          <Route
            path={NavigationNames.SETTINGS}
            element={<SettingsContainer />}
          />
        </Routes>
      </div>
    </div>
  );
}
