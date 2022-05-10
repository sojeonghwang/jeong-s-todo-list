import React, { useCallback } from 'react';
import { useState, useEffect, useMemo } from 'react';
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

    const getDays = useCallback(() => {
        const date = new Date();
        const getMonth = date.getMonth();
        setMonth(getMonth + 1);
    },[]);

    // useMemo, useCallback 개념 다시 익히기
    useMemo(() => {
        const date = new Date();
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
    }, [month]);
    
    const moveToPrevMonth = () => {
        setMonth(month - 1);
    };

    const moveToNextMonth = () => {
        setMonth(month + 1);
    };

    useEffect(() => {
        setYears();
        getDays();
    }, []);

    return (
        <div>
            <CalendarHeader year={year} />
            <CalendarMonth moveToPrevMonth={moveToPrevMonth} moveToNextMonth={moveToNextMonth} thisMonthDays={thisMonthDays} emptyDays={emptyDays} month={month} />
        </div>
    );
};

export default Calendar;