import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {

    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};
const authReducer = (state = initialState, action) => {


    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }

};

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const auth = () => {
    return (dispatch) => {
        authAPI.me().then(res => {
            if (res.resultCode === 0) {
                let { id: userId, email, login } = res.data;
                dispatch(setAuthUserData(userId, email, login, true));
            }
        })
    }
}
export const login = (email, password, rememberMe) => dispatch => {
    authAPI.login(email, password, rememberMe).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(auth());
        }
    })
};
export const logout = () =>  (dispatch) =>{
        authAPI.logout().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}

export default authReducer;