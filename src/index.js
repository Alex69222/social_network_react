
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import SamuraiJSApp from './App';


    ReactDOM.render(
        
            // <BrowserRouter>
            //     <Provider store={store}>
                    <SamuraiJSApp/>
            //     </Provider>
            // </BrowserRouter>
        ,
        document.getElementById('root')
    );

