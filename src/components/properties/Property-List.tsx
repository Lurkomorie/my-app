/* tslint:disable */
import * as React from 'react';
import { Link } from 'react-router-dom';

const propS = require('./list-search.css');
const main = require('../../css/main.css');

const Obj = () => {
  return (<div className={propS['objects-item']}>

    <Link to='/card' className={`${propS['item-caption']} ${propS['mobile-info-show']}`}>
      <span className={`${propS['item-caption-text']} ${main['crop-text']}`}>Аренда 2-х этажного помещения под клуб, ресторан в Петроградском районе </span>
      <div className={propS['item-caption-price']}>
        <span className={propS['item-caption-amount']}>6 000 000 руб</span>
        <span className={propS['item-caption-number']}>№4453</span>
      </div>
    </Link>
    <a href='#' className={propS['item-img']}>
      <div className={propS['item-slider-container']}>
        <span className={propS['item-slider-dot']}/>
        <span className={propS['item-slider-dot']}/>
        <span className={propS['item-slider-dot']}/>
        <span className={propS['item-slider-dot']}/>
        <span className={propS['item-slider-dot']}/>
        <ul className={propS['item-slider-list']}>
          <li className={propS['item-slider']}>
            <img src={require('../../img/list-search/item-img.jpg')}/>
          </li>
          <li className={propS['item-slider']}>
            <img src={require('../../img/list-search/item-img-test.jpg')}/>
          </li>
          <li className={propS['item-slider']}>
            <img src={require('../../img/list-search/item-img.jpg')}/>
          </li>
          <li className={propS['item-slider']}>
            <img src={require('../../img/list-search/item-img-test.jpg')}/>
          </li>
          <li className={propS['item-slider']}>
            <img src={require('../../img/list-search/item-img.jpg')}/>
            <div className={propS['item-slider-more']}>
              Ещё<br/>2 фото
            </div>
          </li>
        </ul>
        <span className={propS['item-slider-counter']}>
              <i className={propS['icon-photo']}>6</i>
              </span>
      </div>
    </a>
    <div className={propS['item-description']}>
      <Link to='/card' className={propS['item-caption']}>
              <span className={`${propS['item-caption-text']} ${main['crop-text']}`}>Аренда 2-х этажного помещения под клуб, ресторан в
                Петроградском районе aренда 2-х этажного помещения под клуб, ресторан в
                Петроградском районе</span>
        <div className={propS['item-caption-price']}>
          <span className={propS['item-caption-amount']}>6 000 000 руб</span>
          <span className={propS['item-caption-number']}>№4453</span>
        </div>
      </Link>
      <div className={`${propS['item-info']} ${propS['mobile-info-show']}`}>
        <div className={propS['item-info-row']}>
          <i className={`${propS['card-info-icon']} ${propS['icon-dining-room']}`}/>
          <span className={`${propS['item-info-name']} ${propS['item-info-name-pad']}`}>Столовая<br/> на предприятии</span>
        </div>
      </div>
      <div className={propS['item-descr']}>
        <p>Площадь торгового зала 104м2. Высота потолков 3.8м. Возможно<br/> рабоотать 24 часа!</p>
        <div className={propS['item-info']}>
          <div className={propS['item-info-column']}>
            <div className={propS['item-info-row']}>
              <span className={propS['item-info-name']}>Район:</span>
              <span className={propS['item-info-value']}>Центральный</span>
            </div>
            <div className={propS['item-info-row']}>
              <span className={propS['item-info-name']}>Этаж:</span>
              <span className={propS['item-info-value']}>Первый</span>
            </div>
            <div className={propS['item-info-row']}>
              <span className={propS['item-info-name']}>Площадь</span>
              <span className={propS['item-info-value']}>400м2</span>
            </div>
          </div>
          <div className={propS['item-info-column']}>
            <div className={propS['item-info-row']}>
              <span className={propS['item-info-name']}>Оборудование:</span>
              <span className={propS['item-info-value']}>нет</span>
            </div>
            <div className={propS['item-info-row']}>
              <span className={propS['item-info-name']}>Вытяжка:</span>
              <span className={propS['item-info-value']}>Да +мангал</span>
            </div>
            <div className={propS['item-info-row']}>
              <span className={propS['item-info-name']}>Мощность:</span>
              <span className={propS['item-info-value']}>86кВт +газ</span>
            </div>
          </div>
          <div className={`${propS['item-info-column']} ${propS['item-info-column-hidden']}`}>
            <div className={propS['item-info-row']}>
              <span className={propS['item-info-name']}>Мебель:</span>
              <span className={propS['item-info-value']}>нет</span>
            </div>
            <div className={propS['item-info-row']}>
              <i className={`${propS['card-info-icon']} ${propS['icon-dining-room']}`}/>
              <span className={`${propS['item-info-name']} ${propS['item-info-name-pad']}`}>Столовая<br/> на предприятии</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

const ObjectsList = () => {
  return (
    <section className={propS['objects-list']}>
      <Obj/>
      <Obj/>
    </section>
  )
}

const Filter = () => {
    return (
      <div className={propS['filter']}>
        <form className={propS['filter-form']}>
          <div className={propS['filter-form-title']}>Поиск объектов</div>
          <label className={propS['filter-label']}>Тип</label>
          <div className={propS['filter-line']}>
            <select className={propS['filter-field']} id='type'>
              <option value='Любой'>Любой</option>
              <option value='Район'>Тип</option>
            </select>
          </div>
          <label className={propS['filter-label']}>Район</label>
          <div className={propS['filter-line']}>
            <select className={propS['filter-field']} id='location' name='location'>
              <option value='Любой'>Любой</option>
              <option value='Район'>Район</option>
            </select>
            <button className={propS['filter-add-btn']}>+</button>
          </div>
          <span className={propS['filter-label']}>Площадь</span>
          <div className={propS['filter-line']}>
            <input className={`${propS['filter-field']} ${propS['filter-input']}`} type='text' placeholder='от'/>
              <input className={`${propS['filter-field']} ${propS['filter-input']}`} type='text' placeholder='до'/>
                <span className={propS['filter-unit']}>м2</span>
          </div>
          <span className={propS['filter-label']}>Цена</span>
          <div className={propS['filter-line']}>
            <input className={`${propS['filter-field']} ${propS['filter-input']}`} type='text' placeholder='от'/>
              <input className={`${propS['filter-field']} ${propS['filter-input']}`} type='text' placeholder='до'/>
                <span className={propS['filter-unit']}>руб.</span>
          </div>
          <span className={propS['filter-label']}>Мощность</span>
          <div className={propS['filter-line']}>
            <input className={`${propS['filter-field']} ${propS['filter-input']}`} type='text' placeholder='от'/>
              <span className={`${propS['filter-unit']} ${propS['space-left']}`}>кВт</span>
              <span className={propS['filter-empty-space']}/>
          </div>
          <div className={propS['filter-line-check']}>
            <input type='checkbox' id='extract' value='extract' className={propS['filter-checkbox']}/>
              <label className={propS['filter-checkbox-label']}>Вытяжка</label>
          </div>
          <div className={propS['filter-line-check']}>
            <input type='checkbox' id='muzic' value='muzic' className={propS['filter-checkbox']}/>
              <label className={propS['filter-checkbox-label']}>Громкая музыка</label>
          </div>
          <div className={propS['filter-line-check']}>
            <input type='checkbox' id='elec' value='elec' className={propS['filter-checkbox']}/>
              <label className={propS['filter-checkbox-label']}>Оборудование</label>
          </div>
          <div className={propS['filter-line-check']}>
            <input type='checkbox' id='furniture' value='furniture' className={propS['filter-checkbox']}/>
              <label  className={propS['filter-checkbox-label']}>Мебель</label>
          </div>
          <div className={`${propS['mobile-show']} ${propS['filter-search-result']}`}>Найдено 56 объектов</div>
          <button className={propS['filter-button']} type='submit'>Искать</button>
        </form>
      </div>
    )
  }

const ListSearch = () => {
    return (
      <section className={propS['list-search']}>
        <div className={`${main['container']} ${propS['list-search-container']}`}>
          <button className={`${propS['filter-button']} ${propS['filter-show-button']} ${propS['mobile-show']}`} type='submit'>Открыть фильтр</button>
        <ObjectsList/>
            <Filter/>
        </div>
      </section>
    )
}


export default class PropertyList extends React.Component {
  public render() {
    return (
      <div>
          <ListSearch/>
      </div>
    )
  }}
