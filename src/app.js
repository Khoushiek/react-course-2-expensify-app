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

store.dispatch(addExpense({ description: "Water Bill", amount: 450 }));
store.dispatch(addExpense({ description: "Gas Bill", amount: 550 }));
store.dispatch(addExpense({ description: "Phone Bill", createdAt: 1015}));

// store.dispatch(setTextFilter("water"));

// setTimeout(() => {store.dispatch(setTextFilter("Bill"))}, 3000);

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));