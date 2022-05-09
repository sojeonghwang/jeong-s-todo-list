import React, { useEffect, useState } from 'react';
import EmptyDays from './EmptyDays'
import CalendarDays from './CalendarDays';
import CalendarDayOfWeek from './CalendarDayOfWeek'

const CalendarMonth = () => {
    const [daysCount, setDaysCount] = useState<number>(0);
    const [emptyDays, setEmptyDays] = useState<number[]>([]);
    
    const getDays = () => {
        const date = new Date();
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        const startDayOfWeekCount = firstDay.getDay() - 1 < 0 ? 6 : firstDay.getDay() - 1;
        const lastMonthDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        const lastMonthDays = [];
        for (let i = 0; i < startDayOfWeekCount; i++) {
            lastMonthDays.push(lastMonthDay - i);
        }
        console.log('lastMonthDays', lastMonthDays)
        setEmptyDays(lastMonthDays.reverse());
        setDaysCount(lastDay.getDate());
    }
    
    useEffect(() => {
        getDays();
    }, []);

    return (
        <div className='calendar-wrapper'>
            <h1 className="calendar-month">5월</h1>

            <div className='calendar-days-wrapper'>
                <CalendarDayOfWeek />
                {
                    emptyDays.map((lastDay, index) => (
                        <EmptyDays key={index} day={lastDay} />
                    ))
                }
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