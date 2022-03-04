import s from '../Dialogs.module.css';


const Message = (props) => {
    return (
        <div  className={`${s.message} ${props.income ? s.inncomeMessage : s.myMessage}`} id={props.id}>
            {props.income ? <img src={props.avatar}  /> : ''}
            {props.message}
            {props.income ? '' : <img src={props.myAvatar} />}
        </div>
    );
}



export default Message;