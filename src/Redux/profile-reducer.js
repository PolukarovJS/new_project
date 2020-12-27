import { userAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
   posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 15 },
      { id: 2, message: "Hi, can you see?", likesCount: 20 },
   ],
   newPostText: "IT-kamasutra.com",
   profile: null,
   status: "",
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 4,
            message: state.newPostText,
            likesCount: 0,
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: "",
         };
      }
      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText,
         };
      }
      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile,
         };
      }
      case SET_STATUS: {
         return {
            ...state,
            status: action.status,
         };
      }
      default:
         return state;
   }
};

export const addPostActionCreator = () => ({ type: ADD_POST }); // Возвращает обЪект
export const setStatus = (status) => ({ type: SET_STATUS, status }); // Возвращает обЪект
export const updateNewPostTextActionCreator = (text) => ({
   type: UPDATE_NEW_POST_TEXT,
   newText: text,
});
export const setUserProfile = (profile) => ({
   type: SET_USER_PROFILE,
   profile,
});

export const getUserProfile = (userId) => {
   return (dispatch) => {
      userAPI.getProfile(userId).then((data) => {
         dispatch(setUserProfile(data));
      });
   };
};

export const getStatus = (userId) => (dispatch) => {
   profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
   });
};

export const updateStatus = (status) => (dispatch) => {
   profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
         dispatch(setStatus(status));
      }
   });
};

export default profileReducer;
