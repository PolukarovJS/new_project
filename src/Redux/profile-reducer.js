import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
   posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 15 },
      { id: 2, message: "Hi, can you see?", likesCount: 20 },
   ],
   profile: null,
   status: "",
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 4,
            message: action.newPostText,
            likesCount: 0,
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: "",
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
      case DELETE_POST: {
         return {
            ...state,
            posts: state.posts.filter((p) => p.id != action.postId),
         };
      }
      default:
         return state;
   }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText }); // Возвращает обЪект
export const setStatus = (status) => ({ type: SET_STATUS, status }); // Возвращает обЪект
export const deletePost = (postId) => ({ type: DELETE_POST, postId }); // Возвращает обЪект
export const setUserProfile = (profile) => ({
   type: SET_USER_PROFILE,
   profile,
});

export const getUserProfile = (userId) => async (dispatch) => {
   let data = await usersAPI.getProfile(userId);
   dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
   let response = await profileAPI.getStatus(userId);
   dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
   let response = await profileAPI.updateStatus(status);
   if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
   }
};

export default profileReducer;
