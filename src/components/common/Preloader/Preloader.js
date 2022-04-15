import loader from '../../../assets/images/loader.svg';

let Preloader = (props) =>{
    return(
    <div style={{backgroundColor: 'white'}}> 
        <img src={loader}  alt="loader"/>
    </div>
    )
}

export default Preloader;