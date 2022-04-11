import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <NavbarContainer />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/profile" element={<ProfileContainer />}>
            <Route path=":userId" element={<ProfileContainer />} />
          </Route>
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;


// 63 / Прокинуть всю инфу профиля