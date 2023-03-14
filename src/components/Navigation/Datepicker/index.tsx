import { CaptionProps, DayPicker, useNavigation } from "react-day-picker";
import { format } from "date-fns";
import {
  StyledDatePickerButton,
  StyledDatePickerContainer,
  StyledNavigationContainer,
} from "./date-picker.style";
import "react-day-picker/dist/style.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export const Datepicker = () => {
  function CustomCaption(props: CaptionProps) {
    const { goToMonth, nextMonth, previousMonth } = useNavigation();
    return (
      <StyledNavigationContainer>
        <button
          disabled={!previousMonth}
          onClick={() => previousMonth && goToMonth(previousMonth)}
        >
          <RiArrowLeftSLine size={16} />
        </button>
        {format(props.displayMonth, "MMM yyy")}
        <button
          disabled={!nextMonth}
          onClick={() => nextMonth && goToMonth(nextMonth)}
        >
          <RiArrowRightSLine size={16} />
        </button>
      </StyledNavigationContainer>
    );
  }
  return (
    <StyledDatePickerContainer>
      <DayPicker
        showOutsideDays
        components={{
          Caption: CustomCaption,
        }}
        mode="single"
        style={{ margin: 0 }}
      />
      <StyledDatePickerButton>Today</StyledDatePickerButton>
    </StyledDatePickerContainer>
  );
};
