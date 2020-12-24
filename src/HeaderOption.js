import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@material-ui/core';
function HeaderOption({avatar,Icon,title,color}) {
return (
    <div className="header__option">
    <div  className="headertOption">
    {Icon && <Icon className="headerOption__icon"  style={{color:color}}/>}
    {avatar && 
        <Avatar src={avatar} className="headerOption__icon"/>}
    <h4 classname="headerOption__title">{title}</h4>
    </div>  
    </div>
)
}

export default HeaderOption
