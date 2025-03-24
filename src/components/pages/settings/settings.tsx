import React from "react";
import Text from "../../atoms/text/text.component";
import Button from "../../atoms/button/button.component";

export default function SettingsContainer() {
  return (
    <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto p-4 md:p-6 lg:p-8 ">
      <div className="grid grid-cols-8 pt-3 sm:grid-cols-10 ">
        <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow p-8">
          <div className="pt-4">
            <Text
              text="account_settings"
              className="py-2 text-2xl font-semibold text-background"
            />
          </div>
          <hr className="mt-4 mb-8" />
          <Text
            text="email_settings"
            className="py-2 text-xl font-semibold text-background"
          />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-gray-600">
              <strong>dummy@gmail.com</strong>
            </p>
          </div>
          <hr className="mt-4 mb-8" />
          <Text
            text="password"
            className="py-2 text-xl font-semibold text-background"
          />
          <div className="flex items-center">
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
              <label>
                <Text
                  text="current_password"
                  className="text-sm text-gray-500"
                />
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    type="password"
                    id="login-password"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="***********"
                  />
                </div>
              </label>
              <label>
                <Text text="new_passord" className="text-sm text-gray-500" />
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    type="password"
                    id="login-password"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="***********"
                  />
                </div>
              </label>
            </div>
          </div>
          <Button
            text="save"
            className="mt-4 rounded-lg bg-orange px-4 py-2 text-white"
          />
        </div>
      </div>
    </div>
  );
}
