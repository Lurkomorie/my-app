/* tslint:disable */
import * as React from 'react';

const CardDetail = () => {
  return(
    <div className="card-details">
      <div className="card-title">Аренда 2-х этажного помещения под клуб, ресторан в
        Петроградском районе <span className="card-num">№434356</span>
      </div>
      <div className="card-slider">
        <img src={require('../../img/card/slider.png')}/>
      </div>
      <div className="card-info card-info-show">
        <div className="card-info-price">6 000 000 руб/мес</div>
        <div className="card-union-mobile">
          <div className="card-info-row small-pad">
            <div className="card-info-cell no-pad"><span className="card-info-cell-name">Район:</span></div>
            <div className="card-info-cell no-pad"><span className="card-info-cell-value">Центральный</span></div>
          </div>
          <div className="card-info-row small-pad">
            <div className="card-info-cell no-pad"><span className="card-info-cell-name">Категория:</span></div>
            <div className="card-info-cell no-pad"><span className="card-info-cell-value">Продажа бизнеса</span></div>
          </div>
        </div>
        <div className="card-info-row card-union-mobile">
          <div className="card-info-cell">
            <i className="card-info-icon icon-dining-room"/>
            <span className="card-info-cell-name">Столовая<br/> на предприятии</span>
          </div>
          <div className="card-info-cell">
            <i className="card-info-icon icon-dining-room"/>
            <span className="card-info-cell-name">Отдельное<br/> здание</span>
          </div>
        </div>
        <hr className="card-info-row-separator"/>
        <div className="card-info-row card-info-row-union">
          <i className="card-info-icon icon-size"/>
          <div className="card-info-cell">
            <span className="card-info-cell-name">Общая площадь:</span>
            <span className="card-info-cell-value">400 м2</span>
          </div>
          <div className="card-info-cell">
            <span className="card-info-cell-name">Площадь кухни:</span>
            <span className="card-info-cell-value">40 м2</span>
          </div>
          <div className="card-info-cell">
            <span className="card-info-cell-name">Общая площадь:</span>
            <span className="card-info-cell-value">400 м2</span>
          </div>
        </div>
        <hr className="card-info-row-separator"/>
        <div className="card-info-row">
          <div className="card-info-cell">
            <i className="card-info-icon icon-floor"/>
            <span className="card-info-cell-name">Этаж:</span>
            <span className="card-info-cell-value">Первый</span>
          </div>
          <div className="card-info-cell">
            <i className="card-info-icon icon-roof"/>
            <span className="card-info-cell-name">Потолок:</span>
            <span className="card-info-cell-value">2, 5 м</span>
          </div>
        </div>
        <div className="card-info-row">
          <div className="card-info-cell">
            <i className="card-info-icon icon-dining-room"/>
            <span className="card-info-cell-name">Вытяжка:</span>
            <span className="card-info-cell-value">Да +мангал</span>
          </div>
          <div className="card-info-cell">
            <i className="card-info-icon icon icon-elec"/>
            <span className="card-info-cell-name">Мощность:</span>
            <span className="card-info-cell-value">86 кВт + газ</span>
          </div>
        </div>
        <div className="card-info-row">
          <div className="card-info-cell">
            <i className="card-info-icon icon icon-volume"/>
            <span className="card-info-cell-name">Громкая музыка:</span>
            <span className="card-info-cell-value">Да</span>
          </div>
          <div className="card-info-cell">
            <i className="card-info-icon icon icon-elec"/>
            <span className="card-info-cell-name">Оборудование:</span>
            <span className="card-info-cell-value">нет</span>
          </div>
        </div>
        <div className="card-info-row">
          <div className="card-info-cell"/>
          <div className="card-info-cell">
            <i className="card-info-icon icon icon-furniture"/>
            <span className="card-info-cell-name">Мебель:</span>
            <span className="card-info-cell-value">Да</span>
          </div>
        </div>
        <hr className="card-info-row-separator"/>
        <div className="card-info-row">
          <span className="card-info-subtitle">
            <i className="card-info-icon icon-fin"/>
            Условия и финансовые показатели:
          </span>
        </div>
        <div className="card-info-row small-pad">
          <div className="card-info-cell">
            <span className="card-info-cell-name">Стоимость бизнеса:</span>
            <span className="card-info-cell-value">5 000 000 руб</span>
          </div>
          <div className="card-info-cell">
            <span className="card-info-cell-name">Стоимость аренды:</span>
            <span className="card-info-cell-value">500 000 руб/мес</span>
          </div>
        </div>
        <div className="card-info-row small-pad">
          <div className="card-info-cell">
            <span className="card-info-cell-name">Комиссионные:</span>
            <span className="card-info-cell-value">500 000 руб</span>
          </div>
        </div>
      </div>
      <p>
        Аренда помещения под клуб, ресторан в отдельно стоящем 2-х этажном здании рядом с
        метро в Петроградском районе.</p>
      <p>В непосредственной близости большое скопление бизнес центров, стадион Петровский,
        станция метро. Рядом постоянно высокий пешеходный трафик. В помещении
        проведены все необходимые коммуникации.Общая площадь помещения - 500 м2,
        высота потолков 3,4м.</p>
      <p>Выделенная электрическая мощность - 60 кВт (можно увеличить). Установлена
        приточно-вытяжная вентиляционная система.</p><br/>

      <p>Арендная ставка - 950 000 рублей в месяц (в т.ч. НДС)
        Коммунальные услуги оплачиваются отдельно
      </p>
      <div className="card-profits-list card-mobile-hidden">
        <div className="card-profits-item icon-plus-1">
          Получить лицензию на алкоголь и решить все возможные трудности
        </div>
        <div className="card-profits-item icon-plus-2">
          Установить систему автоматизации по специальной цене
        </div>
        <div className="card-profits-item icon-plus-3">
          Закупить оборудование у наших партнеров на особенных условиях
        </div>
      </div>
    </div>
  )
}

const CardInfo = () => {
  return(
    <div className="card-info card-mobile-hidden">
      <div className="card-info-price">6 000 000 руб/мес</div>
      <div className="card-union-mobile">
        <div className="card-info-row small-pad">
          <div className="card-info-cell no-pad"><span className="card-info-cell-name">Район:</span></div>
          <div className="card-info-cell no-pad"><span className="card-info-cell-value">Центральный</span></div>
        </div>
        <div className="card-info-row small-pad">
          <div className="card-info-cell no-pad"><span className="card-info-cell-name">Категория:</span></div>
          <div className="card-info-cell no-pad"><span className="card-info-cell-value">Продажа бизнеса</span>
          </div>
        </div>
      </div>
      <div className="card-info-row card-union-mobile">
        <div className="card-info-cell">
          <i className="card-info-icon icon-dining-room"/>
          <span className="card-info-cell-name">Столовая<br/> на предприятии</span>
        </div>
        <div className="card-info-cell">
          <i className="card-info-icon icon-dining-room"/>
          <span className="card-info-cell-name">Отдельное<br/> здание</span>
        </div>
      </div>
      <hr className="card-info-row-separator"/>
      <div className="card-info-row card-info-row-union">
        <i className="card-info-icon icon-size"/>
        <div className="card-info-cell">
          <span className="card-info-cell-name">Общая площадь:</span>
          <span className="card-info-cell-value">400 м2</span>
        </div>
        <div className="card-info-cell">
          <span className="card-info-cell-name">Площадь кухни:</span>
          <span className="card-info-cell-value">40 м2</span>
        </div>
        <div className="card-info-cell">
          <span className="card-info-cell-name">Общая площадь:</span>
          <span className="card-info-cell-value">400 м2</span>
        </div>
      </div>
      <hr className="card-info-row-separator"/>
      <div className="card-info-row">
        <div className="card-info-cell">
          <i className="card-info-icon icon-floor"/>
          <span className="card-info-cell-name">Этаж:</span>
          <span className="card-info-cell-value">Первый</span>
        </div>
        <div className="card-info-cell">
          <i className="card-info-icon icon-roof"/>
          <span className="card-info-cell-name">Потолок:</span>
          <span className="card-info-cell-value">2, 5 м</span>
        </div>
      </div>
      <div className="card-info-row">
        <div className="card-info-cell">
          <i className="card-info-icon icon-dining-room"/>
          <span className="card-info-cell-name">Вытяжка:</span>
          <span className="card-info-cell-value">Да +мангал</span>
        </div>
        <div className="card-info-cell">
          <i className="card-info-icon icon icon-elec"/>
          <span className="card-info-cell-name">Мощность:</span>
          <span className="card-info-cell-value">86 кВт + газ</span>
        </div>
      </div>
      <div className="card-info-row">
        <div className="card-info-cell">
          <i className="card-info-icon icon icon-volume"/>
          <span className="card-info-cell-name">Громкая музыка:</span>
          <span className="card-info-cell-value">Да</span>
        </div>
        <div className="card-info-cell">
          <i className="card-info-icon icon icon-elec"/>
          <span className="card-info-cell-name">Оборудование:</span>
          <span className="card-info-cell-value">нет</span>
        </div>
      </div>
      <div className="card-info-row">
        <div className="card-info-cell"/>
        <div className="card-info-cell">
          <i className="card-info-icon icon icon-furniture"/>
          <span className="card-info-cell-name">Мебель:</span>
          <span className="card-info-cell-value">Да</span>
        </div>
      </div>
      <hr className="card-info-row-separator"/>
      <div className="card-info-row">
        <span className="card-info-subtitle">
          <i className="card-info-icon icon-fin"/>
          Условия и финансовые показатели:
        </span>
      </div>
      <div className="card-info-row small-pad">
        <div className="card-info-cell">
          <span className="card-info-cell-name">Стоимость бизнеса:</span>
          <span className="card-info-cell-value">5 000 000 руб</span>
        </div>
        <div className="card-info-cell">
          <span className="card-info-cell-name">Стоимость аренды:</span>
          <span className="card-info-cell-value">500 000 руб/мес</span>
        </div>
      </div>
      <div className="card-info-row small-pad">
        <div className="card-info-cell">
          <span className="card-info-cell-name">Комиссионные:</span>
          <span className="card-info-cell-value">500 000 руб</span>
        </div>
      </div>
    </div>
  )
}

class CardContainter extends React.Component <any,any>{
    constructor() {
        super({});
        this.togglePopup = this.togglePopup.bind(this);
        this.state = {
            showPopup: false
        }
    }

    public togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

  public render() {
    return(
      <div className="card-container">
        <CardDetail/>
        <CardInfo/>
        <a onClick={this.togglePopup} className="card-call-order-button card-mobile-show">Заказать обратный звонок</a>
        <div className="card-profits-list card-mobile-show">
          <div className="card-profits-item icon-plus-1">
            Получить лицензию на алкоголь и решить все возможные трудности
          </div>
          <div className="card-profits-item icon-plus-2">
            Установить систему автоматизации по специальной цене
          </div>
          <div className="card-profits-item icon-plus-3">
            Закупить оборудование у наших партнеров на особенных условиях
          </div>
        </div>
      </div>
    )
  }
}

export default class Card extends React.Component <any,any> {
    constructor() {
        super({});
        this.togglePopup = this.togglePopup.bind(this);
        this.state = {
            showPopup: false
        }
    }

    public togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
  public render(){
    return(
      <section className="card">
        <div onClick={this.togglePopup} className="card-call-order">
          Заинтересовало предложение?
          <b>Закажите обратный звонок</b>
        </div>
        <CardContainter/>
      </section>
    )
  }
}
