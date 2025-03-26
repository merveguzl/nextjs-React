import React from "react";
import { CheckboxProps } from "./checkbox.type";
import Text from "../text/text.component";

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <Text text={label} className="text-gray-800" />
    </label>
  );
};

export default Checkbox;
