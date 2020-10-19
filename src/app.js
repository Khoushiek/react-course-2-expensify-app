import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import configureStore from "./store/configureStore";
import { addExpense } from "./action/expenses";
import getVisibleExpenses from "./selectors/expenses";
import { Provider } from "react-redux";
import {setTextFilter} from "./action/filters";
import './styles/styles.scss';
import "react-dates/lib/css/_datepicker.css"

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));