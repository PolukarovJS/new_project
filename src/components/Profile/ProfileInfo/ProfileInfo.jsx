import React from "react";
import logo from "../../../assets/images/runners-635906_1920.jpg";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
//import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({ profile, status, updateStatus }) => {
   if (!props.profile) {
      return <Preloader />;
   }

   return (
      <div className={s.profileInfoBox}>
         <div className={s.descriptionBlock}>
            <img alt="photos.large" src={profile.photos.large} />
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            <div>{props.profile.aboutMe}</div>
            <div>
               <div>{profile.contacts.facebook}</div>
               <div>{profile.contacts.website}</div>
               <div>{profile.contacts.vk}</div>
               <div>{profile.contacts.twitter}</div>
               <div>{profile.contacts.instagram}</div>
               <div>{profile.contacts.youtube}</div>
               <div>{profile.contacts.github}</div>
               <div>{profile.contacts.mainLink}</div>
            </div>
            <div></div>
         </div>
      </div>
   );
};

export default ProfileInfo;
