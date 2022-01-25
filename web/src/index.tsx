import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import {
  VisibilityProvider
} from './providers/VisibilityProvider';

ReactDOM.render(
    <React.StrictMode>
        <VisibilityProvider>
            <App/>
        </VisibilityProvider>
    </React.StrictMode>,

    document.getElementById('root')
);
