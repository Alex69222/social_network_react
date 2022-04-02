const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
        if (action.type === ADD_POST) {

            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if(action.type === SEND_MESSAGE){
            let newMessage = { id: 7, message: action.newMessage, income: false, avatar: '' };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);

        } else if(action.type === UPDATE_NEW_MESSAGE_TEXT){

            let newMessageText = action.newMessageText;
            this._state.dialogsPage.newMessageText = newMessageText;
            this._callSubscriber(this._state);
        }
    },


};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const sendMessageActionCreator = (text) => ({type: SEND_MESSAGE, newMessage: text});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});
export default store;

window.store = store;