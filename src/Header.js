import React from 'react';
import './Header.css';
import HeaderOption from "./HeaderOption";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import StorefrontIcon from '@material-ui/icons/Storefront';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

function Header() {
    return (
<div className="header">
<div className="header__left">
<img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
className="header__leftIcon" alt="facebook icon"/>
<div className="header__search">
<SearchIcon />
<input type="text" placeholder="Search Facebook"/>
</div>
</div>
<div className="header__middle">
<HeaderOption Icon={HomeIcon} color="#1778f2"/>
<div className="header__middleIcon">
<HeaderOption Icon={PeopleOutlineIcon} />
</div>
<div className="header__middleIcon">
<HeaderOption Icon={OndemandVideoIcon}/>
</div>
<div className="header__middleIcon">
<HeaderOption Icon={StorefrontIcon}/>
</div>
<div className="header__middleIcon">
<HeaderOption Icon={GroupAddIcon}/>
</div>
</div>
<div className="header__right">
<div className="header__rightAvatar">
<HeaderOption avatar="https://c.ndtvimg.com/2020-11/v6v4efno_pm-modi_625x300_20_November_20.jpg" 
style={{marginleft:"10px"}}/>
<HeaderOption title="vaibhav" style={{marginTop:"30px"}}/>
</div>
<div className="header__rightIcon">
<HeaderOption Icon={AddIcon} color="black"/></div>
<div className="header__rightIcon">
<HeaderOption Icon={MessageIcon} color="black"/></div>
<div className="header__rightIcon">
<HeaderOption Icon={NotificationsIcon} color="black"/></div>
<div className="header__rightIcon">
<HeaderOption Icon={ArrowDropDownIcon } color="black" /></div>
</div>
</div>
)
}

export default Header
