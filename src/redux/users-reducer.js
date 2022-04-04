const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {

    users: [
        // { id: 1, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_dpKuclUcY99gq_Ah_Ya0sLt9jqKAhpITw&usqp=CAU', followed: false, fullname: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 2, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_dpKuclUcY99gq_Ah_Ya0sLt9jqKAhpITw&usqp=CAU', followed: true, fullname: 'Sasha', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } },
        // { id: 3, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_dpKuclUcY99gq_Ah_Ya0sLt9jqKAhpITw&usqp=CAU', followed: false, fullname: 'Oleg', status: 'Yo', location: { city: 'Kiew', country: 'Ukraine' } },
    ],
};
const usersReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true };
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false };
                    }
                    return u;
                })
            };
        case SET_USERS:{
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        }
        default:
            return state;
    }

};

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;