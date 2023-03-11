import React from 'react'
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';
import './ProfileCard.css';
const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImage">
        <img src={Cover} alt=""/>
        <img src={Profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>yuluk</span>
        <span>Lead Rapperr</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>4134</span>
            <span>Follower</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>13</span>
            <span>Followeing</span>
          </div>         
        </div>
        <hr />
      </div>

      <span>
        My profile
      </span>
    </div>
)
}

export default ProfileCard