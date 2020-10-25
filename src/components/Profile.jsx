import React from 'react';
import logo from '../images/runners-635906_1920.jpg';
import s from './Profile.module.css';

const Profile = () => {
  return <div className={s.content}>
  <div>
    <img src={logo} />
  </div>
  <div>
    ava descriptions
  </div>
  <div>
    My Post
    <div>
      New Posts
    </div>
    <div>
      post 1
    </div>
    <div>
      post 2
    </div>
  </div>
</div>;
}

export default Profile;