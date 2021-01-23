import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
   getUserProfile,
   getStatus,
   updateStatus,
   savePhoto,
   saveProfile,
} from "../../Redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
   refreshProfile() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = this.props.authorizeUserId;
         if (!userId) {
            this.props.history.push("/login");
         }
      }
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
   }

   componentDidMount() {
      this.refreshProfile();
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.match.params.userId != prevProps.match.params.userId) {
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

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   isAuth: state.auth.isAuth,
   authorizeUserId: state.auth.userId,
   status: state.profilePage.status,
});

export default compose(
   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
   withRouter,
   withAuthRedirect
)(ProfileContainer);
