import App from 'App';
import BigNumber from 'bignumber.js';
import React from 'react';
import ReactDOM from 'react-dom';

import 'assets/styles/index.scss';

// Initialize BigNumber format
BigNumber.config({
  FORMAT: {
    decimalSeparator: '.',
    groupSize: 3,
    groupSeparator: ',',
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
