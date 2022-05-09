import * as React from 'react';
import { FunctionComponent } from 'react';
import EmptyDays from './EmptyDays'
import CalendarDays from './CalendarDays';
import CalendarDayOfWeek from './CalendarDayOfWeek'

const CalendarMonth: FunctionComponent<{ thisMonthDays: number[], emptyDays: number[], month: number}> = 
({thisMonthDays, emptyDays, month}) => {

    return (
        <div className='calendar-wrapper'>
            <div className="calendar-month">{month}월</div>
            <div className='calendar-days-wrapper'>
                <CalendarDayOfWeek />
                {
                    emptyDays.map((lastDay, index) => (
                        <EmptyDays key={index} day={lastDay} />
                    ))
                }
                {
                    thisMonthDays.map((day, index) => (
                        <CalendarDays key={index} day={day} />
                    ))
                }
            </div>
        </div>
    )
};

export default CalendarMonth;