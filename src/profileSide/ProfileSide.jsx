import React from 'react'
import FollowerCard from '../components/FollowerCard/FollowerCard.jsx';
import LogoSearch from '../components/LogoSearch/LogoSearch.jsx';
import ProfileCard from '../components/ProfileCard/ProfileCard.jsx';
import './ProfileSide.css';
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard/>
        <FollowerCard/>
    </div>
  )
}
export default ProfileSide;