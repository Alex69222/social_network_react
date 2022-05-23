import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../common/FormControls/FormControl";
import styles from '../../common/FormControls/FormControl.module.scss';
const ProfileDataForm = ({ handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <b>Full name:</b> {createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b> Loooking for a job:</b> {createField("", "lookingForAJob", [], Input, { type: 'checkbox' })}
            </div>
            <div>
                <b>My professional skills:</b> {createField("My professional skills", "lookingForAJobDescription", [], Textarea,)}
            </div>
            <div>
                <b>About me:</b> {createField("About me", "aboutMe", [], Textarea,)}
            </div>
            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map((k, index) => (
                    <div key={index}>
                        <b>{k}: </b> {createField(k, "contacts." + k, [], Input, )}
                    </div>
                ))}
            </div>

            <button>save</button>
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
        </form>
    )
}
const ProfileDataFormReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm);

export default ProfileDataFormReduxForm;