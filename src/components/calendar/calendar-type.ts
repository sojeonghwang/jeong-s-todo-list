type CalendarMonthPropsType = {
    thisMonthDays: number[];
    emptyDays: number[];
    month: number;
    moveToPrevMonth: React.MouseEventHandler;
    moveToNextMonth: React.MouseEventHandler;
};

export { CalendarMonthPropsType };