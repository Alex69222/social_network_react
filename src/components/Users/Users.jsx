import React from "react";
import styles from './Users.module.scss';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

let Users = props => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <button onClick={() => { props.onPageChanged(p); }} key={p} className={(props.currentPage === p) ? styles.selectedPage : styles.page}>{p}</button>
                    })
                }
            </div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <NavLink to={`/profile/${u.id}`}>
                                        <img src={u.photos.small || userPhoto} className={styles.userPhoto} alt={'user'} />
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                            props.toggleFollowingProgress(true, u.id);
                                            usersAPI.unfollow(u.id).then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                                props.toggleFollowingProgress(false, u.id);
                                            });
                                            props.unfollow(u.id)
                                        }}>Unollow</button>
                                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                            props.toggleFollowingProgress(true, u.id);
                                            usersAPI.follow(u.id).then(data => {
                                                if (data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                                props.toggleFollowingProgress(false, u.id);
                                            });


                                        }
                                        }>Follow</button>}

                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{'u.location.country'}</div>
                                    <div>{'u.location.city'}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div >
    );
}

export default Users;