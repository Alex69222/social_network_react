import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
let initialState = {
    myAvatar: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grogu-baby-yoda-the-child-1606497947.png?crop=0.679xw:0.809xh;0.218xw,0.164xh&resize=1200:*',
    newPostText: 'it-kamasutra',
    posts: [
        { id: 1, message: "Hi! How are you?", likesCount: 5, },
        { id: 2, message: "It's my first props!", likesCount: 10, },
        { id: 3, message: "This is the second one.", likesCount: 12, },
        { id: 4, message: "Ok. Maby later", likesCount: 1, },

    ],
    profile: null,
    userId: null,
    status: '',
};
const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, { id: 5, message: action.newPostText, likesCount: 0, }],
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId),
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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            };
        }
        default:
            return state;
    }

};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });


export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let res = await usersAPI.getUserProfile(userId)
        dispatch(setUserProfile(res));
    }
}
export const getStatus = (userId) => {
    return async (dispatch) => {
        let res = await profileAPI.getStatus(userId)
        dispatch(setStatus(res));
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        let res = await profileAPI.updateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}
export const savePhoto = (file) => {
    return async (dispatch) => {
        let res = await profileAPI.savePhoto(file)
        if (res.resultCode === 0) {
            dispatch(savePhotoSuccess(res.data.photos))
        }
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let res = await profileAPI.saveProfile(profile)
    if (res.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error";
        dispatch(stopSubmit('editProfile', { _error: message }))
        return Promise.reject(message)
    }
}

export default profileReducer;