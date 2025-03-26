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
import { ConvertProjectItemData, SEE_DATA } from "./project.type";

export default function ProjectContainer() {
  const [isVisibleAddTask, setVisibleAddTask] = useState<boolean>(false);
  const [isVisibleDetail, setVisibleDetail] = useState<boolean>(false);
  const [modalData, setModalData] = useState<
    ConvertProjectItemData | undefined
  >();
  const [seeData, setSeeData] = useState<SEE_DATA>(SEE_DATA.ALL);
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

  const pureData = projectListData
    ? Object.entries(projectListData)
        .map(([id, item]) => ({
          id,
          ...item,
        }))
        .filter((item) => {
          if (seeData === SEE_DATA.ALL) {
            return true;
          }
          if (seeData === SEE_DATA.IMPORTANT) {
            return item.isUrgent === true;
          }
          return true;
        })
    : [];

  const totalItems = pureData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedData = projectListData
    ? pureData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : [];

  const onSeeDetail = (item: ConvertProjectItemData) => {
    setModalData(item);
    setVisibleDetail(true);
  };

  return (
    <div className="sm:px-6 w-full">
      <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
        <div className="sm:flex items-center justify-between">
          <div className="flex items-center">
            <a className="rounded-full ml-4 sm:ml-8">
              <div
                className={`py-2 px-8  hover:bg-softOrange text-orange rounded-full ${
                  seeData === SEE_DATA.ALL ? "bg-softOrange" : "bg-white-100"
                }`}
                onClick={() => setSeeData(SEE_DATA.ALL)}
              >
                <Text text="all" />
              </div>
            </a>
            <a className="rounded-full  ml-4 sm:ml-8">
              <div
                className={`py-2 px-8  hover:bg-softOrange text-orange rounded-full ${
                  seeData === SEE_DATA.IMPORTANT
                    ? "bg-softOrange"
                    : "bg-white-100"
                }`}
                onClick={() => setSeeData(SEE_DATA.IMPORTANT)}
              >
                <Text text="important_list" />
              </div>
            </a>
          </div>

          <button
            onClick={() => setVisibleAddTask(true)}
            className="mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-orange hover:bg-softOrange  rounded"
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
