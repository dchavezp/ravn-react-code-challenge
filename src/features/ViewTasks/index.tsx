import { TopBar, TopNavigationBar } from "@/components";
import { useState } from "react";
import { TaskListView } from "./ListTaksView";
import { StyledViewTaskContent, StyledViewTask } from "./view-task.style";

export const ViewTask = () => {
  const [query, setQuery] = useState<string>("");
  return (
    <StyledViewTask>
      <TopNavigationBar query={query} setQuery={setQuery} />
      <StyledViewTaskContent>
        <TopBar />
        <TaskListView query={query} />
      </StyledViewTaskContent>
    </StyledViewTask>
  );
};
