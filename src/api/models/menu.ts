import { PageNameType } from "@/src/components/navigation/navigation.type";

export type MenuItem = {
  icon: string;
  text: string;
  path: PageNameType;
};

export type MenuResponse = MenuItem[];
