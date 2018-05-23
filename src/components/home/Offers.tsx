/* tslint:disable */
import * as React from 'react';

const offersS = require('./offers.css');
const main = require('../../css/main.css');

const FirstOffItem = () => {
  return (
      <a href='#' className={offersS['offers-item']}>
        <div className={offersS['offer-img']}><img src={require('../../img/offers/1.png')}/></div>
        <div className={offersS['offer-descr']}>
          Кафе/фаст-фуд возле метро Кировского района.
        </div>
        <div className={offersS['offer-price']}>
          150 000 руб/мес
        </div>
        <div className={offersS['offer-info']}>
          <div className={offersS['offer-info-row']}>
            <div className={offersS['offer-info-col']}>Категория:</div>
            <div className={offersS['offer-info-col']}>Помещения под кафе</div>
          </div>
          <div className={offersS['offer-info-row']}>
            <div className={offersS['offer-info-col']}>Район:</div>
            <div className={offersS['offer-info-col']}>Кировский</div>
          </div>
          <div className={offersS['offer-info-row']}>
            <div className={offersS['offer-info-col']}>Площадь:</div>
            <div className={offersS['offer-info-col']}>144.7м2</div>
          </div>
          <div className={offersS['offer-info-row']}>
            <div className={offersS['offer-info-col']}>Вытяжка:</div>
            <div className={offersS['offer-info-col']}>нет</div>
          </div>
        </div>
      </a>
  )
}

const SecondOffItem = () => {
  return (<a href='#' className={offersS['offers-item']}>
    <div className={offersS['offer-img']}><img src={require('../../img/offers/2.png')}/></div>
    <div className={offersS['offer-descr']}>
      Кафе/фаст-фуд возле метро Кировского района.
    </div>
    <div className={offersS['offer-price']}>
      150 000 руб/мес
    </div>
    <div className={offersS['offer-info']}>
      <div className={offersS['offer-info-row']}>
        <div className={offersS['offer-info-col']}>Категория:</div>
        <div className={offersS['offer-info-col']}>Помещения под кафе</div>
      </div>
      <div className={offersS['offer-info-row']}>
        <div className={offersS['offer-info-col']}>Район:</div>
        <div className={offersS['offer-info-col']}>Кировский</div>
      </div>
      <div className={offersS['offer-info-row']}>
        <div className={offersS['offer-info-col']}>Площадь:</div>
        <div className={offersS['offer-info-col']}>144.7м2</div>
      </div>
      <div className={offersS['offer-info-row']}>
        <div className={offersS['offer-info-col']}>Вытяжка:</div>
        <div className={offersS['offer-info-col']}>нет</div>
      </div>
    </div>
  </a>)
}

const ThirdOffItem = () =>{
  return (
    <a href='#' className={offersS['offers-item']}>
      <div className={offersS['offer-img']}><img src={require('../../img/offers/3.png')}/></div>
      <div className={offersS['offer-descr']}>
        Кафе/фаст-фуд возле метро Кировского района.
      </div>
      <div className={offersS['offer-price']}>
        150 000 руб/мес
      </div>
      <div className={offersS['offer-info']}>
        <div className={offersS['offer-info-row']}>
          <div className={offersS['offer-info-col']}>Категория:</div>
          <div className={offersS['offer-info-col']}>Помещения под кафе</div>
        </div>
        <div className={offersS['offer-info-row']}>
          <div className={offersS['offer-info-col']}>Район:</div>
          <div className={offersS['offer-info-col']}>Кировский</div>
        </div>
        <div className={offersS['offer-info-row']}>
          <div className={offersS['offer-info-col']}>Площадь:</div>
          <div className={offersS['offer-info-col']}>144.7м2</div>
        </div>
        <div className={offersS['offer-info-row']}>
          <div className={offersS['offer-info-col']}>Вытяжка:</div>
          <div className={offersS['offer-info-col']}>нет</div>
        </div>
      </div>
    </a>
  )
}

const FourthOffItem = () =>{
  return (
    <a href='#' className={offersS['offers-item']}>
      <div className={offersS['offer-img']}><img src={require('../../img/offers/4.png')}/></div>
      <div className={offersS['offer-descr']}>
        Кафе/фаст-фуд возле метро Кировского района.
      </div>
      <div className={offersS['offer-price']}>
        150 000 руб/мес
      </div>
      <div className={offersS['offer-info']}>
        <div className={offersS['offer-info-row']}>
          <div className={offersS['offer-info-col']}>Категория:</div>
          <div className={offersS['offer-info-col']}>Помещения под кафе</div>
        </div>
        <div className={offersS['offer-info-row']}>
          <div className={offersS['offer-info-col']}>Район:</div>
          <div className={offersS['offer-info-col']}>Кировский</div>
        </div>
        <div className={offersS['offer-info-row']}>
          <div className={offersS['offer-info-col']}>Площадь:</div>
          <div className={offersS['offer-info-col']}>144.7м2</div>
        </div>
        <div className={offersS['offer-info-row']}>
          <div className={offersS['offer-info-col']}>Вытяжка:</div>
          <div className={offersS['offer-info-col']}>нет</div>
        </div>
      </div>
    </a>

  )
}

export default class Offers extends React.Component {
  public render (){
    return (
      <section className={offersS['offers']}>
        <div className={main['container']}>
          <div className={main['section-title']}>Интересные предложения</div>
          <div className={offersS['offers-list']}>
            <FirstOffItem/>
            <SecondOffItem/>
            <ThirdOffItem/>
            <FourthOffItem/>
          </div>
          <a className={offersS['offers-view-all']} href='#'>Все помещения</a>
        </div>
      </section>
    )
  }
}
