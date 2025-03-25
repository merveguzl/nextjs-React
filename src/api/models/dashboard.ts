import { PageNameType } from "@/src/components/navigation/navigation.type";

export type DashboardItem = {
  title: string;
  button: string;
  path: PageNameType;
};

export type DashboardResponse = DashboardItem[];
