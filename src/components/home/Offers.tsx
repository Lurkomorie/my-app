import * as React from "react";


const FirstOffItem = () => {
  return (
      <a href="#" className="offers-item">
        <div className="offer-img"><img src={require('../../img/offers/1.png')}/></div>
        <div className="offer-descr">
          Кафе/фаст-фуд возле метро Кировского района.
        </div>
        <div className="offer-price">
          150 000 руб/мес
        </div>
        <div className="offer-info">
          <div className="offer-info-row">
            <div className="offer-info-col">Категория:</div>
            <div className="offer-info-col">Помещения под кафе</div>
          </div>
          <div className="offer-info-row">
            <div className="offer-info-col">Район:</div>
            <div className="offer-info-col">Кировский</div>
          </div>
          <div className="offer-info-row">
            <div className="offer-info-col">Площадь:</div>
            <div className="offer-info-col">144.7м2</div>
          </div>
          <div className="offer-info-row">
            <div className="offer-info-col">Вытяжка:</div>
            <div className="offer-info-col">нет</div>
          </div>
        </div>
      </a>
  )
}

const SecondOffItem = () => {
  return (<a href="#" className="offers-item">
    <div className="offer-img"><img src={require('../../img/offers/2.png')}/></div>
    <div className="offer-descr">
      Кафе/фаст-фуд возле метро Кировского района.
    </div>
    <div className="offer-price">
      150 000 руб/мес
    </div>
    <div className="offer-info">
      <div className="offer-info-row">
        <div className="offer-info-col">Категория:</div>
        <div className="offer-info-col">Помещения под кафе</div>
      </div>
      <div className="offer-info-row">
        <div className="offer-info-col">Район:</div>
        <div className="offer-info-col">Кировский</div>
      </div>
      <div className="offer-info-row">
        <div className="offer-info-col">Площадь:</div>
        <div className="offer-info-col">144.7м2</div>
      </div>
      <div className="offer-info-row">
        <div className="offer-info-col">Вытяжка:</div>
        <div className="offer-info-col">нет</div>
      </div>
    </div>
  </a>)
}

const ThirdOffItem = () =>{
  return (
    <a href="#" className="offers-item">
      <div className="offer-img"><img src={require('../../img/offers/3.png')}/></div>
      <div className="offer-descr">
        Кафе/фаст-фуд возле метро Кировского района.
      </div>
      <div className="offer-price">
        150 000 руб/мес
      </div>
      <div className="offer-info">
        <div className="offer-info-row">
          <div className="offer-info-col">Категория:</div>
          <div className="offer-info-col">Помещения под кафе</div>
        </div>
        <div className="offer-info-row">
          <div className="offer-info-col">Район:</div>
          <div className="offer-info-col">Кировский</div>
        </div>
        <div className="offer-info-row">
          <div className="offer-info-col">Площадь:</div>
          <div className="offer-info-col">144.7м2</div>
        </div>
        <div className="offer-info-row">
          <div className="offer-info-col">Вытяжка:</div>
          <div className="offer-info-col">нет</div>
        </div>
      </div>
    </a>
  )
}

const FourthOffItem = () =>{
  return (
    <a href="#" className="offers-item">
      <div className="offer-img"><img src={require('../../img/offers/4.png')}/></div>
      <div className="offer-descr">
        Кафе/фаст-фуд возле метро Кировского района.
      </div>
      <div className="offer-price">
        150 000 руб/мес
      </div>
      <div className="offer-info">
        <div className="offer-info-row">
          <div className="offer-info-col">Категория:</div>
          <div className="offer-info-col">Помещения под кафе</div>
        </div>
        <div className="offer-info-row">
          <div className="offer-info-col">Район:</div>
          <div className="offer-info-col">Кировский</div>
        </div>
        <div className="offer-info-row">
          <div className="offer-info-col">Площадь:</div>
          <div className="offer-info-col">144.7м2</div>
        </div>
        <div className="offer-info-row">
          <div className="offer-info-col">Вытяжка:</div>
          <div className="offer-info-col">нет</div>
        </div>
      </div>
    </a>

  )
}

export default class Offers extends React.Component {
  public render (){
    return (
      <section className="offers">
        <div className="container">
          <div className="section-title">Интересные предложения</div>
          <div className="offers-list">
            <FirstOffItem/>
            <SecondOffItem/>
            <ThirdOffItem/>
            <FourthOffItem/>
          </div>
          <a className="offers-view-all" href="#">Все помещения</a>
        </div>
      </section>
    )
  }
}
