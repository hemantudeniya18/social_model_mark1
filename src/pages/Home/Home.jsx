import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../profileSide/ProfileSide'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
        <ProfileSide/>
        <PostSide/>
        <div className='rightSide'>right</div>
    </div>
  )
}

export default Home;