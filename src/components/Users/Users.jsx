import styles from './Users.module.scss';
let Users = (props) => {
    if(props.users.length === 0){
        
        props.setUsers([
            { id: 1, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_dpKuclUcY99gq_Ah_Ya0sLt9jqKAhpITw&usqp=CAU', followed: false, fullname: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_dpKuclUcY99gq_Ah_Ya0sLt9jqKAhpITw&usqp=CAU', followed: true, fullname: 'Sasha', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } },
            { id: 3, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_dpKuclUcY99gq_Ah_Ya0sLt9jqKAhpITw&usqp=CAU', followed: false, fullname: 'Oleg', status: 'Yo', location: { city: 'Kiew', country: 'Ukraine' } },
    
        ]);
    }

    return (
        <div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <img src={u.photoURL} className={styles.userPhoto} />
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => { props.unfollow(u.id) }}>Unollow</button>
                                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.fullName}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{u.location.country}</div>
                                    <div>{u.location.city}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
};


export default Users;