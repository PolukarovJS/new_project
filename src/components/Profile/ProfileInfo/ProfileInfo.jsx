import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ savePhoto, profile, status, updateStatus, isOwner, saveProfile }) => {
   let [editMode, setEditMode] = useState(false);

   if (!profile) {
      return <Preloader />;
   }

   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         savePhoto(e.target.files[0]);
      }
   };

   const onSubmit = (formData) => {
      saveProfile(formData).then(() => {
         setEditMode(false);
      });
      //
   };

   return (
      <div className={s.profileInfoBox}>
         <div className={s.descriptionBlock}>
            {/* Усли profile.photos.large === null, используем  userPhoto*/}
            <img
               alt="photos.large"
               src={profile.photos.large || userPhoto}
               className={s.mainPhoto}
            />
            {isOwner && (
               <input type={'file'} accept=".jpg, .jpeg, .png" onChange={onMainPhotoSelected} />
            )}
            {editMode ? (
               <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
            ) : (
               <ProfileData
                  profile={profile}
                  isOwner={isOwner}
                  goToEditMode={() => {
                     setEditMode(true);
                  }}
               />
            )}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
         </div>
      </div>
   );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
   return (
      <div>
         {isOwner && (
            <div>
               <button onClick={goToEditMode}>edit</button>
            </div>
         )}
         <div>
            <b>Full name: </b>
            {profile.fullName}
         </div>
         <div>
            <b>Looking for a job: </b>
            {profile.lookingForAJob ? 'yes' : 'no'}
         </div>
         {profile.lookingForAJob && (
            <div>
               <b>My professional skills: </b>
               {profile.lookingForAJobDescription}
            </div>
         )}
         <div>
            <b>About me</b>:{profile.aboutMe}
         </div>
         <div>
            <b>Contacts</b>:{' '}
            {Object.keys(profile.contacts).map((key) => {
               return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />;
            })}
         </div>
      </div>
   );
};

export const Contact = ({ contactTitle, contactValue }) => {
   return (
      <div className={s.contact}>
         <b>{contactTitle}</b>: {contactValue}
      </div>
   );
};

export default ProfileInfo;
