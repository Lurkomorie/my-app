/* tslint:disable */
import * as React from 'react';

import Offers from './Offers';
import ServicesTypes from './Service-types';
import Services from './Services';
import ServicesSlider from './Services-slider';

const clientsS = require('./clients.css');
const main = require('../../css/main.css');

const Clients = () => {
  return (
    <section className={main['container']}>
      <div className={clientsS['clients']}>
        <div className={main['section-title']}>Наши клиенты</div>
        <div className={clientsS['clients-list']}>
          <div className={clientsS['clients-item']}><img src={require('../../img/clients/1.png')}/></div>
          <div className={clientsS['clients-item']}><img src={require('../../img/clients/2.png')}/></div>
          <div className={clientsS['clients-item']}><img src={require('../../img/clients/3.png')}/></div>
          <div className={clientsS['clients-item']}><img src={require('../../img/clients/4.png')}/></div>
          <div className={clientsS['clients-item']}><img src={require('../../img/clients/5.png')}/></div>
          <div className={clientsS['clients-item']}><img src={require('../../img/clients/6.png')}/></div>
          <div className={clientsS['clients-item']}><img src={require('../../img/clients/7.png')}/></div>
          <div className={clientsS['clients-item']}><img src={require('../../img/clients/8.png')}/></div>
          <div className={clientsS['clients-item']}><img src={require('../../img/clients/9.png')}/></div>
          <div className={clientsS['clients-item']}><img src={require('../../img/clients/10.png')}/></div>
          <div className={clientsS['clients-item']}><img src={require('../../img/clients/11.png')}/></div>
          <div className={clientsS['clients-item']}><img src={require('../../img/clients/12.png')}/></div>
        </div>
      </div>
    </section>
  )
}



export default class HomePage extends React.Component {
    public render()
    {
        return (
            <div>
                <Services/>
                <Offers/>
                <ServicesTypes/>
                <Clients/>
                <ServicesSlider/>
            </div>
        );
    }
}

