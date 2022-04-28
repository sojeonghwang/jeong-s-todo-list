import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";

const CalendarHeader = () => {
    return (
        <div className='calendar-header'>
            <FontAwesomeIcon className='menu' icon={faBars} />
            <span className='calendar-year'>2022</span>
        </div>
    )
};

export default CalendarHeader;