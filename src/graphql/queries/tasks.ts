import { FilterTaskInput } from "@/model/task";
import { gql } from "@apollo/client";

export const GET_TASKS = gql`
    query Task($query: FilterTaskInput!) {
      tasks(input: $query) {
        id
        position
        pointEstimate
        status
        assignee {
          avatar
          fullName
        }
        dueDate
        name
        createdAt
        creator {
          avatar
          fullName
        }
        tags
      }
    }
  `;

export interface TaskQueryVariables {
    query: FilterTaskInput;
}