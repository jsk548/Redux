import { 
WITHDRAW_FROM_ACCOUNT,
DEPOSIT_INTO_ACCOUNT,
TOGGLE_INFO
 } from './constants';

const bankActionCreators = {
	withdrawFromAccount(amount) {
		return {
			type: WITHDRAW_FROM_ACCOUNT,
			amount: amount
		};
	},
	depositIntoAccount(amount) {
		return {
		type: DEPOSIT_INTO_ACCOUNT,
		amount: amount
		};
	},
	toggleInfo() {
		return {
		type: TOGGLE_INFO
		};
	}	
}

export default bankActionCreators;
