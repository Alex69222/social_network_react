import MyPostsContainer from './MyPosts/MyPostsContainer';
// import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo  myAvatar={props.myAvatar}/>
            <MyPostsContainer
            store={props.store}
             />
        </div>
    );
}


export default Profile;