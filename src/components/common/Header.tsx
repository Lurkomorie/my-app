/* tslint:disable */

import * as React from 'react';
import {NavLink} from 'react-router-dom'

const headerS = require('./header.css');
const topSection = require('./top-section.css');
const main = require('../../css/main.css');

const HeaderLeft = () => {
  return (
    <div className={headerS['header-left-section']}>
      <div className={headerS['header-logo']}>
        <a className={headerS['header-logo-link']} href='/'><img src={require('../../img/logo.png')}/> </a>
        <span className={headerS['header-description']}>
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
      <div className={topSection['top-section-text-block']}>
        <div className={topSection['top-section-title']}>Сделайте лицензию</div>
        <div className={topSection['top-section-description']}>
          Равным образом рамки и место обучения кадров способствует<br/> подготовки и
          реализации существенных финансовых<br/> и административных условий.
        </div>
        <a href='#' className={topSection['top-section-btn']}>Подробнее</a>
      </div>
    );
  }
  else if(props.pathname == '/about') {
    return (
      <div className={topSection['top-section-text-block']}>
        <div className={topSection['top-section-title']}>Мир кафе</div>
        <div className={topSection['top-section-description']}>Первое агентство Санкт-петербурга по организации Ресторанного
          бизнеса.
        </div>
      </div>
    )
  }
  else {return null};
};

const HeaderRight = (props : any) => {
  return (
    <div className={headerS['header-right-section']}>
      <div className={headerS['header-menu-phone']}>
        <nav className={`${headerS['header-menu']} ${headerS['open']}`}>
          <NavLink to='/about' className={headerS['header-menu-link']}>О компании</NavLink>
          <NavLink to='/property' className={headerS['header-menu-link']}>Недвижимость</NavLink>
          <a href='#' className={headerS['header-menu-link']}>Юр услуги</a>
          <a href='#' className={headerS['header-menu-link']}>Партнеры</a>
        </nav>
        <a className={headerS['header-phone']} href='tel:+78126408018'>+7 (812) 640-80-18</a>
      </div>
      <div className={headerS['header-social']}>
        <a href='#' className={`${headerS['header-social-link']} ${headerS['vk']}`}/>
        <a href='#' className={`${headerS['header-social-link']} ${headerS['fb']}`}/>
        <a href='#' className={`${headerS['header-social-link']} ${headerS['inst']}`}/>
      </div>
    </div>
  )
};

function switchHeaderStyle (path : any) {
  if(path == '/'){
    return `${topSection['top-section']} ${topSection['main-page']}`;
  }
  if(path == '/about'){
      return `${topSection['top-section']} ${topSection['about-page']}`;
  }
  else {return `${topSection['top-section']} ${topSection['inner-page']}`;};
}

export default class Header extends React.Component <any,any> {
  public render() {
      const pathname = window.location.pathname;
      const headerStyle = switchHeaderStyle(pathname);
    return (
      <div>
        <div className={headerS['header-menu-toggle']}><i className={headerS['menu-icon']}/>Меню</div>
        <div className={headerStyle}>
          <div className={main['wrapper-overlay']}>
            <div className={main['overlay-effect']}/>
              <header className={`${headerS.header} ${main.wrapper}`}>
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