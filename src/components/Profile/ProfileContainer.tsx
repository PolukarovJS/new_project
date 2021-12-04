import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
   getUserProfile,
   getStatus,
   savePhoto,
   updateStatus,
   saveProfile,
} from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../Redux/redux-store';
import { ProfileType } from '../../types/types';

type MapStatePropsType = {
   isAuth: boolean
   match?: any
   authorizeUserId: number | null
   history?: any
   status: string
   profile: ProfileType | null
}
type MapDispatchPropsType = {
   getUserProfile: (userId: number) => void
   getStatus: (userId: number) => void
   savePhoto: (file: string) => void
   updateStatus: (newStatus: string) => void
   saveProfile: (newProfile: ProfileType) => void
}
type OwnPropsType = {
   // pageTitle: string
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
   refreshProfile() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = this.props.authorizeUserId;
         if (!userId) {
            this.props.history.push('/login');
         }
      }
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
   }

   componentDidMount() {
      this.refreshProfile();
   }

   componentDidUpdate(prevProps: PropsType, prevState: MapStatePropsType, snapshot: any) {
      if (this.props.match.params.userId !== prevProps.match.params.userId) {
         this.refreshProfile();
      }
   }

   render() {
      return (
         <Profile
            {...this.props}
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            savePhoto={this.props.savePhoto}
         />
      );
   }
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => ({
   profile: state.profilePage.profile,
   isAuth: state.auth.isAuth,
   authorizeUserId: state.auth.userId,
   status: state.profilePage.status,
});

export default compose(
   connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
   (mapStateToProps, 
      { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
   withRouter,
   withAuthRedirect
)(ProfileContainer);
