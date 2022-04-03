import { connect } from "react-redux";
import ProfileInfo from "./ProfileInfo";

const mapStateToProps = (state) =>{
    return {
        myAvatar: state.profilePage.myAvatar
    };
};
const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;