import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './redux/app-reducer';

class App extends React.Component {
  componentDidMount = () => {
    this.props.initializeApp();
  }
  render() {
    if(!this.props.initialized){ 
      return <Preloader />
    }
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
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  initialized: state.app.initialized
});
export default  connect(mapStateToProps, {initializeApp})(App);

// 81 / Прокинуть всю инфу профиля