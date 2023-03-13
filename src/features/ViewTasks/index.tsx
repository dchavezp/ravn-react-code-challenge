import { TopBar, TopNavigationBar } from "@/components";
import useModal from "@/hooks/useModal";
import { useState } from "react";
import { TaskListView } from "./ListTaksView";
import { StyledViewTaskContent, StyledViewTask } from "./view-task.style";

export const ViewTask = () => {
  const [query, setQuery] = useState<string>("");
  const { activeModal } = useModal();
  return (
    <StyledViewTask>
      <TopNavigationBar query={query} setQuery={setQuery} />
      <StyledViewTaskContent>
        <TopBar
          onClick={() => {
            activeModal(true);
          }}
        />
        <TaskListView query={query} />
      </StyledViewTaskContent>
    </StyledViewTask>
  );
};
