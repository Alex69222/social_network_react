import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <>
            <img className={s.banner} src='https://media.istockphoto.com/photos/green-binary-code-matrix-background-wide-banner-picture-id898346256?k=20&m=898346256&s=170667a&w=0&h=JR8ldoUpfy4LPmiU82SbhCUbzkN3tfMSGM1fSWxO0b8=' alt='' />

            <div className={s.descriptionBlock}>
                <img className={s.avatar}
                    src={props.myAvatar} alt='' />
                <div> description</div>
            </div>
        </>
    );
}

export default ProfileInfo;