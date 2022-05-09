import * as React from 'react';
import { FunctionComponent } from 'react';

const EmptyDays: FunctionComponent<{ day: number }> = ({ day }) => {
    return (
        <span className='calendar-days'>
            <span className='last-month-day'>{day}</span>
        </span>
    )
};

export default EmptyDays;