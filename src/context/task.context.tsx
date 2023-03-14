import { Task } from "@/model/task";
import { ComponentWithChildren } from "@/types";
import { createContext, useState, useContext } from "react";
export const initialTaskState: Task = {
  assignee: null,
  createdAt: "",
  creator: null,
  dueDate: "",
  id: "",
  name: "",
  pointEstimate: "",
  position: 0,
  status: "",
  tags: [],
};
export const TaskCtx = createContext<{
  value: Task;
  setTask?: React.Dispatch<React.SetStateAction<Task>>;
}>({ value: initialTaskState });

export const useCurrentTask = () => {
  const currentTaskContext = useContext(TaskCtx);

  if (!currentTaskContext) {
    throw new Error("useCurrenTask has to be used within <TaskContext>");
  }

  return currentTaskContext;
};

function TaskContext({ children }: ComponentWithChildren) {
  const [task, setTask] = useState<Task>(initialTaskState);
  return (
    <TaskCtx.Provider value={{ value: task, setTask }}>
      {children}
    </TaskCtx.Provider>
  );
}
export default TaskContext;
