/* tslint:disable */
import * as React from 'react';

const servicesS = require('./services-types.css');
const main = require('../../css/main.css');

export default class ServicesTypes extends React.Component {
  public render() {
    return (
      <section className={servicesS['services-types']}>
        <div className={`${servicesS['services-types-list']} ${main['container']}`}>
          <div className={`${servicesS['services-type']} ${servicesS['rent-space']}`}>
            <i className={`${servicesS['rent']} ${servicesS['services-type-icon']}`}/>
            <span className={servicesS['services-type-title']}>Хочу снять/купить<br/> помещение</span>
          </div>
          <div className={`${servicesS['services-type']} ${servicesS['pass-space']}`}>
              <i className={`${servicesS['pass']} ${servicesS['services-type-icon']}`}/>
            <span className={servicesS['services-type-title']}>Сдать в аренду или продать помещение, бизнес</span>
          </div>
        </div>
      </section>
    )
  }
}


