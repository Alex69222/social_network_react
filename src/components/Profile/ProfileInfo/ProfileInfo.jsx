import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    const [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(() =>{
            setEditMode(false)
        })
        
    }
    return (
        <>
            <div className={s.descriptionBlock}>
                <img className={s.avatar}
                    src={profile.photos?.large || userPhoto} alt='' />
                {isOwner && <input type={"file"} onChange={(e) => onMainPhotoSelected(e)} />}
                {editMode
                    ? <ProfileDataForm onSubmit={onSubmit} initialValues={profile} profile={profile} />
                    : <ProfileData profile={profile} isOwner={isOwner} setEditMode={setEditMode} />
                }
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </>
    );
}

const ProfileData = ({ profile, isOwner, setEditMode }) => {
    return (
        <div>
            <div>
                <b>Full name:</b> {profile.fullName}
            </div>
            <div>
                <b> Loooking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills:</b> {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map((k, index) => <Contact contactTitle={k} contactValue={profile.contacts[k]} key={index} />)}
            </div>

            {isOwner && <button onClick={() => setEditMode(true)}>edit</button>}
        </div>
    )
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}:</b> {contactValue}</div>
}

export default ProfileInfo;