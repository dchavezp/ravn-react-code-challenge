import { PointEstimate, Status, TaskTag } from "@/model/task"
import { gql } from "@apollo/client";

export interface CreateTaskInput {
    assigneeId: string
    dueDate: Date
    name: string
    pointEstimate: PointEstimate
    status: Status
    tags: TaskTag[]
}

export const CREATE_TASK = gql`
  mutation MutateTask($input:CreateTaskInput!){
    createTask(input:$input){
        dueDate
        name
        pointEstimate
        tags
        position
        status
        assignee{
            id
            avatar
            fullName
        }
    }
  }
`;