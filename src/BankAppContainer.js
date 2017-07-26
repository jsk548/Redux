import React, { Component } from 'react';
//import bankStore from './bankStore';
import { connect } from 'react-redux';
import BankApp from './BankApp';
import bankActionCreators from './bankActionCreators';

class BankAppContainer extends Component {

/*	constructor(props) {
		super(props);
		this.state = {
		balance: bankStore.getState().balance
		}
	}
*/	
	/*componentDidMount() {
		this.unsubscribe = bankStore.subscribe(() => {
		this.setState({ balance: bankStore.getState().balance })
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}*/

	render(){
		return(
			<BankApp/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		balance: state.balance,
		showInfo: state.ui.showInfo,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onDeposit: (amount) => dispatch(bankActionCreators.depositIntoAccount(amount)),
		onWithdraw: (amount) => dispatch(bankActionCreators.withdrawFromAccount(amount)),
		onToggle: () => dispatch(bankActionCreators.toggleInfo())
	}
}


export default BankAppContainer = connect(mapStateToProps, mapDispatchToProps)(BankApp)