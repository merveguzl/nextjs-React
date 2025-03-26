import { ConvertProjectItemData } from "../../pages/project/project.type";

export type ProjectCardProps = {
  item: ConvertProjectItemData;
  onSeeDetail: (params: ConvertProjectItemData) => void;
};
