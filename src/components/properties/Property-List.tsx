
import * as React from 'react';
import {Link} from 'react-router-dom';

const Obj = () => {
  return (<div className="objects-item">

    <Link to="/card" className="item-caption mobile-info-show">
      <span className="item-caption-text crop-text">Аренда 2-х этажного помещения под клуб, ресторан в Петроградском районе </span>
      <div className="item-caption-price">
        <span className="item-caption-amount">6 000 000 руб</span>
        <span className="item-caption-number">№4453</span>
      </div>
    </Link>
    <a href="#" className="item-img">
      <div className="item-slider-container">
        <span className="item-slider-dot"/>
        <span className="item-slider-dot"/>
        <span className="item-slider-dot"/>
        <span className="item-slider-dot"/>
        <span className="item-slider-dot"/>
        <ul className="item-slider-list">
          <li className="item-slider">
            <img src={require('../../img/list-search/item-img.jpg')}/>
          </li>
          <li className="item-slider">
            <img src={require('../../img/list-search/item-img-test.jpg')}/>
          </li>
          <li className="item-slider">
            <img src={require('../../img/list-search/item-img.jpg')}/>
          </li>
          <li className="item-slider">
            <img src={require('../../img/list-search/item-img-test.jpg')}/>
          </li>
          <li className="item-slider">
            <img src={require('../../img/list-search/item-img.jpg')}/>
            <div className="item-slider-more">
              Ещё<br/>2 фото
            </div>
          </li>
        </ul>
        <span className="item-slider-counter">
              <i className="icon-photo">6</i>
              </span>
      </div>
    </a>
    <div className="item-description">
      <Link to="/card" className="item-caption">
              <span className="item-caption-text crop-text">Аренда 2-х этажного помещения под клуб, ресторан в
                Петроградском районе aренда 2-х этажного помещения под клуб, ресторан в
                Петроградском районе</span>
        <div className="item-caption-price">
          <span className="item-caption-amount">6 000 000 руб</span>
          <span className="item-caption-number">№4453</span>
        </div>
      </Link>
      <div className="item-info mobile-info-show">
        <div className="item-info-row">
          <i className="card-info-icon icon-dining-room"/>
          <span className="item-info-name item-info-name-pad">Столовая<br/> на предприятии</span>
        </div>
      </div>
      <div className="item-descr">
        <p>Площадь торгового зала 104м2. Высота потолков 3.8м. Возможно<br/> рабоотать 24 часа!</p>
        <div className="item-info">
          <div className="item-info-column">
            <div className="item-info-row">
              <span className="item-info-name">Район:</span>
              <span className="item-info-value">Центральный</span>
            </div>
            <div className="item-info-row">
              <span className="item-info-name">Этаж:</span>
              <span className="item-info-value">Первый</span>
            </div>
            <div className="item-info-row">
              <span className="item-info-name">Площадь</span>
              <span className="item-info-value">400м2</span>
            </div>
          </div>
          <div className="item-info-column">
            <div className="item-info-row">
              <span className="item-info-name">Оборудование:</span>
              <span className="item-info-value">нет</span>
            </div>
            <div className="item-info-row">
              <span className="item-info-name">Вытяжка:</span>
              <span className="item-info-value">Да +мангал</span>
            </div>
            <div className="item-info-row">
              <span className="item-info-name">Мощность:</span>
              <span className="item-info-value">86кВт +газ</span>
            </div>
          </div>
          <div className="item-info-column item-info-column-hidden">
            <div className="item-info-row">
              <span className="item-info-name">Мебель:</span>
              <span className="item-info-value">нет</span>
            </div>
            <div className="item-info-row">
              <i className="card-info-icon icon-dining-room"/>
              <span className="item-info-name item-info-name-pad">Столовая<br/> на предприятии</span>
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
    <section className="objects-list">
      <Obj/>
      <Obj/>
    </section>
  )
}

const Filter = () => {
    return (
      <div className="filter">
        <form className="filter-form">
          <div className="filter-form-title">Поиск объектов</div>
          <label className="filter-label">Тип</label>
          <div className="filter-line">
            <select className="filter-field" id="type">
              <option value="Любой">Любой</option>
              <option value="Район">Тип</option>
            </select>
          </div>
          <label className="filter-label">Район</label>
          <div className="filter-line">
            <select className="filter-field" id="location" name="location">
              <option value="Любой">Любой</option>
              <option value="Район">Район</option>
            </select>
            <button className="filter-add-btn">+</button>
          </div>
          <span className="filter-label">Площадь</span>
          <div className="filter-line">
            <input className="filter-field filter-input" type="text" placeholder="от"/>
              <input className="filter-field filter-input" type="text" placeholder="до"/>
                <span className="filter-unit">м2</span>
          </div>
          <span className="filter-label">Цена</span>
          <div className="filter-line">
            <input className="filter-field filter-input" type="text" placeholder="от"/>
              <input className="filter-field filter-input" type="text" placeholder="до"/>
                <span className="filter-unit">руб.</span>
          </div>
          <span className="filter-label">Мощность</span>
          <div className="filter-line">
            <input className="filter-field filter-input" type="text" placeholder="от"/>
              <span className="filter-unit space-left">кВт</span>
              <span className="filter-empty-space"/>
          </div>
          <div className="filter-line-check">
            <input type="checkbox" id="extract" value="extract" className="filter-checkbox"/>
              <label className="filter-checkbox-label">Вытяжка</label>
          </div>
          <div className="filter-line-check">
            <input type="checkbox" id="muzic" value="muzic" className="filter-checkbox"/>
              <label className="filter-checkbox-label">Громкая музыка</label>
          </div>
          <div className="filter-line-check">
            <input type="checkbox" id="elec" value="elec" className="filter-checkbox"/>
              <label className="filter-checkbox-label">Оборудование</label>
          </div>
          <div className="filter-line-check">
            <input type="checkbox" id="furniture" value="furniture" className="filter-checkbox"/>
              <label  className="filter-checkbox-label">Мебель</label>
          </div>
          <div className="mobile-show filter-search-result">Найдено 56 объектов</div>
          <button className="filter-button" type="submit">Искать</button>
        </form>
      </div>
    )
  }

const ListSearch = () => {
    return (
      <section className="list-search">
        <div className="container list-search-container">
          <button className="filter-button filter-show-button mobile-show" type="submit">Открыть фильтр</button>
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
