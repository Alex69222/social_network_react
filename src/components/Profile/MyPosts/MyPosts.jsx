import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
// import { addPostActionCreator, updateNewPostTextActionCreator,  } from '../../../redux/profile-reducer';

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} id={post.id} />);



    let onAddPost = () => {
        props.addPost();
    };
    let addPost = (values) =>{
        props.addPost(values.newPostText);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <AddPostReduxForm  onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

const AddPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText" placeholder="Write here..." />
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}
const AddPostReduxForm = reduxForm({form: "addPostForm"})(AddPostForm);

export default MyPosts;