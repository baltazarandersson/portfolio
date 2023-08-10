import type { TagKeys } from "./tags";

export type JobType = {
  position: string;
  company: string;
  type: string;
  from: number;
  to: number;
  description: string;
  stack: TagKeys[];
  logo: string;
};
