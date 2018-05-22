import * as React from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';


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
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo"><img src={require('../../img/logo_footer.png')}/></div>
          <div className="footer-info">
            <div className="footer-contacts">
              <div className="adress">
                <span className="subtitle">Адрес</span>
                <span className="adress-info">
                  г. Санкт-Петербург,<br/>
								Греческий проспект, дом 29
							</span>
              </div>
              <div className="phone">
                <span className="subtitle phone-subtitle">Телефон в Санкт-Петербурге</span>
                <span className="phone-number">+7 (812) 640-80-18</span>
              </div>
              <a onClick={this.togglePopup} className="ask-link">Задать вопрос</a>
              <div className="copyright">
                © 2010–2017 ООО “Мир Кафе”<br/> Аренда помещения под ресторан.
              </div>
            </div>

            <div className="footer-menu">
              <div className="footer-menu-toggle"><i className="menu-icon"/>Меню</div>
              <div className="footer-menu-inner open">
                <span className="footer-menu-subtitle">Услуги</span>
                <a href="#" className="footer-menu-section-link">Аренда помещений</a>
                <ul className="footer-menu-list">
                  <li className="footer-menu-item">
                    <a className="footer-menu-link" href="#">помещения под ресторан</a>
                  </li>
                  <li className="footer-menu-item">
                    <a className="footer-menu-link" href="#">готовые рестораны</a>
                  </li>
                  <li className="footer-menu-item">
                    <a className="footer-menu-link" href="#">столовые на предприятиях</a>
                  </li>
                </ul>
                <a href="#" className="footer-menu-section-link">Продажа помещений</a>
                <ul className="footer-menu-list">
                  <li className="footer-menu-item">
                    <a className="footer-menu-link" href="#">готовые рестораны</a>
                  </li>
                  <li className="footer-menu-item">
                    <a className="footer-menu-link" href="#">пустые помещения</a>
                  </li>
                </ul>
                <a href="#" className="footer-menu-section-link">Регистрация договоров</a><br/>
                <a href="#" className="footer-menu-section-link">Получение лицензии на алкоголь</a><br/>
                <Link to="/contacts" className="footer-menu-section-link">Контакты</Link>

                {this.state.showPopup ?
                  <Popup
                    closePopup={this.togglePopup}
                  />
                  : null
                }

              </div>
            </div>
            <div className="footer-social">
              <span className="footer-social-subtitle">Мы в соцсетях</span>
              <a className="footer-social-link vk" href="#">ВКонтакте</a>
              <a className="footer-social-link fb" href="#">Facebook</a>
              <a className="footer-social-link inst" href="#">Инстаграмм</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

