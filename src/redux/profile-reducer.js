const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    userId: null
};
const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, { id: 5, message: state.newPostText, likesCount: 0, }],
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
        default:
            return state;
    }

};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;