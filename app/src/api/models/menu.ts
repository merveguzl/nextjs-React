import { PageNameType } from "@/app/src/components/navigation/navigation.type";

export type MenuItem = {
  icon: string;
  text: string;
  path: PageNameType;
};

export type MenuResponse = MenuItem[];
