/* tslint:disable */
import * as React from 'react';

const servicesS = require('./services.css');
const main = require('../../css/main.css');

const Rent = () => {
  return (
      <div className={`${servicesS['services-subsection']} ${servicesS['rent']}`}>
      <div className={servicesS['services-subsection-title']}>Аренда</div>
        <div className={`${servicesS['services-item']} ${servicesS['place-for-restaurant']}`}>
        <div className={servicesS['services-info']}>
          <div className={servicesS['services-title']}>Помещение под рестораны</div>
          <div className={servicesS['services-descr']}>В эту категорию относятся помещения в которых нет мебели и
            оборудования.
          </div>
        </div>
      </div>
        <div className={`${servicesS['services-item']} ${servicesS['restaurant-active']}`}>
        <div className={servicesS['services-info']}>
          <div className={servicesS['services-title']}>Готовые рестораны</div>
          <div className={servicesS['services-descr']}>В эту категорию относятся помещения в которых нет мебели и
            оборудования.
          </div>
        </div>
      </div>
        <div className={`${servicesS['services-item']} ${servicesS['dining-rooms']}`}>
        <div className={servicesS['services-info']}>
          <div className={servicesS['services-title']}>Столовые на предприятиях</div>
          <div className={servicesS['services-descr']}>В эту категорию относятся помещения в которых нет мебели и
            оборудования.
          </div>
        </div>
      </div>
    </div>
  )
}

const Place = () =>{
  return (
      <div className={`${servicesS['services-subsection']} ${servicesS['place']}`}>
      <div className={servicesS['services-subsection-title']}>Покупка помещения в собственность</div>
          <div className={`${servicesS['services-item']} ${servicesS['place-restaurant-active']}`}>
        <div className={servicesS['services-info']}>
          <div className={servicesS['services-title']}>Готовый ресторан</div>
          <div className={servicesS['services-descr']}>В эту категорию относятся помещения в которых нет мебели и
            оборудования.
          </div>
        </div>
      </div>
          <div className={`${servicesS['services-item']} ${servicesS['place-free']}`}>
        <div className={servicesS['services-info']}>
          <div className={servicesS['services-title']}>Помещение свободного назначения</div>
          <div className={servicesS['services-descr']}>В эту категорию относятся помещения в которых нет мебели и
            оборудования.
          </div>
        </div>
      </div>
    </div>
  )
}

const Biz = () => {
  return (
    <div className={`${servicesS['services-subsection']} ${servicesS['biz']}`}>
      <div className={servicesS['services-subsection-title']}>Покупка бизнеса</div>
        <div className={`${servicesS['services-item']} ${servicesS['biz-buy']}`}>
        <div className={servicesS['services-info']}>
          <div className={servicesS['services-title']}>Покупка бизнеса</div>
          <div className={servicesS['services-descr']}>В эту категорию относятся помещения в которых нет мебели и
            оборудования.
          </div>
        </div>
      </div>
    </div>
  )
}

export default class Services extends React.Component {
  public render () {
    return (
      <section className={servicesS['services']}>
        <div className={main['container']}>
          <div className={servicesS['services-list']}>
            <Rent/>
            <Place/>
            <Biz/>
          </div>
        </div>
      </section>
    )
  }
}
