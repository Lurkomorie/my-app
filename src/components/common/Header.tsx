/* tslint:disable */

import * as React from 'react';
import {NavLink} from 'react-router-dom'

const styles = require('./header.css');

const HeaderLeft = () => {
  return (
    <div className={styles['header-left-section']}>
      <div className={styles['header-logo']}>
        <a className={styles['header-logo-link']} href='/'><img src={require('../../img/logo.png')}/> </a>
        <span className={styles['header-description']}>
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
      <div className={styles['top-section-text-block']}>
        <div className={styles['top-section-title']}>Сделайте лицензию</div>
        <div className={styles['top-section-description']}>
          Равным образом рамки и место обучения кадров способствует<br/> подготовки и
          реализации существенных финансовых<br/> и административных условий.
        </div>
        <a href='#' className={styles['top-section-btn']}>Подробнее</a>
      </div>
    );
  }
  else if(props.pathname == '/about') {
    return (
      <div className={styles['top-section-text-block']}>
        <div className={styles['top-section-title']}>Мир кафе</div>
        <div className={styles['top-section-description']}>Первое агентство Санкт-петербурга по организации Ресторанного
          бизнеса.
        </div>
      </div>
    )
  }
  else {return null};
};

const HeaderRight = (props : any) => {
  return (
    <div className={styles['header-right-section']}>
      <div className={styles['header-menu-phone']}>
        <nav className={styles['header-menu open']}>
          <NavLink to='/about' className={styles['header-menu-link']}>О компании</NavLink>
          <NavLink to='/property' className={styles['header-menu-link']}>Недвижимость</NavLink>
          <a href='#' className={styles['header-menu-link']}>Юр услуги</a>
          <a href='#' className={styles['header-menu-link']}>Партнеры</a>
        </nav>
        <a className={styles['header-phone']} href='tel:+78126408018'>+7 (812) 640-80-18</a>
      </div>
      <div className={styles['header-social']}>
        <a href='#' className={styles['header-social-link vk']}/>
        <a href='#' className={styles['header-social-link fb']}/>
        <a href='#' className={styles['header-social-link inst']}/>
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
        <div className={styles['header-menu-toggle']}><i className={styles['menu-icon']}/>Меню</div>
        <div className={headerStyle}>
          <div className={styles['wrapper-overlay']}>
            <div className={styles['overlay-effect']}/>
              <header className={`${styles.header} ${styles.wrapper}`}>
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