import React from 'react';
import logo from '../../../assets/images/runners-635906_1920.jpg';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    
    
    return (
        <div className={s.profileInfoBox}>
            <div className={s.divImage}>
                <img src={logo} alt='bigImage'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + descriptions
            </div>
        </div>
    )
}

export default ProfileInfo;