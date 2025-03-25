import { PageNameType } from "../../navigation/navigation.type";

export type MakeSidebarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (params: boolean) => void;
  setPagePath: (params: PageNameType) => void;
};
