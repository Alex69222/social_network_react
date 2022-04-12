import { connect } from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    unfollow,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
} from "../../redux/users-reducer";
import Users from "./Users";
import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }
    onPageChanged = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                setTotalUsersCount={this.props.setTotalUsersCount}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            // isFetching={this.props.isFetching}
            />
        </>
    }

}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

export default connect(mapStateToProps,
    { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,toggleFollowingProgress })(UsersContainer);


