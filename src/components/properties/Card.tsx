/* tslint:disable */
import * as React from 'react';

const cardS = require('./card.css');
const main = require('../../css/main.css');


const CardDetail = () => {
  return(
    <div className={cardS['card-details']}>
      <div className={cardS['card-title']}>Аренда 2-х этажного помещения под клуб, ресторан в
        Петроградском районе <span className={cardS['card-num']}>№434356</span>
      </div>
      <div className={cardS['card-slider']}>
        <img src={require('../../img/card/slider.png')}/>
      </div>
      <div className={cardS['card-info card-info-show']}>
        <div className={cardS['card-info-price']}>6 000 000 руб/мес</div>
        <div className={cardS['card-union-mobile']}>
          <div className={cardS['card-info-row small-pad']}>
            <div className={cardS['card-info-cell no-pad']}><span className={cardS['card-info-cell-name']}>Район:</span></div>
            <div className={cardS['card-info-cell no-pad']}><span className={cardS['card-info-cell-value']}>Центральный</span></div>
          </div>
          <div className={cardS['card-info-row small-pad']}>
            <div className={cardS['card-info-cell no-pad']}><span className={cardS['card-info-cell-name']}>Категория:</span></div>
            <div className={cardS['card-info-cell no-pad']}><span className={cardS['card-info-cell-value']}>Продажа бизнеса</span></div>
          </div>
        </div>
        <div className={cardS['card-info-row card-union-mobile']}>
          <div className={cardS['card-info-cell']}>
            <i className={cardS['card-info-icon icon-dining-room']}/>
            <span className={cardS['card-info-cell-name']}>Столовая<br/> на предприятии</span>
          </div>
          <div className={cardS['card-info-cell']}>
            <i className={cardS['card-info-icon icon-dining-room']}/>
            <span className={cardS['card-info-cell-name']}>Отдельное<br/> здание</span>
          </div>
        </div>
        <hr className={cardS['card-info-row-separator']}/>
        <div className={cardS['card-info-row card-info-row-union']}>
          <i className={cardS['card-info-icon icon-size']}/>
          <div className={cardS['card-info-cell']}>
            <span className={cardS['card-info-cell-name']}>Общая площадь:</span>
            <span className={cardS['card-info-cell-value']}>400 м2</span>
          </div>
          <div className={cardS['card-info-cell']}>
            <span className={cardS['card-info-cell-name']}>Площадь кухни:</span>
            <span className={cardS['card-info-cell-value']}>40 м2</span>
          </div>
          <div className={cardS['card-info-cell']}>
            <span className={cardS['card-info-cell-name']}>Общая площадь:</span>
            <span className={cardS['card-info-cell-value']}>400 м2</span>
          </div>
        </div>
        <hr className={cardS['card-info-row-separator']}/>
        <div className={cardS['card-info-row']}>
          <div className={cardS['card-info-cell']}>
            <i className={cardS['card-info-icon icon-floor']}/>
            <span className={cardS['card-info-cell-name']}>Этаж:</span>
            <span className={cardS['card-info-cell-value']}>Первый</span>
          </div>
          <div className={cardS['card-info-cell']}>
            <i className={cardS['card-info-icon icon-roof']}/>
            <span className={cardS['card-info-cell-name']}>Потолок:</span>
            <span className={cardS['card-info-cell-value']}>2, 5 м</span>
          </div>
        </div>
        <div className={cardS['card-info-row']}>
          <div className={cardS['card-info-cell']}>
            <i className={cardS['card-info-icon icon-dining-room']}/>
            <span className={cardS['card-info-cell-name']}>Вытяжка:</span>
            <span className={cardS['card-info-cell-value']}>Да +мангал</span>
          </div>
          <div className={cardS['card-info-cell']}>
            <i className={cardS['card-info-icon icon icon-elec']}/>
            <span className={cardS['card-info-cell-name']}>Мощность:</span>
            <span className={cardS['card-info-cell-value']}>86 кВт + газ</span>
          </div>
        </div>
        <div className={cardS['card-info-row']}>
          <div className={cardS['card-info-cell']}>
            <i className={cardS['card-info-icon icon icon-volume']}/>
            <span className={cardS['card-info-cell-name']}>Громкая музыка:</span>
            <span className={cardS['card-info-cell-value']}>Да</span>
          </div>
          <div className={cardS['card-info-cell']}>
            <i className={cardS['card-info-icon icon icon-elec']}/>
            <span className={cardS['card-info-cell-name']}>Оборудование:</span>
            <span className={cardS['card-info-cell-value']}>нет</span>
          </div>
        </div>
        <div className={cardS['card-info-row']}>
          <div className={cardS['card-info-cell']}/>
          <div className={cardS['card-info-cell']}>
            <i className={cardS['card-info-icon icon icon-furniture']}/>
            <span className={cardS['card-info-cell-name']}>Мебель:</span>
            <span className={cardS['card-info-cell-value']}>Да</span>
          </div>
        </div>
        <hr className={cardS['card-info-row-separator']}/>
        <div className={cardS['card-info-row']}>
          <span className={cardS['card-info-subtitle']}>
            <i className={cardS['card-info-icon icon-fin']}/>
            Условия и финансовые показатели:
          </span>
        </div>
        <div className={cardS['card-info-row small-pad']}>
          <div className={cardS['card-info-cell']}>
            <span className={cardS['card-info-cell-name']}>Стоимость бизнеса:</span>
            <span className={cardS['card-info-cell-value']}>5 000 000 руб</span>
          </div>
          <div className={cardS['card-info-cell']}>
            <span className={cardS['card-info-cell-name']}>Стоимость аренды:</span>
            <span className={cardS['card-info-cell-value']}>500 000 руб/мес</span>
          </div>
        </div>
        <div className={cardS['card-info-row small-pad']}>
          <div className={cardS['card-info-cell']}>
            <span className={cardS['card-info-cell-name']}>Комиссионные:</span>
            <span className={cardS['card-info-cell-value']}>500 000 руб</span>
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
      <div className={cardS['card-profits-list card-mobile-hidden']}>
        <div className={cardS['card-profits-item icon-plus-1']}>
          Получить лицензию на алкоголь и решить все возможные трудности
        </div>
        <div className={cardS['card-profits-item icon-plus-2']}>
          Установить систему автоматизации по специальной цене
        </div>
        <div className={cardS['card-profits-item icon-plus-3']}>
          Закупить оборудование у наших партнеров на особенных условиях
        </div>
      </div>
    </div>
  )
}

const CardInfo = () => {
  return(
    <div className={cardS['card-info card-mobile-hidden']}>
      <div className={cardS['card-info-price']}>6 000 000 руб/мес</div>
      <div className={cardS['card-union-mobile']}>
        <div className={cardS['card-info-row small-pad']}>
          <div className={cardS['card-info-cell no-pad']}><span className={cardS['card-info-cell-name']}>Район:</span></div>
          <div className={cardS['card-info-cell no-pad']}><span className={cardS['card-info-cell-value']}>Центральный</span></div>
        </div>
        <div className={cardS['card-info-row small-pad']}>
          <div className={cardS['card-info-cell no-pad']}><span className={cardS['card-info-cell-name']}>Категория:</span></div>
          <div className={cardS['card-info-cell no-pad']}><span className={cardS['card-info-cell-value']}>Продажа бизнеса</span>
          </div>
        </div>
      </div>
      <div className={`${cardS['card-info-row']} ${cardS['card-union-mobile']}`}>
        <div className={cardS['card-info-cell']}>
          <i className={`${cardS['card-info-icon']} ${cardS['icon-dining-room']}`}/>
          <span className={cardS['card-info-cell-name']}>Столовая<br/> на предприятии</span>
        </div>
        <div className={cardS['card-info-cell']}>
          <i className={`${cardS['card-info-icon']} ${cardS['icon-dining-room']}`}/>
          <span className={cardS['card-info-cell-name']}>Отдельное<br/> здание</span>
        </div>
      </div>
      <hr className={cardS['card-info-row-separator']}/>
     
      <div className= {`${cardS['card-info-row']} ${cardS['card-info-row-union']}`}>
        <i className={`${cardS['card-info-icon']} ${cardS['icon-size']}`}/>
        <div className={cardS['card-info-cell']}>
          <span className={cardS['card-info-cell-name']}>Общая площадь:</span>
          <span className={cardS['card-info-cell-value']}>400 м2</span>
        </div>
        <div className={cardS['card-info-cell']}>
          <span className={cardS['card-info-cell-name']}>Площадь кухни:</span>
          <span className={cardS['card-info-cell-value']}>40 м2</span>
        </div>
        <div className={cardS['card-info-cell']}>
          <span className={cardS['card-info-cell-name']}>Общая площадь:</span>
          <span className={cardS['card-info-cell-value']}>400 м2</span>
        </div>
      </div>
      <hr className={cardS['card-info-row-separator']}/>
      <div className={cardS['card-info-row']}>
        <div className={cardS['card-info-cell']}>
          <i className={`${cardS['card-info-icon']} ${cardS['icon-floor']}`}/>
          <span className={cardS['card-info-cell-name']}>Этаж:</span>
          <span className={cardS['card-info-cell-value']}>Первый</span>
        </div>
        <div className={cardS['card-info-cell']}>
          <i className={`${cardS['card-info-icon']} ${cardS['icon-roof']}`}/>
          <span className={cardS['card-info-cell-name']}>Потолок:</span>
          <span className={cardS['card-info-cell-value']}>2, 5 м</span>
        </div>
      </div>
      <div className={cardS['card-info-row']}>
        <div className={cardS['card-info-cell']}>
          <i className={`${cardS['card-info-icon']} ${cardS['icon-dining-room']}`}/>
          <span className={cardS['card-info-cell-name']}>Вытяжка:</span>
          <span className={cardS['card-info-cell-value']}>Да +мангал</span>
        </div>
        <div className={cardS['card-info-cell']}>
          <i className={`${cardS['card-info-icon']} ${cardS['icon']} ${cardS['icon-elec']}`}/>
          <span className={cardS['card-info-cell-name']}>Мощность:</span>
          <span className={cardS['card-info-cell-value']}>86 кВт + газ</span>
        </div>
      </div>
      <div className={cardS['card-info-row']}>
        <div className={cardS['card-info-cell']}>
          <i className={`${cardS['card-info-icon']} ${cardS['icon']} ${cardS['icon-volume']}`}/>
          <span className={cardS['card-info-cell-name']}>Громкая музыка:</span>
          <span className={cardS['card-info-cell-value']}>Да</span>
        </div>
        <div className={cardS['card-info-cell']}>
          <i className={`${cardS['card-info-icon']} ${cardS['icon']} ${cardS['icon-elec']}`}/>
          <span className={cardS['card-info-cell-name']}>Оборудование:</span>
          <span className={cardS['card-info-cell-value']}>нет</span>
        </div>
      </div>
      <div className={cardS['card-info-row']}>
        <div className={cardS['card-info-cell']}/>
        <div className={cardS['card-info-cell']}>
          <i className={`${cardS['card-info-icon']} ${cardS['icon']} ${cardS['icon-furniture']}`}/>
          <span className={cardS['card-info-cell-name']}>Мебель:</span>
          <span className={cardS['card-info-cell-value']}>Да</span>
        </div>
      </div>
      <hr className={cardS['card-info-row-separator']}/>
      <div className={cardS['card-info-row']}>
        <span className={cardS['card-info-subtitle']}>
          <i className={`${cardS['card-info-icon']} ${cardS['icon-fin']}`}/>
          Условия и финансовые показатели:
        </span>
      </div>
      <div className={`${cardS['card-info-row']} ${cardS['small-pad']}`}>
        <div className={cardS['card-info-cell']}>
          <span className={cardS['card-info-cell-name']}>Стоимость бизнеса:</span>
          <span className={cardS['card-info-cell-value']}>5 000 000 руб</span>
        </div>
        <div className={cardS['card-info-cell']}>
          <span className={cardS['card-info-cell-name']}>Стоимость аренды:</span>
          <span className={cardS['card-info-cell-value']}>500 000 руб/мес</span>
        </div>
      </div>
      <div className={`${cardS['card-info-row']} ${cardS['small-pad']}`}>
        <div className={cardS['card-info-cell']}>
          <span className={cardS['card-info-cell-name']}>Комиссионные:</span>
          <span className={cardS['card-info-cell-value']}>500 000 руб</span>
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
      <div className={cardS['card-container']}>
        <CardDetail/>
        <CardInfo/>
        <a onClick={this.togglePopup} className={`${cardS['card-call-order-button']} ${cardS['card-mobile-show']}`}>Заказать обратный звонок</a>
        <div className={`${cardS['card-profits-list']} ${cardS['card-mobile-show']}`}>
          <div className={`${cardS['card-profits-item']} ${cardS['icon-plus-1']}`}>
            Получить лицензию на алкоголь и решить все возможные трудности
          </div>
          <div className={`${cardS['card-profits-item']} ${cardS['icon-plus-2']}`}>
            Установить систему автоматизации по специальной цене
          </div>
          <div className={`${cardS['card-profits-item']} ${cardS['icon-plus-3']}`}>
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
      <section className={cardS['card']}>
        <div onClick={this.togglePopup} className={cardS['card-call-order']}>
          Заинтересовало предложение?
          <b>Закажите обратный звонок</b>
        </div>
        <CardContainter/>
      </section>
    )
  }
}
