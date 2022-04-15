import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirec';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) =>{
    return {
        dialogsPage : state.dialogsPage,
        myAvatar : state.profilePage.myAvatar,
        // isAuth: state.auth.isAuth,
    };
};
let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextCreator(text));
        },
        addMessage: () => {
            dispatch(sendMessageCreator());
        }
    };
};



const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(withAuthRedirect(Dialogs));
export default DialogsContainer;