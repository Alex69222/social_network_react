import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';

const newMessageElement = React.createRef();
let addMessage = () => alert(newMessageElement.current.value); 
const Dialogs = props => {

    


    let dialogElements = props.state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name}  id={dialog.id}/>);
    let messageElements = props.state.messages.map(message => {
        return(
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
                    <textarea ref={newMessageElement}></textarea> 
                    <button onClick={addMessage}>send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;