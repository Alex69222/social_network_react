import MyPostsContainer from './MyPosts/MyPostsContainer';
// import s from './Profile.module.css';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfoContainer  myAvatar={props.myAvatar}/>
            <MyPostsContainer
            store={props.store}
             />
        </div>
    );
}


export default Profile;