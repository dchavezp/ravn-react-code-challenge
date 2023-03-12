import { data } from "@/data/data";
import { formatStatus } from "@/utils/formatStatus";
import { groupByKey } from "@/utils/groupByKey";
import React from "react";
import { Card } from "./Card";
import { StyledListTask } from "./list-task.style";
import { TaskColumn } from "./TaskColumn";

export const TaskListView: React.FC = () => {
  const groupedItems = groupByKey(data, "status");
  const arrayGroupByKey = Array.from(groupedItems); //[{0:tagName,1:tasKData}]
  return (
    <StyledListTask>
      {arrayGroupByKey.map((status) => {
        return (
          <TaskColumn
            key={status[0]}
            label={`${formatStatus(status[0])} (${status[1].length})`}
          >
            {status[1].map((task) => {
              return <Card key={task.id} {...task} />;
            })}
          </TaskColumn>
        );
      })}
    </StyledListTask>
  );
};
