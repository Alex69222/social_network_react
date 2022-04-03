import { connect } from "react-redux";
import Navbar from "./Navbar";

// const NavbarContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store)=>{
//                     return <Navbar state={store.getState().navbar}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }
let mapStateToProps = (state) =>{
    return {
        state: state.navbar,
    };
};

let mapDispatchToProps = (dispatch) =>{
    return {

    };
};
const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);
export default NavbarContainer;