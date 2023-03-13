import ErrorBoundary from "@/error-boundary";
import { formatStatus } from "@/utils/formatStatus";
import { groupByKey } from "@/utils/groupByKey";
import React from "react";
import { Card } from "./Card";
import {
  StyledListTask,
  StyledSkeletonCard,
  StyledSkeletonColumn,
} from "./list-task.style";
import { TaskColumn } from "./TaskColumn";

import useApolloQuery from "@/hooks/useApolloQuery";
import { Task } from "@/model/task";
import { GET_TASKS, TaskQueryVariables } from "@/graphql/queries/tasks";
import { Error } from "@/components";
import { filterValueByQuery } from "@/utils/filterValueByQuery";
import { RiFolder5Line } from "react-icons/ri";
interface TaskListViewProps {
  query?: string;
}
export const TaskListView: React.FC<TaskListViewProps> = ({ query = "" }) => {
  const {
    data: tasks,
    loading,
    error,
  } = useApolloQuery<{ tasks: Task[] }, TaskQueryVariables>(GET_TASKS, {
    variables: {
      query: filterValueByQuery(query),
    },
  });
  const totData = tasks?.tasks.length ?? 0;
  if (loading) {
    return (
      <StyledListTask>
        <StyledSkeletonColumn>
          <StyledSkeletonCard />
          <StyledSkeletonCard />
        </StyledSkeletonColumn>
        <StyledSkeletonColumn>
          <StyledSkeletonCard />
        </StyledSkeletonColumn>
        <StyledSkeletonColumn>
          <StyledSkeletonCard />
          <StyledSkeletonCard />
        </StyledSkeletonColumn>
      </StyledListTask>
    );
  } else if (error?.networkError) {
    return (
      <Error
        message={"Response not successful. Check your internet connection"}
      />
    );
  }
  return (
    <StyledListTask>
      {totData > 0 ? (
        groupByKey(tasks?.tasks, "status")?.map((status) => {
          return (
            <TaskColumn
              key={status[0]}
              label={`${formatStatus(status[0])} (${status[1].length})`}
            >
              {status[1].map((task) => {
                return (
                  <ErrorBoundary key={task.id}>
                    <Card {...task} />
                  </ErrorBoundary>
                );
              })}
            </TaskColumn>
          );
        })
      ) : (
        <i>
          No Data <RiFolder5Line size={40} />
        </i>
      )}
    </StyledListTask>
  );
};
