export interface Task {
  id: string;
  status: string;
  assignee: { avatar: string; fullName: string };
  position: number;
  pointEstimate: string;
  dueDate: string;
  name: string;
  createdAt: string;
  creator: {
    avatar: string;
    fullName: string;
  };
  tags: string[];
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
