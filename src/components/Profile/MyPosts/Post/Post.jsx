import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.avatar} 
            src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png' alt="avatar" />
            {props.message}
            <div>
                <span>like</span>
                <span> {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;