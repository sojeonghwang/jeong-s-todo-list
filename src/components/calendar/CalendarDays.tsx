import * as React from 'react';
import { FunctionComponent } from 'react';

const CalendarDays: FunctionComponent<{ day: number}> = ({day}) => {
    return (
        <span className='calendar-days'>
            <div>{day}</div>
            <ul className='calendar-todo-list'>
                <li>헬스장 가기</li>
                <li>헬스장 가기</li>
            </ul>
        </span>
    )
};

export default CalendarDays;