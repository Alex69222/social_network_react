import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";


let store = {
    _state: {
        myAvatar: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grogu-baby-yoda-the-child-1606497947.png?crop=0.679xw:0.809xh;0.218xw,0.164xh&resize=1200:*',
        profilePage: {
            newPostText: 'it-kamasutra',
            posts: [
                { id: 1, message: "Hi! How are you?", likesCount: 5, },
                { id: 2, message: "It's my first props!", likesCount: 10, },
                { id: 3, message: "This is the second one.", likesCount: 12, },
                { id: 4, message: "Ok. Maby later", likesCount: 1, },

            ],
        },
        dialogsPage: {
            newMessageText: '',
            messages: [
                { id: 1, message: "Hi", income: true, avatar: 'https://uznayvse.ru/images/content/2021/11/uzn_16378289081.jpg' },
                { id: 2, message: "Yo", income: false, avatar: '' },
                { id: 3, message: "How are you?", income: true, avatar: 'https://uznayvse.ru/images/content/2021/11/uzn_16378289081.jpg' },
                { id: 4, message: "Nice?", income: true, avatar: 'https://uznayvse.ru/images/content/2021/11/uzn_16378289081.jpg' },
                { id: 5, message: "Whats up, bro?", income: false, avatar: '' },
                { id: 6, message: "Drop me a line", income: false, avatar: '' },
            ],

            dialogs: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Sveta" },
                { id: 3, name: "Olya" },
                { id: 4, name: "Andrew" },
                { id: 5, name: "Anna" },
                { id: 6, name: "Viktor" },
            ],
        },
        navbar: {
            friends: [
                { id: 1, name: 'Andrew', avatar: 'https://www.mayerbrown.com/-/media/images/people/a/armfelt-andrew/aarmfelt.png' },
                { id: 2, name: 'Sasha', avatar: 'https://uznayvse.ru/images/content/2021/11/uzn_16378289081.jpg' },
                { id: 3, name: 'Sveta', avatar: 'https://myinstagirls.com/wp-content/uploads/2018/09/BKQFMQ4gUy1-1.jpg' }
            ]
        }


    },
    _callSubscriber() {
        console.log('state was changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { // {type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);
        this._callSubscriber(this._state);
    },


};


export default store;

window.store = store;