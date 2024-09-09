import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import MovieContainer from './screens/Container/MovieContainer';

ReactDOM.render(<MovieContainer/>, document.getElementById('root'));
registerServiceWorker();