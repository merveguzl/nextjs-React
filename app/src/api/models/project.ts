export type ProjectItem = {
  projectImage: string;
  projectName: string;
  subTitle: string;
  title: string;
  time: string;
  url: string;
  desc: string;
};

export type ProjectResponse = ProjectItem[];

export type ProjectListItem = {
  title: string;
  desc: string;
  isUrgent: boolean;
  beginningDate: string;
};
export type ProjectListResponse = ProjectListItem[];

export type DeleteProjectListItem = {
  id: string;
};
