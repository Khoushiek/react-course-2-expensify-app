import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import AppRouter,{history} from './routers/AppRouter';
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import {startSetExpenses} from "./action/expenses";
import {login, logout} from "./action/auth";
import './styles/styles.scss';
import "react-dates/lib/css/_datepicker.css";
import {firebase} from "./firebase/firebase";

const store = configureStore();
let isRendered = false;

const renderApp = () => {
    if (!isRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));  
        isRendered = true;   
    }
}
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading....</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname==="/"){
                history.push('/dashboard')
            }
        });
        console.log("Logged in")
    }
    else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});