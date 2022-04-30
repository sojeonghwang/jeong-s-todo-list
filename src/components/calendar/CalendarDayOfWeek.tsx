import React from 'react';

const CalendarDayOfWeek = () => {
    return (
        <div className='calendar-day-of-week-wrapper'>
            <ul className='calendar-day-of-week-ul'>
                <li>월</li>
                <li>화</li>
                <li>수</li>
                <li>목</li>
                <li>금</li>
                <li className='saturday'>토</li>
                <li className='sunday'>일</li>
            </ul>
        </div>
    )
};

export default CalendarDayOfWeek;