import { User } from "./user";

export interface Task {
  id: string;
  status: string;
  assignee: Partial<User> | null;
  position: number;
  pointEstimate: string;
  dueDate: string;
  name: string;
  createdAt: string;
  creator: Partial<User> | null;
  tags: TaskTag[];
}

export interface FilterTaskInput {
  assigneeId?: string;
  dueDate?: Date;
  name?: string;
  ownerId?: string;
  pointEstimate?: PointEstimate;
  status?: Status;
  tags?: TaskTag[];
}
export enum Status {
  BACKLOG = "BACKLOG",
  CANCELLED = "CANCELLED",
  DONE = "DONE",
  IN_PROGRESS = "IN_PROGRESS",
  TODO = "TODO",
}
export enum TaskTag {
  ANDROID = "ANDROID",
  IOS = "IOS",
  NODE_JS = "NODE_JS",
  RAILS = "RAILS",
  REACT = "REACT",
}
export enum PointEstimate {
  EIGHT = "EIGHT",
  FOUR = "FOUR",
  ONE = "ONE",
  TWO = "TWO",
  ZERO = "ZERO",
}
export const PointEstimateValues = new Map<string, number>([
  [PointEstimate.ZERO, 0],
  [PointEstimate.ONE, 1],
  [PointEstimate.TWO, 2],
  [PointEstimate.FOUR, 4],
  [PointEstimate.EIGHT, 8],
]);
