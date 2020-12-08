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
                <img alt='photos.large' src={props.profile.photos.large}/>
                <div>{props.profile.aboutMe}</div>
                <div>
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.website}</div>
                    <div>{props.profile.contacts.vk}</div>
                    <div>{props.profile.contacts.twitter}</div>
                    <div>{props.profile.contacts.instagram}</div>
                    <div>{props.profile.contacts.youtube}</div>
                    <div>{props.profile.contacts.github}</div>
                    <div>{props.profile.contacts.mainLink}</div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default ProfileInfo;