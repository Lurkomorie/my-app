/* tslint:disable */

import * as React from 'react';
import {NavLink} from 'react-router-dom'


const HeaderLeft = () => {
  return (
    <div className="header-left-section">
      <div className="header-logo">
        <a className="header-logo-link" href="/"><img src={require('../../img/logo.png')}/> </a>
        <span className="header-description">
                    Первое агентство Санкт-петербурга<br/>
						по организации Ресторанного бизнеса.
					</span>
      </div>
    </div>
  )
};

const TopSection = (props : any) => {
  if(props.pathname == '/') {
    return (
      <div className="top-section-text-block">
        <div className="top-section-title">Сделайте лицензию</div>
        <div className="top-section-description">
          Равным образом рамки и место обучения кадров способствует<br/> подготовки и
          реализации существенных финансовых<br/> и административных условий.
        </div>
        <a href="#" className="top-section-btn">Подробнее</a>
      </div>
    );
  }
  else if(props.pathname == '/about') {
    return (
      <div className="top-section-text-block">
        <div className="top-section-title">Мир кафе</div>
        <div className="top-section-description">Первое агентство Санкт-петербурга по организации Ресторанного
          бизнеса.
        </div>
      </div>
    )
  }
  else {return null};
};

const HeaderRight = (props : any) => {
  return (
    <div className="header-right-section">
      <div className="header-menu-phone">
        <nav className="header-menu open">
          <NavLink to="/about" className="header-menu-link" activeClassName="header-menu-link-active">О компании</NavLink>
          <NavLink to="/property" className="header-menu-link" activeClassName="header-menu-link-active">Недвижимость</NavLink>
          <a href="#" className="header-menu-link">Юр услуги</a>
          <a href="#" className="header-menu-link">Партнеры</a>
        </nav>
        <a className="header-phone" href="tel:+78126408018">+7 (812) 640-80-18</a>
      </div>
      <div className="header-social">
        <a href="#" className="header-social-link vk"/>
        <a href="#" className="header-social-link fb"/>
        <a href="#" className="header-social-link inst"/>
      </div>
    </div>
  )
};

function switchHeaderStyle (path : any) {
  if(path == '/'){
    return 'top-section main-page';
  }
  if(path == '/about'){
    return 'top-section about-page';
  }
  else {return 'top-section inner-page'};
}

export default class Header extends React.Component <any,any> {
  public render() {
      const pathname = window.location.pathname;
      const headerStyle = switchHeaderStyle(pathname);
    return (
      <div>
        <div className="header-menu-toggle"><i className="menu-icon"/>Меню</div>
        <div className={headerStyle}>
          <div className="wrapper-overlay">
            <div className="overlay-effect"/>
              <header className="header wrapper">
                <HeaderLeft/>
                <HeaderRight/>
              </header>
              <TopSection pathname={pathname}/>
          </div>
        </div>
      </div>
    );
  }
}