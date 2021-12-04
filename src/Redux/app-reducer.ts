import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { getAuthUserData } from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS";

export type InitialStateType = {
   initialized: boolean
} 

let initialState = {
   initialized: false, 
};

const appReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case SET_INITIALIZED_SUCCESS: {
         return {
            ...state,
            initialized: true,
         };
      }
      default:
         return state;
   }
};

export type InitializedSuccessActionType = {
   type: typeof SET_INITIALIZED_SUCCESS
} 


export const initializedSuccess = ():InitializedSuccessActionType => ({ type: SET_INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch: any) => {
   let promise = dispatch(getAuthUserData());

   Promise.all([promise]).then(() => {
      dispatch(initializedSuccess());
   });
};

export default appReducer;
