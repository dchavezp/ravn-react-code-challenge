/* eslint-disable @typescript-eslint/no-empty-function */
import { DropdownOption } from "@/components";
import { useCurrentTask } from "@/context/task.context";
import { theme } from "@/theme/theme";
import { RiIncreaseDecreaseFill } from "react-icons/ri";

export const EstimateOptions: React.FC = () => {
  const { value, setTask } = useCurrentTask();
  const handleAction = (points: string) => {
    setTask?.({ ...value, pointEstimate: points });
  };
  return (
    <>
      <DropdownOption
        color={theme.colors.neutral[1]}
        action={() => {
          handleAction("ZERO");
        }}
      >
        <RiIncreaseDecreaseFill size={24} /> 0 Points
      </DropdownOption>
      <DropdownOption
        color={theme.colors.neutral[1]}
        action={() => {
          handleAction("ONE");
        }}
      >
        <RiIncreaseDecreaseFill size={24} /> 1 Points
      </DropdownOption>
      <DropdownOption
        color={theme.colors.neutral[1]}
        action={() => {
          handleAction("TWO");
        }}
      >
        <RiIncreaseDecreaseFill size={24} /> 2 Points
      </DropdownOption>
      <DropdownOption
        color={theme.colors.neutral[1]}
        action={() => {
          handleAction("FOUR");
        }}
      >
        <RiIncreaseDecreaseFill size={24} /> 4 Points
      </DropdownOption>
      <DropdownOption
        color={theme.colors.neutral[1]}
        action={() => {
          handleAction("EIGHT");
        }}
      >
        <RiIncreaseDecreaseFill size={24} /> 8 Points
      </DropdownOption>
    </>
  );
};
