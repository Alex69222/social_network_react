import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    // let newPostText = props.newPostText;
    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} id={post.id} />);
    let newPostElement = React.createRef();
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    let addPost = () => {
        props.addPost();
    };
    // props.addPost('hello')
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;