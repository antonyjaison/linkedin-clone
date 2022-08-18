import React from "react";
import "../Header/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "../HeaderOption/HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://img.icons8.com/color/2x/linkedin-2.png" alt="" />
        <div className="header__search">
            <SearchIcon />
          <input type="text" />
          
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={PeopleAltIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={CircleNotificationsIcon} title='Notifications'/>
        <HeaderOption avatar='https://scontent.fcok5-1.fna.fbcdn.net/v/t39.30808-6/277808400_1059000904684331_7579505109480332305_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tuSS17faXTUAX8-vys2&_nc_ht=scontent.fcok5-1.fna&oh=00_AT8adxiTxUkIL-jsdySSaTAAJCXsf7R4eZ4O5GseqLSD9g&oe=6302F704'/>
      </div>
    </div>
  );
}

export default Header;
