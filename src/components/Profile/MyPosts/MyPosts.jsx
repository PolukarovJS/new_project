import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field
               name={"newPostText"}
               placeholder="Post message"
               validate={[required, maxLength10]}
               component={Textarea}
            />
         </div>
         <div>
            <button>Add post</button>
         </div>
      </form>
   );
};

const MyPostReduxForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

//window.props = [];

const MyPosts = (props) => {
   //debugger;
   //window.props.push(props);
   //console.log("Rerender yo");
   //console.log(props);
   let postsElements = [...props.posts]
      .reverse()
      .map((p) => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);
   let addPost = (values) => {
      props.addPost(values.newPostText);
   };
   return (
      <div className={s.postsBlock}>
         <h3>My Posts</h3>
         <MyPostReduxForm onSubmit={addPost} />
         <div className={s.posts}>{postsElements}</div>
      </div>
   );
};

export default MyPosts;
