"use client";

import { getProjectData } from "@/src/api/services/project";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Text from "../../atoms/text/text.component";
import Button from "../../atoms/button/button.component";
import LoadingState from "../../molecules/loadingState/loadingState";
import { ProjectResponse } from "@/src/api/models/project";
import Image from "next/image";

export default function ProjectContainer() {
  const [active, setActive] = useState(0);
  const { data: projectData, isLoading } = useQuery({
    queryKey: ["getProjectData"],
    queryFn: async (): Promise<ProjectResponse> => {
      return await getProjectData();
    },
  });

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <div className="flex flex-col md:flex-row w-full h-full shadow-lg rounded-3xl">
      <section className="flex flex-col pt-3 w-full md:w-4/12 bg-gray-50 min-h-[50vh] md:min-h-full overflow-y-auto">
        <ul className="mt-6 space-y-4">
          {projectData?.map((item, key) => (
            <li
              key={key}
              className={`py-6 border-b px-4 transition hover:bg-amber-100 cursor-pointer text-center md:text-left ${
                active === key && "bg-amber-700 text-white"
              }`}
              onClick={() => setActive(key)}
            >
              <div className="flex flex-col md:flex-row justify-between items-center">
                <Text
                  text={item.title}
                  className={`text-lg font-semibold ${
                    active === key ? "text-white" : "text-background"
                  } `}
                />
                <Text text={item.time} className="text-md text-gray-400" />
              </div>
              <div className="text-md italic text-gray-400 text-center md:text-left">
                {item.subTitle}
              </div>
            </li>
          ))}
        </ul>
      </section>
      {projectData && (
        <section className="w-full md:w-6/12 px-4 flex flex-col bg-white rounded-r-3xl">
          <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-32 border-b-2 mb-8">
            <div className="flex space-x-4 items-center">
              <div className="h-20 w-20 md:h-12 md:w-12 rounded-full overflow-hidden">
                <Image
                  src={projectData[active].projectImage}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  alt="projectimage"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex flex-col text-center md:text-left">
                <Text
                  text={projectData[active].projectName}
                  className="font-semibold text-lg text-background"
                />
              </div>
            </div>
          </div>
          <section>
            <article className="text-gray-500 leading-7 tracking-wider text-center md:text-left">
              <Text
                text={projectData[active].desc}
                className="text-background"
              />
              <Button
                text="Jiraya Git"
                className="block text-orange group-hover:text-slate-800 transition duration-200 mx-auto md:mx-0"
              />
            </article>
          </section>
        </section>
      )}
    </div>
  );
}
