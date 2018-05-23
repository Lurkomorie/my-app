// index.tsx
/* tslint:disable */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from "./components/App";
import { BrowserRouter } from 'react-router-dom';
import './css/main.css';
import './css/normalize.css';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
