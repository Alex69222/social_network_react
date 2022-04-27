import loader from '../../../assets/images/loader.svg';

let Preloader = (props) =>{
    return(
    <div style={{backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
        <img src={loader}  alt="loader"/>
    </div>
    )
}

export default Preloader;