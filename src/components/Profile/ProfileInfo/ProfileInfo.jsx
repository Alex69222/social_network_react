import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <>
            <div className={s.descriptionBlock}>
                <img className={s.avatar}
                    src={profile.photos.large || userPhoto} alt='' />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </>
    );
}

export default ProfileInfo;