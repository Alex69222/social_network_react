const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};
const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:{
            return {
                ...state,
                newMessageText : action.newMessageText,
            };
        }
        case SEND_MESSAGE:{
            let newMessageText = state.newMessageText;
            return {
                ...state,
                newMessageText : '',
                messages : [...state.messages, { id: 7, message: newMessageText, income: false, avatar: '' }]
            };
        }
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

export default dialogsReducer;