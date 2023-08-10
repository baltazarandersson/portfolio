import type { TagKeys, TagType } from "./tags";

export type ProjectWithKeysType = {
  thumbnail: string;
  title: string;
  description: string;
  repository: string;
  deploy?: string;
  tags: TagKeys[];
};

export interface ProjectType extends Omit<ProjectWithKeysType, "tags"> {
  tags: TagType[];
}
