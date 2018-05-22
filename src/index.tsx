// index.tsx

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';import './css/main.css';
import {App} from "./components/App";
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
