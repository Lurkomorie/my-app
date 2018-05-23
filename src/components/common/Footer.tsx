/* tslint:disable */
import * as React from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';

const footerS = require('./footer.css');

export default class Footer extends React.Component <any, any>{
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

  public render () {
    return (
      <footer className={footerS['footer']}>
        <div className={footerS['footer-container']}>
          <div className={footerS['footer-logo']}><img src={require('../../img/logo_footer.png')}/></div>
          <div className={footerS['footer-info']}>
            <div className={footerS['footer-contacts']}>
              <div className={footerS['adress']}>
                <span className={footerS['subtitle']}>Адрес</span>
                <span className={footerS['adress-info']}>
                  г. Санкт-Петербург,<br/>
								Греческий проспект, дом 29
							</span>
              </div>
              <div className={footerS['phone']}>
                  <span className={`${footerS['subtitle']} ${footerS['phone-subtitle']}`}>Телефон в Санкт-Петербурге</span>
                  <span className={footerS['phone-number']}>+7 (812) 640-80-18</span>
              </div>
              <a onClick={this.togglePopup} className={footerS['ask-link']}>Задать вопрос</a>
              <div className={footerS['copyright']}>
                © 2010–2017 ООО “Мир Кафе”<br/> Аренда помещения под ресторан.
              </div>
            </div>

            <div className={footerS['footer-menu']}>
              <div className={footerS['footer-menu-toggle']}><i className={footerS['menu-icon']}/>Меню</div>
              <div className={footerS['footer-menu-inner open']}>
                <span className={footerS['footer-menu-subtitle']}>Услуги</span>
                <a href='#' className={footerS['footer-menu-section-link']}>Аренда помещений</a>
                <ul className={footerS['footer-menu-list']}>
                  <li className={footerS['footer-menu-item']}>
                    <a className={footerS['footer-menu-link']} href='#'>помещения под ресторан</a>
                  </li>
                  <li className={footerS['footer-menu-item']}>
                    <a className={footerS['footer-menu-link']} href='#'>готовые рестораны</a>
                  </li>
                  <li className={footerS['footer-menu-item']}>
                    <a className={footerS['footer-menu-link']} href='#'>столовые на предприятиях</a>
                  </li>
                </ul>
                <a href='#' className={footerS['footer-menu-section-link']}>Продажа помещений</a>
                <ul className={footerS['footer-menu-list']}>
                  <li className={footerS['footer-menu-item']}>
                    <a className={footerS['footer-menu-link']} href='#'>готовые рестораны</a>
                  </li>
                  <li className={footerS['footer-menu-item']}>
                    <a className={footerS['footer-menu-link']} href='#'>пустые помещения</a>
                  </li>
                </ul>
                <a href='#' className={footerS['footer-menu-section-link']}>Регистрация договоров</a><br/>
                <a href='#' className={footerS['footer-menu-section-link']}>Получение лицензии на алкоголь</a><br/>
                <Link to='/contacts' className={footerS['footer-menu-section-link']}>Контакты</Link>

                {this.state.showPopup ?
                  <Popup
                    closePopup={this.togglePopup}
                  />
                  : null
                }

              </div>
            </div>
            <div className={footerS['footer-social']}>
              <span className={footerS['footer-social-subtitle']}>Мы в соцсетях</span>
              <a className={`${footerS['footer-social-link']} ${footerS['vk']}`} href='#'>ВКонтакте</a>
              <a className={`${footerS['footer-social-link']} ${footerS['fb']}`} href='#'>Facebook</a>
              <a className={`${footerS['footer-social-link']} ${footerS['inst']}`} href='#'>Инстаграмм</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

