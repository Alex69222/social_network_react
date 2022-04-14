import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile} from '../../redux/profile-reducer';
import { Navigate, useParams } from "react-router-dom";

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
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }
    render() {
        if (!this.props.isAuth) return <Navigate to="/login"/>;
        return <Profile {...this.props} />
    }
}
let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    myAvatar: state.profilePage.myAvatar,
    userId: state.profilePage.userId,
    isAuth: state.auth.isAuth,
});

let WithURLContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getUserProfile })(WithURLContainerComponent);