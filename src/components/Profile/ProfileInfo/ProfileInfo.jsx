import React from 'react';
import logo from '../../../images/runners-635906_1920.jpg';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfoBox}>
            <div className={s.divImage}>
                <img src={logo} alt='bigImage'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descriptions
            </div>
        </div>
    )
}

export default ProfileInfo;