import React from 'react';
import CalendarHeader from '../components/calendar/CalendarHeader';
import CalendarMonth from '../components/calendar/CalendarMonth';

const Calendar = () => {
    return (
        <div>
            <CalendarHeader />
            <CalendarMonth />
        </div>
    );
};

export default Calendar;