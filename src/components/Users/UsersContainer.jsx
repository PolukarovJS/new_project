import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
   follow,
   unfollow,
   setCurrentPage,
   toggleFollowingProgress,
   requestUsers,
} from "../../Redux/users-reducer";
import {
   getUsers,
   getPageSize,
   getTotalUsersCount,
   getCurrentPage,
   getIsFetching,
   getFollowingInProgress,
} from "../../Redux/users-selectors";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = (pageNumber) => {
      this.props.requestUsers(pageNumber, this.props.pageSize);
   };

   render() {
      return (
         <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               users={this.props.users}
               followingInProgress={this.props.followingInProgress}
            />
         </>
      );
   }
}

/* let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress,
   };
}; */

let mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
   };
};

export default compose(
   connect(mapStateToProps, {
      follow,
      unfollow,
      setCurrentPage,
      toggleFollowingProgress,
      requestUsers,
   })
)(UsersContainer);
