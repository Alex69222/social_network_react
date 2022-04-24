import { Field } from "redux-form"
import { reduxForm } from "redux-form"
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormControls/FormControl";
const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name='login' placeholder="Login" validate={[required]} />
            </div>
            <div>
                <Field component={Input} name='password' placeholder="Password" validate={[required]}/>
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

    const onSubmit = (formData) =>{
        console.log(formData);
    }
    
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
export default Login;