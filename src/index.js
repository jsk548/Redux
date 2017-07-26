import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import BankAppContainer from './BankAppContainer';
import bankStore from './bankStore';

ReactDOM.render(<Provider store={bankStore}>
<BankAppContainer />
</Provider> , document.getElementById('root'));
registerServiceWorker();
