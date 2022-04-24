import styles from './FormControl.module.scss';


// const FormControl = ({input, meta, child, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
//             {props.childen}
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }
const FormControl = ({input, meta, children}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            <children.type {...input} {...children.props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
// export const Textarea = (props) => {
//     const { input, meta, child, ...restProps } = props;
//     return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
// }
export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...restProps} /></FormControl>
}
// export const Input = (props) => {
//     const { input, meta, child, ...restProps } = props;
//     return  <FormControl {...props}><input {...input} {...restProps} /></FormControl>
// }
export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return  <FormControl {...props}><input {...restProps} /></FormControl>
}