import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC, setTotalUsersCountAC } from "../../redux/users-reducer";
import Users from "./Users";
import axios from 'axios';
import React from 'react';


class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
        }
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }
    
    render() {
        return <Users
            setTotalUsersCount={this.props.setTotalUsersCount}
            totalUsersCount ={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }

}
let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    };
};

let mapDispatchToProps = (dispatch) =>{
    return {
        follow: (userID) =>{
            dispatch(followAC(userID));
        },
        unfollow: (userID) =>{
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) =>{
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount) =>{
            dispatch(setTotalUsersCountAC(totalUsersCount));
        }
        

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


 