/* tslint:disable */
import * as React from 'react';

const aboutS = require('./about.css');
const main = require('../../css/main.css');
const clients = require('./clients.css');

class AboutPage extends React.Component {
    public render() {
        return (
            <div>
                <section className={aboutS['about']}>
                    <div className={`${main['container']} ${aboutS['about-container']}`}>
                        <div className={aboutS['about-img-right']}>
                            <img className={aboutS['about-logo']} src={require('../../img/about/logo.png')}/>
                        </div>
                        <div className={aboutS['about-text-left']}>
                            <p>- лидер рынка по аренде, продаже и управлению коммерческой<br/> недвижимостью в сфере
                                ресторанного бизнеса.</p>
                            <p>Оказываем любую юридическую поддержку рестораторам,<br/>
                                в том числе получение лицензии на алкоголь <br/>
                                и регистрацию договора аренды в УФРС.</p>
                        </div>
                    </div>
                </section>

                <section className={main['container']}>
                    <div className={`${clients['clients']} ${aboutS['about-clients']}`}>
                        <div className={aboutS['about-clients-title']}>Более 1400 постоянных клиентов</div>
                        <div className={clients['clients-list']}>
                            <div className={clients['clients-item']}><img src={require('../../img/clients/1.png')}/></div>
                            <div className={clients['clients-item']}><img src={require('../../img/clients/2.png')}/></div>
                            <div className={clients['clients-item']}><img src={require('../../img/clients/3.png')}/></div>
                            <div className={clients['clients-item']}><img src={require('../../img/clients/4.png')}/></div>
                            <div className={clients['clients-item']}><img src={require('../../img/clients/5.png')}/></div>
                            <div className={clients['clients-item']}><img src={require('../../img/clients/6.png')}/></div>
                            <div className={clients['clients-item']}><img src={require('../../img/clients/7.png')}/></div>
                            <div className={clients['clients-item']}><img src={require('../../img/clients/8.png')}/></div>
                            <div className={clients['clients-item']}><img src={require('../../img/clients/9.png')}/></div>
                            <div className={clients['clients-item']}><img src={require('../../img/clients/10.png')}/></div>
                            <div className={clients['clients-item']}><img src={require('../../img/clients/11.png')}/></div>
                            <div className={clients['clients-item']}><img src={require('../../img/clients/12.png')}/></div>
                            <div className={clients['clients-item']}><img src={require('../../img/clients/1.png')}/></div>
                            <div className={clients['clients-item']}><img src={require('../../img/clients/2.png')}/></div>
                            <div className={clients['clients-item']}><img src={require('../../img/clients/3.png')}/></div>
                            <div className={clients['clients-item']}><img src={require('../../img/clients/4.png')}/></div>
                            <div className={clients['clients-item']}><img src={require('../../img/clients/5.png')}/></div>
                            <div className={clients['clients-item']}><img src={require('../../img/clients/6.png')}/></div>
                        </div>
                    </div>
                </section>

                <section className={aboutS['estimate']}>
                    <div className={`${main.container} ${aboutS['estimate-container']}`}>
                        <div className={aboutS['about-img-right']}><img src={require('../../img/about/estimate.png')}/></div>
                        <div className={aboutS['about-text-left']}>
                            Мы проводим оценку и знаем сколько <br/>
                            действительно стоит помещение.
                        </div>
                    </div>
                </section>

                <section className={aboutS['ad-placement']}>
                    <div className={`${main.container} ${aboutS['ad-placement-container']}`}>
                        <div className={aboutS['about-img-right']}><img src={require('../../img/about/ad-placement.png')}/></div>
                        <div className={aboutS['about-text-left']}>
                            <p className={aboutS['ad-big-text']}><b>Наши объявления размещены более чем в
                                30 интернет и офлайн ресурсах.</b></p>
                            <p className={aboutS['ad-small-text']}>
                                О Вашем предложение в кротчайшие сроки узнает огромное количество потенциальных
                                арендаторов.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={aboutS['partnership']}>
                    <div className={main['container']}>
                        Мы сотрудничаем более чем с <b>1000</b> бизнес-центров<br/> и торгово развлекательных
                        комплексов.
                    </div>
                </section>

                <section className={aboutS['confidentiality']}>
                    <div className={main['container']}>
                        <div className={aboutS['confidentiality-title']}>По многим объектам работаем конфиденциально, в связи с
                            тем, что:
                        </div>
                        <div className={aboutS['confidentiality-list']}>
                            <div className={`${aboutS['confidentiality-item']} ${aboutS['eye-icon']}`}>
                                Собственники не хотят открыто афишировать на рынке о предложении;
                            </div>
                            <div className={`${aboutS['confidentiality-item']} ${aboutS['cup-icon']}`}>
                                Большинство из наших предложений являются действующими точками питания,
                                сотрудники которых не должны знать о желании собственника сменить арендатора.
                            </div>
                        </div>
                    </div>
                </section>

                <section className={aboutS['legal-features']}>
                    <div className={`${main['container']} ${aboutS['legal-features-container']}`}>
                        <div className={aboutS['legal-features-text']}>
                            <div className={aboutS['legal-features-caption']}>Знаем все юридические тонкости</div>
                            <p>для защиты интересов арендодателя и арендатора</p>
                        </div>
                        <div className={aboutS['legal-features-img']}>
                            <img src={require('../../img/about/ur-uslugi.png')}/>
                        </div>
                    </div>
                </section>

                <section className={aboutS['experience']}>
                    <div className={`${main['container']} ${aboutS['experience-container']}`}>
                        <div className={aboutS['experience-img']}><img src={require('../../img/about/map.png')}/></div>
                        <div className={aboutS['experience-text']}>Более 1800 успешных сделок
                            по аренде и продаже ресторанов.
                        </div>
                    </div>
                </section>

                <section className={aboutS['about-services']}>
                    <div className={aboutS['about-services-title']}>Мир кафе так же является Управляющей компанией.</div>
                    <div className={aboutS['about-services-descr']}>Мы решаем следующие задачи</div>
                    <div className={aboutS['about-services-list']}>
                        <div className={`${aboutS['about-services-item']} ${aboutS['hand-icon']}`}>
                            <b>Контроль своевременной оплаты аренды, коммунальных услуг</b>
                            <p>Вы получаете профессиональное юредическое сопровождение</p>
                        </div>
                        <div className={`${aboutS['about-services-item']} ${aboutS['list-icon']}`}>
                            <b>Полный контроль над помещением</b>
                            <p>Жалобы соседей<br/>
                                Вопросы ЖКХ<br/>
                                Вопросы арендатора
                            </p>
                        </div>
                        <div className={`${aboutS['about-services-item']} ${aboutS['search-icon']}`}>
                            <b>Поиски арендатора</b>
                            <p>Оценка ликвидности помещения, размещение на рекоамных
                                площадках, умение работать конфиденциально.</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default AboutPage;

