import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

ReactDOM.render(<App />, document.getElementById('root'));

module.hot.accept('./app/App', function () {
    const NextApp = require('./app/App');
    ReactDOM.render(<NextApp />, document.getElementById('root'));
});
