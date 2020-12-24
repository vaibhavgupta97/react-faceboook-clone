import React from 'react';
import './StoryData.css';
import {Avatar} from '@material-ui/core';
function StoryData({photo,avatar,name}) {
    return (
        <div className="storyData">
        <Avatar  className="storyData__icon" src={avatar}></Avatar>
        <img src={photo} alt="avatar" className="storyData__img"/>
        <p>{name}</p>   
        </div>
    )
}

export default StoryData;
