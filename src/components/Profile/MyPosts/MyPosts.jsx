import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
// import { addPostActionCreator, updateNewPostTextActionCreator,  } from '../../../redux/profile-reducer';

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} id={post.id} />);

    let onPostChange = (e) =>{
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    let onAddPost = () => {
        props.addPost();
    };
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}  value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;