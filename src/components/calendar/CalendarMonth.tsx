import React from 'react';
import CalendarDays from './CalendarDays';
import CalendarDayOfWeek from './CalendarDayOfWeek'

const CalendarMonth = () => {
    return (
        <div className='calendar-wrapper'>
            <h1 className="calendar-month">5월</h1>

            <div className='calendar-days-wrapper'>
                <CalendarDayOfWeek />
                <CalendarDays />
                <CalendarDays />
                <CalendarDays />
                <CalendarDays />
                <CalendarDays />
                <CalendarDays />
                <CalendarDays />
                <CalendarDays />
                <CalendarDays />
                <CalendarDays />
                <CalendarDays />
                <CalendarDays />
            </div>
        </div>
    )
};

export default CalendarMonth;