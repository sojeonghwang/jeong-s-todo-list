import React from 'react';
import { useState, useEffect } from 'react';
import CalendarHeader from '../components/calendar/CalendarHeader';
import CalendarMonth from '../components/calendar/CalendarMonth';

const Calendar = () => {
    const [year, setYear] = useState<number>(0);
    const [thisMonthDays, setThisMonthDays] = useState<number[]>([]);
    const [emptyDays, setEmptyDays] = useState<number[]>([]);
    const [month, setMonth] = useState<number>(0);

    const setYears = () => {
        const date = new Date();
        const year = date.getFullYear();
        setYear(year);
    };

    const getDays = () => {
        const date = new Date();
        const month = date.getMonth();
        setMonth(month + 1);
        const firstDay = new Date(date.getFullYear(), month, 1);
        const lastDay = new Date(date.getFullYear(), month + 1, 0);
        const startDayOfWeekCount = firstDay.getDay() - 1 < 0 ? 6 : firstDay.getDay() - 1;
        const lastMonthDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        const lastMonthDays = [];

        for (let i = 0; i < startDayOfWeekCount; i++) {
            lastMonthDays.push(lastMonthDay - i);
        }

        setEmptyDays(lastMonthDays.reverse());

        const thisMonthDays = Array.from({ length: lastDay.getDate() }, (_, i) => i + 1);
        setThisMonthDays(thisMonthDays);
    }

    useEffect(() => {
        setYears();
        getDays();
    }, []);

    return (
        <div>
            <CalendarHeader year={year} />
            <CalendarMonth thisMonthDays={thisMonthDays} emptyDays={emptyDays} month={month} />
        </div>
    );
};

export default Calendar;