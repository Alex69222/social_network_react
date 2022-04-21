import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirec';
import { sendMessageCreator,  } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        myAvatar: state.profilePage.myAvatar,
        // isAuth: state.auth.isAuth,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {

        addMessage: (newMessage) => {
            dispatch(sendMessageCreator(newMessage));
        }
    };
};



// const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(withAuthRedirect(Dialogs));
const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
export default DialogsContainer;