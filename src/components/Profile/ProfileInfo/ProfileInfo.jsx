import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import ProfileStatus from './ProfileStatus';
const ProfileInfo = (props) => {
    if(!props.profile){
        return  <Preloader />
    }
    return (
        
        <>
    
            {/* <img className={s.banner} src='https://media.istockphoto.com/photos/green-binary-code-matrix-background-wide-banner-picture-id898346256?k=20&m=898346256&s=170667a&w=0&h=JR8ldoUpfy4LPmiU82SbhCUbzkN3tfMSGM1fSWxO0b8=' alt='' /> */}

            <div className={s.descriptionBlock}>
                <img className={s.avatar}
                    src={props.profile.photos.large || userPhoto} alt='' />
                <ProfileStatus status="nice status"/>
            </div>
        </>
    );
}

export default ProfileInfo;