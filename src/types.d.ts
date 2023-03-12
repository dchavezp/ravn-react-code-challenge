export type ComponentWithChildren = {
    children?: React.ReactNode
}
export enum Status {
    BACKLOG = "BACKLOG",
    CANCELLED = "CANCELLED",
    DONE = "DONE",
    IN_PROGRESS = "IN_PROGRESS",
    TODO = "TODO"
}
export enum TaskTag {
    ANDROID,
    IOS,
    NODE_JS,
    RAILS,
    REACT,
}
export enum PointEstimate {
    EIGHT,
    FOUR,
    ONE,
    TWO,
    ZERO,
}
export interface Task {
    id: string,
    status: string,
    assignee: { avatar: string, fullName: string },
    position: number,
    pointEstimate: string
    dueDate: string,
    name: string,
    createdAt: string,
    creator: {
        avatar: string,
        fullName: string,
    }
    tags: string[]
}