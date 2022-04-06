// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavbarContainer/>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/dialogs/*' element={ <DialogsContainer/> } />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/users' element={<UsersContainer/>} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;


// 57