import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field } from "redux-form"
import { reduxForm } from "redux-form"
import { login } from "../../redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormControls/FormControl";
const LoginForm = props => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name='email' placeholder="Email" validate={[required]} />
            </div>
            <div>
                <Field component={Input} name='password' placeholder="Password" type={"password"} validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name='rememberMe' type="checkbox" /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = props => {
    if( props.isAuth) return <Navigate to="/profile" />;
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps =  state => ({
    isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, {login})(Login);
