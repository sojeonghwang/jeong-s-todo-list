// lib
import * as React from 'react';
import { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// components
import EmptyDays from './EmptyDays'
import CalendarDays from './CalendarDays';
import CalendarDayOfWeek from './CalendarDayOfWeek'

// types
import { CalendarMonthPropsType } from './calendar-type';


const CalendarMonth: FunctionComponent<CalendarMonthPropsType> = 
    ({ thisMonthDays, emptyDays, month, moveToPrevMonth, moveToNextMonth}) => {

    return (
        <div className='calendar-wrapper'>
            <div className="calendar-month">
                <FontAwesomeIcon onClick={moveToPrevMonth} className='month-to-prev' icon={faAngleLeft} />
                <span>{month}월</span>
                <FontAwesomeIcon onClick={moveToNextMonth} className='month-to-next' icon={faAngleRight} />
            </div>
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