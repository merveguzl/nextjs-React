import {
  deleteProjectListItem,
  getProjectList,
  postProjectList,
} from "@/app/src/api/services/project";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import LoadingState from "../../molecules/loadingState/loadingState";
import { ProjectListResponse } from "@/app/src/api/models/project";
import ProjectCard from "../../molecules/projectCard/projectCard";
import Text from "../../atoms/text/text.component";
import ProjectAddedModal from "./projectAddedModal";
import { hideLoading, showLoading } from "@/app/src/store/app";
import { t } from "i18next";
import ProjectDetailModal from "./projectDetailModal";
import { queryName } from "@/app/src/constants/queryName";
import Pagination from "../../molecules/pagination/pagination";
import { ConvertProjectItemData } from "./project.type";

export default function ProjectContainer() {
  const [isVisibleAddTask, setVisibleAddTask] = useState<boolean>(false);
  const [isVisibleDetail, setVisibleDetail] = useState<boolean>(false);
  const [modalData, setModalData] = useState<
    ConvertProjectItemData | undefined
  >();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const {
    data: projectListData,
    isLoading,
    refetch: getProjectListReFetch,
  } = useQuery({
    queryKey: [queryName.GET_PROJECT_LIST],
    queryFn: async (): Promise<ProjectListResponse> => {
      return await getProjectList();
    },
  });

  const { mutate: postProjectItem } = useMutation({
    mutationFn: (body: ConvertProjectItemData) => postProjectList(body),
    onSuccess: () => {
      setVisibleAddTask(false);
      alert(t("saved_task"));
      getProjectListReFetch();
      hideLoading();
    },
    onError: () => {
      alert(t("error_task_added"));
      hideLoading();
    },
  });

  const { mutate: deleteProjectListItemMutation } = useMutation({
    mutationFn: (body: ConvertProjectItemData) => {
      showLoading();
      return deleteProjectListItem({ id: body.id });
    },
    onSuccess: () => {
      setVisibleDetail(false);
      alert(t("deleted_meesage"));
      getProjectListReFetch();
      hideLoading();
    },
    onError: () => {
      alert(t("deleted_error"));
      hideLoading();
    },
  });

  if (isLoading) {
    return <LoadingState />;
  }

  const totalItems = projectListData
    ? Object.values(projectListData).length
    : 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = projectListData
    ? Object.entries(projectListData)
        .map(([id, item]) => ({
          id,
          ...item,
        }))
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : [];

  const onSeeDetail = (item: ConvertProjectItemData) => {
    setModalData(item);
    setVisibleDetail(true);
  };

  return (
    <div className="sm:px-6 w-full">
      <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
        <div className="sm:flex items-center justify-end">
          <button
            onClick={() => setVisibleAddTask(true)}
            className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
          >
            <Text
              text="add_task"
              className="text-sm font-medium leading-none text-white"
            />
          </button>
        </div>
        <div className="mt-7 overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <tbody>
              {paginatedData.map((item, key) => (
                <ProjectCard key={key} item={item} onSeeDetail={onSeeDetail} />
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
      <ProjectAddedModal
        isModalOpen={isVisibleAddTask}
        setIsModalOpen={setVisibleAddTask}
        postProjectItem={postProjectItem}
      />
      <ProjectDetailModal
        isModalOpen={isVisibleDetail}
        setIsModalOpen={setVisibleDetail}
        item={modalData}
        deleteProjectListItemMutation={deleteProjectListItemMutation}
      />
    </div>
  );
}
