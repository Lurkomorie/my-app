// app.tsx

import * as React from 'react';
import Header from "./common/Header";
import {Main} from './Main';

import Footer from "./common/Footer";


export const App = (props : any) => (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
)
