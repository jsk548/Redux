import {
WITHDRAW_FROM_ACCOUNT,
DEPOSIT_INTO_ACCOUNT,
TOGGLE_INFO } from './constants';
import { combineReducers } from 'redux';
import update from 'react-addons-update';

/*const initialState = {
balance: 0
}

const bankReducer = (state = initialState, action) => {
	console.log(state,action); //Temporarily logging all actions
	switch (action.type) {
		case DEPOSIT_INTO_ACCOUNT:
		return {balance: state.balance + parseFloat(action.amount)};
		case WITHDRAW_FROM_ACCOUNT:
		return {balance: state.balance - parseFloat(action.amount)};
		default:
		return state;
	}
}*/

const initialState = {
initialBalance: 0,
initialUI: {
showInfo: false,
},
}

const balanceReducer = (state = initialState.initialBalance, action) => {
	//console.log(state,action); //Temporarily logging all actions
	switch (action.type) {
		case DEPOSIT_INTO_ACCOUNT:
		return state + parseFloat(action.amount);
		case WITHDRAW_FROM_ACCOUNT:
		return state - parseFloat(action.amount);
		default:
		return state;
	}
}

const uiReducer = (state = initialState.initialUI, action) => {
	switch (action.type) {
		case TOGGLE_INFO:
		return update(state, { showInfo: { $apply: currentState => !currentState }});
		default:
		return state;
	}
};

const bankReducer = combineReducers({balance:balanceReducer, ui: uiReducer});
export default bankReducer;