import { z } from "zod";
import { taskSchema } from "./project.schema";
import { ProjectListItem } from "@/app/src/api/models/project";

export type TaskFormValues = z.infer<typeof taskSchema>;

export type ProjectAddedModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (params: boolean) => void;
  postProjectItem: (params: ConvertProjectItemData) => void;
};

export type ProjectDetailModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (params: boolean) => void;
  item?: ConvertProjectItemData;
  deleteProjectListItemMutation: (params: ConvertProjectItemData) => void;
};

export type ConvertProjectItemData = {
  id: string;
} & ProjectListItem;

export enum SEE_DATA {
  ALL = "all",
  IMPORTANT = "important",
}
