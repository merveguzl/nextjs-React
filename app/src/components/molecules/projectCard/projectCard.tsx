import React from "react";
import { ProjectCardProps } from "./projectCard.type";
import Text from "../../atoms/text/text.component";

export default function ProjectCard({ item, onSeeDetail }: ProjectCardProps) {
  return (
    <tr
      tabIndex={0}
      className="focus:outline-none h-16 border border-gray-100 rounded"
    >
      <td className="">
        <div className="flex items-center pl-5">
          <Text
            text={item.title}
            className="text-base font-medium leading-none text-gray-700 mr-2"
          />
        </div>
      </td>
      <td className="pl-24"></td>
      <td className="pl-5"></td>
      <td className="pl-5"></td>
      <td className="pl-5">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7.5 5H16.6667"
              stroke="#52525B"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.5 10H16.6667"
              stroke="#52525B"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.5 15H16.6667"
              stroke="#52525B"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4.16669 5V5.00667"
              stroke="#52525B"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4.16669 10V10.0067"
              stroke="#52525B"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4.16669 15V15.0067"
              stroke="#52525B"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <Text
            text={item.beginningDate}
            className="text-sm leading-none text-gray-600 ml-2"
          />
        </div>
      </td>

      <td className="pl-5">
        {item.isUrgent && (
          <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">
            <Text text="important_list" />
          </button>
        )}
      </td>
      <td className="pl-4">
        <button
          onClick={() => onSeeDetail(item)}
          className="focus:ring-2 focus:ring-offset-2 focus:ring-orange text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
        >
          <Text text="detail" />
        </button>
      </td>
    </tr>
  );
}
