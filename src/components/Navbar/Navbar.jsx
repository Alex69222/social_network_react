
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
const setActiveLink =  ({isActive}) => isActive ? s.active : '';
const Navbar = (props) => {
    let friends = props.state.friends.map(el => <div key={el.id} className={s.friend}><img src={el.avatar} alt="avatar" /><p>{el.name}</p></div>);
    return (
        <nav className={s.nav}>
            <div className={`${s.item}`}>
                <NavLink  to="/profile" className={setActiveLink} >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={setActiveLink} >Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={setActiveLink} >News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={setActiveLink}  >Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={setActiveLink}  >Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={setActiveLink} >Settings</NavLink>
            </div>
            <div className={s.friends}>
                {friends}
            </div>
        </nav>
    );
}

export default Navbar;