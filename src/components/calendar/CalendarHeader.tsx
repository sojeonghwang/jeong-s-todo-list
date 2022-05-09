import React from 'react';
import {FunctionComponent} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";

const CalendarHeader: FunctionComponent<{year: number}> = ({year}) => {
    return (
        <div className='calendar-header'>
            <FontAwesomeIcon className='menu' icon={faBars} />
            <span className='calendar-year'>{year}</span>
        </div>
    )
};

export default CalendarHeader;