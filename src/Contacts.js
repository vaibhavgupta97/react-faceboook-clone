import React from 'react'
import './Contacts.css'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function Contacts() {
    return (
        <div className="contacts">
          <div className="contacts__top">  
          <h3>Contacts</h3>
          <div className="contacts__icon">
          <VideoCallIcon className="contacts__icon1"/>
          <SearchIcon className="contacts__icon1"/>
          <MoreHorizIcon className="contacts__icon1"/>
          </div>
          </div>
          <div className="contacts__down">  
          </div>
        </div>
    )
}

export default Contacts;
