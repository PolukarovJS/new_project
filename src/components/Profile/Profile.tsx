import React, { FC } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileType } from "../../types/types";

type PropsType ={
   status: string
   isOwner: boolean
   profile: ProfileType | null
   savePhoto: (file: string) => void
   updateStatus: (newStatus: string) => void
   saveProfile: (newProfile: ProfileType) => void
}

const Profile:FC<PropsType> = (props) => {
   return (
      <div>
         <ProfileInfo
            status={props.status}
            isOwner={props.isOwner}
            profile={props.profile}
            savePhoto={props.savePhoto}
            updateStatus={props.updateStatus}
            saveProfile={props.saveProfile}
         />
         <MyPostsContainer />
      </div>
   );
};

export default Profile;
