import React from 'react';
import './People.css';
import {Avatar} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function People({image,name}) {
    return (
        <div className="people">
        <Avatar  className="people__icon" src={image}/>
        <FiberManualRecordIcon className="people__dot"/>
        <p>{name}</p>  
        </div>
    )
}

export default People
