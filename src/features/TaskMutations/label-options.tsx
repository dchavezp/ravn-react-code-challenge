import { CheckBox, DropdownOption } from "@/components";
import { useCurrentTask } from "@/context/task.context";
import useListCheckBox from "@/hooks/useListCheckBox";
import { TaskTag } from "@/model/task";
import { theme } from "@/theme/theme";
import { useCallback } from "react";

export const LabelOptions = () => {
  const { value, setTask } = useCurrentTask();
  const { list, addToList, isOnList } = useListCheckBox<TaskTag>(value.tags);
  const handleAction = useCallback(
    (tag: TaskTag) => {
      addToList(tag);
      setTask?.({ ...value, tags: list });
    },
    [value]
  );
  return (
    <>
      <DropdownOption
        color={theme.colors.neutral[1]}
        action={() => {
          handleAction(TaskTag.IOS);
        }}
      >
        <CheckBox label="IOS" active={isOnList(TaskTag.IOS)} />
      </DropdownOption>
      <DropdownOption
        color={theme.colors.neutral[1]}
        action={() => {
          handleAction(TaskTag.ANDROID);
        }}
      >
        <CheckBox label="ANDROID" active={isOnList(TaskTag.ANDROID)} />
      </DropdownOption>
      <DropdownOption
        color={theme.colors.neutral[1]}
        action={() => {
          handleAction(TaskTag.NODE_JS);
        }}
      >
        <CheckBox label="NODEJS" active={isOnList(TaskTag.NODE_JS)} />
      </DropdownOption>
      <DropdownOption
        color={theme.colors.neutral[1]}
        action={() => {
          handleAction(TaskTag.REACT);
        }}
      >
        <CheckBox label="REACT" active={isOnList(TaskTag.REACT)} />
      </DropdownOption>
      <DropdownOption
        color={theme.colors.neutral[1]}
        action={() => {
          handleAction(TaskTag.RAILS);
        }}
      >
        <CheckBox label="RAILS" active={isOnList(TaskTag.RAILS)} />
      </DropdownOption>
    </>
  );
};
