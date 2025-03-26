import React from "react";
import Modal from "../../layouts/modal/modalLayout";
import Text from "../../atoms/text/text.component";

import { ProjectDetailModalProps } from "./project.type";

export default function ProjectDetailModal({
  isModalOpen,
  setIsModalOpen,
  item,
  deleteProjectListItemMutation,
}: ProjectDetailModalProps) {
  return (
    <Modal isOpen={isModalOpen}>
      <div className="flex justify-center items-center min-h-screen w-full px-4">
        {item && (
          <section className="relative p-6 bg-white shadow-lg rounded-lg border border-gray-300 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-32 border-b-2 mb-6">
              <div className="flex flex-col text-center md:text-left w-full">
                <Text
                  text={item?.title}
                  className="font-semibold text-lg md:text-xl text-background"
                />
                <div className="grid gap-2 grid-cols-1 mt-2 w-full">
                  {item.isUrgent && (
                    <Text
                      text="important_list"
                      className="text-sm md:text-base text-red-600"
                    />
                  )}
                  <Text
                    text={item.beginningDate}
                    className="text-sm md:text-base text-gray-600"
                  />
                </div>
              </div>
            </div>
            <section>
              <article className="text-gray-500 leading-6 tracking-wide text-center md:text-left">
                <Text text={item.desc} className="text-background" />
              </article>
              <div className="sm:flex items-center justify-end">
                <button
                  onClick={() => deleteProjectListItemMutation(item)}
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-orange text-sm leading-none text-gray-600 py-3 px-5 bg-red-100 rounded hover:bg-gray-200 focus:outline-none"
                >
                  <Text text="delete" />
                </button>
              </div>
            </section>
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
          </section>
        )}
      </div>
    </Modal>
  );
}
