import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';

const Dialogs = props => {
    let addNewMessage = (values) =>{
        props.addMessage(values.newMessageText);
    }
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
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

const AddMessageForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit} className={s.newMessageArea}>
            <Field component="textarea" name="newMessageText" placeholder="Enter your message"/>
                    {/* <textarea
                        value={props.dialogsPage.newMessageText}
                        onChange={updateNewMessageText}
                        placeholder="Enter your message"
                    ></textarea> */}
                    <button>send</button>
                </form>
    )
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
export default Dialogs;