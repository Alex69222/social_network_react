import { stopSubmit } from "redux-form";
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
    return async (dispatch) => {
        let res = await authAPI.me();
        if (res.resultCode === 0) {
            let { id: userId, email, login } = res.data;
            dispatch(setAuthUserData(userId, email, login, true));
        }
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {

    let res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(auth());
    } else {
        let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error";
        // console.log(res.data.messages[0]);
        dispatch(stopSubmit("login", { _error: message }));
    }
};
export const logout = () => async (dispatch) => {
    let res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;