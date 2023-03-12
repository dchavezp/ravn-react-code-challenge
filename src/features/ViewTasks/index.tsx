import { TopBar, TopNavigationBar } from "@/components";
import React from "react";
import { TaskListView } from "./ListTaksView";
import { StyledViewTaskContent, StyledViewTask } from "./view-task.style";

export const ViewTask = () => {
  return (
    <StyledViewTask>
      <TopNavigationBar />
      <StyledViewTaskContent>
        <TopBar />
        <TaskListView />
      </StyledViewTaskContent>
    </StyledViewTask>
  );
};
