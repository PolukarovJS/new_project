import { addPostActionCreator } from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (props) => {
   return {
      posts: props.profilePage.posts,
   };
};
let mapDispatchToProps = (dispatch) => {
   return {
      addPost: (newPostText) => {
         dispatch(addPostActionCreator(newPostText));
      },
   };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
