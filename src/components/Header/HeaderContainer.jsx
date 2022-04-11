import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component{
    componentDidMount = () =>{
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true,})
                .then(response => {
                    if(response.data.resultCode === 0){
                        let {id: userId, email, login } = response.data.data;
                        this.props.setAuthUserData(userId, email, login);
                    }
                    // this.props.toggleIsFetching(false);
                    // this.props.setUsers(response.data.items);
                    // this.props.setTotalUsersCount(response.data.totalCount);
                });
    }
    render(){
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);