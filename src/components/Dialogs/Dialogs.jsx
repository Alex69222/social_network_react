import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';

const newMessageElement = React.createRef();
const Dialogs = props => {

    let updateNewMessageText = () => {
        let newMessageNext = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(newMessageNext));
    };
    let addMessage = () => {
        let newMessage = newMessageElement.current.value;
        props.dispatch(sendMessageActionCreator(newMessage));
    };



    let dialogElements = props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />);
    let messageElements = props.dialogsPage.messages.map(message => {
        return (
            <Message key={message.id}
                income={message.income}
                message={message.message}
                myAvatar={props.myAvatar}
                avatar={message.avatar}
                id={message.id} />

        );
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.newMessageArea}>
                    <textarea ref={newMessageElement} value={props.dialogsPage.newMessageText} onChange={updateNewMessageText}></textarea>
                    <button onClick={addMessage}>send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;