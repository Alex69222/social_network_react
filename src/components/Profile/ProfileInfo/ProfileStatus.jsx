import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }
    activateEditMode = () =>{
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () =>{
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
        // let a = this.state;
        // let b = this.props;
        // console.log('componentDidUpdate');
    }
    render() {
        console.log('render');
        return (
            <>
                {!this.state.editMode &&

                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Set your status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={(e)=> {this.onStatusChange(e)}} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                }
            </>
        );
    }
}
export default ProfileStatus;