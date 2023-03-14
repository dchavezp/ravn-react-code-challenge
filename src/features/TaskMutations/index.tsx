import { Avatar, Button, Datepicker, Input, Menu, Tag } from "@/components";
import useModal from "@/hooks/useModal";
import { StyledTaskMutation } from "./task-mutations.style";
import {
  RiIncreaseDecreaseFill,
  RiUser3Fill,
  RiPriceTag3Fill,
  RiCalendarFill,
} from "react-icons/ri";
import { EstimateOptions } from "./estimate-options";
import { AssigneeOptions } from "./assignee-options";
import { LabelOptions } from "./label-options";
import { initialTaskState, useCurrentTask } from "@/context/task.context";
import { PointEstimateValues } from "@/model/task";

export const TaskMutations: React.FC = () => {
  const { activeModal } = useModal();
  const { value: taskValue, setTask } = useCurrentTask();
  const { name, assignee, tags, dueDate, pointEstimate } = taskValue;
  return (
    <StyledTaskMutation>
      <h1 className="title">Task Information</h1>
      <Input placeholder="New Task" weight="normal" />
      <div className="tags">
        <Menu position="right" bottom="-168px" options={<EstimateOptions />}>
          <Tag backgroundColor="neutral">
            <RiIncreaseDecreaseFill size={24} />
            {pointEstimate === ""
              ? "Estimate"
              : `${PointEstimateValues.get(pointEstimate)} Points`}
          </Tag>
        </Menu>
        <Menu position="right" bottom="-184px" options={<AssigneeOptions />}>
          {assignee ? (
            <Avatar
              sizeVariant="s"
              label={assignee.fullName}
              src={assignee.avatar}
            />
          ) : (
            <Tag backgroundColor="neutral">
              <RiUser3Fill size={24} />
              Assignee
            </Tag>
          )}
        </Menu>
        <Menu position="right" bottom="-168px" options={<LabelOptions />}>
          <Tag backgroundColor="neutral">
            <RiPriceTag3Fill size={24} />
            Label
          </Tag>
        </Menu>
        <Menu position="right" bottom="-310px" options={<Datepicker />}>
          <Tag backgroundColor="neutral">
            <RiCalendarFill size={24} />
            Due Date
          </Tag>
        </Menu>
      </div>
      <div className="actions">
        <Button variant="primary" disabled>
          Create
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            activeModal(false);
            setTask?.(initialTaskState);
          }}
        >
          Cancelar
        </Button>
      </div>
    </StyledTaskMutation>
  );
};
