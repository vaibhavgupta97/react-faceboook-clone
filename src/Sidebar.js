import React from 'react';
import {Avatar} from '@material-ui/core';
import PolicyIcon from '@material-ui/icons/Policy';
import FlagIcon from '@material-ui/icons/Flag';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import EventIcon from '@material-ui/icons/Event';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RestoreIcon from '@material-ui/icons/Restore';
//import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import './Sidebar.css';
function Sidebar() {
return (
<div className="sidebar">
<div className="sidebar__profileInfo">
<Avatar src="https://c.ndtvimg.com/2020-11/v6v4efno_pm-modi_625x300_20_November_20.jpg"
className="sidebar__avatar"></Avatar>
<h5>Vaibhav gupta</h5>
</div>
<div className="sidebar__covidInfo">
<PolicyIcon className="a"/>
<h5>COVID_19 Information Center</h5>
</div>
<div className="sidebar__pages">
<FlagIcon className="b"/>
<h5>Pages</h5>
</div>
<div className="sidebar__friends">
<PeopleIcon className="c"/>
<h5>Friends</h5>
</div>
<div className="sidebar__groups">
<PeopleOutlineIcon className="i"/>
<h5>Groups</h5>
</div>
<div className="sidebar__store">
<StorefrontIcon className="d"/>
<h5>Marketplace</h5>
</div>
<div className="sidebar__video">
<OndemandVideoIcon className="e"/>
<h5>Videos <p>9+ new videos</p></h5>
</div>
<div className="sidebar__events">
<EventIcon className="f"/>
<h5>Events</h5>
</div>
<div className="sidebar__memories">
<RestoreIcon className="g"/>
<h5>Memories</h5>
</div>
<div className="sidebar__more">
<ArrowDropDownIcon className="h"/>
<h5>See more</h5>
</div>
</div>
)
}

export default Sidebar
