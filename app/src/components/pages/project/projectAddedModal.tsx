import React from "react";
import Modal from "../../layouts/modal/modalLayout";
import Text from "../../atoms/text/text.component";
import { t } from "i18next";
import Button from "../../atoms/button/button.component";
import FormLayout from "../../layouts/formLayout/formLayout";
import { taskSchema } from "./project.schema";
import { ProjectAddedModalProps, TaskFormValues } from "./project.type";
import { showLoading } from "@/app/src/store/app";

export default function ProjectAddedModal({
  isModalOpen,
  setIsModalOpen,
  postProjectItem,
}: ProjectAddedModalProps) {
  const onSubmit = (data: TaskFormValues) => {
    console.log("taskakskak");
    showLoading();
    const request = {
      title: data.title,
      desc: data.description,
      isUrgent: data.isImportant,
      beginningDate: new Date()
        .toLocaleDateString("tr-TR")
        .replaceAll(".", "/"),
    };
    postProjectItem(request);
  };

  return (
    <Modal isOpen={isModalOpen}>
      <div className="flex justify-center items-center min-h-screen w-full">
        <FormLayout schema={taskSchema}>
          {({ register, handleSubmit, errors }) => (
            <div className="relative p-6 bg-white shadow-lg rounded-lg border border-gray-300 max-w-2xl w-full mx-4">
              <Text
                text="add_new_task"
                className="text-gray-800 text-xl font-bold mb-4"
              />

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Text
                    text="task_title"
                    className="text-gray-800 text-sm font-bold"
                  />
                  <input
                    {...register("title")}
                    className="mt-2 w-full border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 border-2 border-gray-300"
                    placeholder={t("task_title_placeHolder")}
                  />
                  {errors.title && (
                    <Text
                      text={errors.title.message as string}
                      className="text-red-500 text-sm mt-1"
                    />
                  )}
                </div>

                <div>
                  <Text
                    text="task_desc"
                    className="text-gray-800 text-sm font-bold"
                  />
                  <textarea
                    {...register("description")}
                    className="mt-2 w-full border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 border-2 border-gray-300"
                    placeholder={t("task_desc_placeHolder")}
                    rows={3}
                  />
                  {errors.description && (
                    <Text
                      text={errors.description.message as string}
                      className="text-red-500 text-sm mt-1"
                    />
                  )}
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("isImportant")}
                    id="important"
                    className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />

                  <Text text="important" className="ml-2 text-gray-800" />
                </div>

                <div className="flex justify-end space-x-4">
                  <Button
                    text="save"
                    className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                    type="submit"
                  />
                </div>
              </form>

              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                onClick={() => setIsModalOpen(false)}
              >
                ✖
              </button>
            </div>
          )}
        </FormLayout>
      </div>
    </Modal>
  );
}
