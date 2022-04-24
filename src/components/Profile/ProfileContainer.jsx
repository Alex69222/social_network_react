import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirec";
import { compose } from "redux";

const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    )
}
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 23377;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        
        return <Profile {...this.props} />
    }
}



let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myAvatar: state.profilePage.myAvatar,
    userId: state.profilePage.userId,
    isAuth: state.auth.isAuth,
});


// let WithURLContainerComponent = withRouter(withAuthRedirect(ProfileContainer));
// export default connect(mapStateToProps, { getUserProfile })(WithURLContainerComponent);
export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);