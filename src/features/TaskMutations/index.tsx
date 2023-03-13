import { Button, Input, Tag } from "@/components";
import useModal from "@/hooks/useModal";
import { StyledTaskMutation } from "./task-mutations.style";
import {
  RiIncreaseDecreaseFill,
  RiUser3Fill,
  RiPriceTag3Fill,
  RiCalendarFill,
} from "react-icons/ri";
import { TaskMutationTag } from "./task-mutations-tag";
import { EstimateOptions } from "./estimate-options";
import { AssigneeOptions } from "./assignee-options";
interface TaskMutationsProps {
  isEdit?: boolean;
}
export const TaskMutations: React.FC<TaskMutationsProps> = ({
  isEdit = false,
}) => {
  const { activeModal } = useModal();
  return (
    <StyledTaskMutation>
      <h1 className="title">{isEdit ? "Edit New Task" : "Create New Task"}</h1>
      <Input placeholder="New Task" weight="normal" />
      <div className="tags">
        <TaskMutationTag options={<EstimateOptions />}>
          <Tag backgroundColor="neutral">
            <RiIncreaseDecreaseFill size={24} />
            Estimate
          </Tag>
        </TaskMutationTag>
        <TaskMutationTag options={<AssigneeOptions />}>
          <Tag backgroundColor="neutral">
            <RiUser3Fill size={24} />
            Assignee
          </Tag>
        </TaskMutationTag>
        <Tag backgroundColor="neutral">
          <RiPriceTag3Fill size={24} />
          Label
        </Tag>
        <Tag backgroundColor="neutral">
          <RiCalendarFill size={24} />
          Due Date
        </Tag>
      </div>
      <div className="actions">
        <Button variant="primary" disabled>
          Create
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            activeModal(false);
          }}
        >
          Cancelar
        </Button>
      </div>
    </StyledTaskMutation>
  );
};
