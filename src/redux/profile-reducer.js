import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_SET_STATUS';

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

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) =>{
    return (dispatch) => {
        usersAPI.getUserProfile(userId).then(res => dispatch(setUserProfile(res)));
    }
}
export const getStatus = (userId) =>{
    return (dispatch) => {
        profileAPI.getStatus(userId).then(res => dispatch(setStatus(res)));
    }
}
export const updateStatus = (status) =>{
    return (dispatch) => {
        profileAPI.updateStatus(status).then(res => {
            if(res.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        });
    }
}

export default profileReducer;