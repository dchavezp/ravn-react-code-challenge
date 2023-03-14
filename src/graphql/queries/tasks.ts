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
          id
          avatar
          fullName
        }
        dueDate
        name
        createdAt
        creator {
          id
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