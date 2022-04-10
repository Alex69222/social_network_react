import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}  myAvatar={props.myAvatar} />
            <MyPostsContainer />
        </div>
    );
}


export default Profile;