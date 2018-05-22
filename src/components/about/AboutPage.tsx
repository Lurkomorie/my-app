/* tslint:disable */
import * as React from 'react';

const styles = require('./about.css');

class AboutPage extends React.Component {
    public render() {
        return (
            <div>
                <section className={styles.about}>
                    <div className={`${styles.container} ${styles['about-container']}`}>
                        <div className={styles['about-img-right']}>
                            <img src={require('../../img/about/logo.png')}/>
                        </div>
                        <div className={styles['about-text-left']}>
                            <p>- лидер рынка по аренде, продаже и управлению коммерческой<br/> недвижимостью в сфере
                                ресторанного бизнеса.</p>
                            <p>Оказываем любую юридическую поддержку рестораторам,<br/>
                                в том числе получение лицензии на алкоголь <br/>
                                и регистрацию договора аренды в УФРС.</p>
                        </div>
                    </div>
                </section>

                <section className={styles['container']}>
                    <div className={`${styles.container} ${styles['about-clients']}`}>
                        <div className={styles['about-clients-title']}>Более 1400 постоянных клиентов</div>
                        <div className={styles['clients-list']}>
                            <div className={styles['clients-item']}><img src={require('../../img/clients/1.png')}/></div>
                            <div className={styles['clients-item']}><img src={require('../../img/clients/2.png')}/></div>
                            <div className={styles['clients-item']}><img src={require('../../img/clients/3.png')}/></div>
                            <div className={styles['clients-item']}><img src={require('../../img/clients/4.png')}/></div>
                            <div className={styles['clients-item']}><img src={require('../../img/clients/5.png')}/></div>
                            <div className={styles['clients-item']}><img src={require('../../img/clients/6.png')}/></div>
                            <div className={styles['clients-item']}><img src={require('../../img/clients/7.png')}/></div>
                            <div className={styles['clients-item']}><img src={require('../../img/clients/8.png')}/></div>
                            <div className={styles['clients-item']}><img src={require('../../img/clients/9.png')}/></div>
                            <div className={styles['clients-item']}><img src={require('../../img/clients/10.png')}/></div>
                            <div className={styles['clients-item']}><img src={require('../../img/clients/11.png')}/></div>
                            <div className={styles['clients-item']}><img src={require('../../img/clients/12.png')}/></div>
                            <div className={styles['clients-item']}><img src={require('../../img/clients/1.png')}/></div>
                            <div className={styles['clients-item']}><img src={require('../../img/clients/2.png')}/></div>
                            <div className={styles['clients-item']}><img src={require('../../img/clients/3.png')}/></div>
                            <div className={styles['clients-item']}><img src={require('../../img/clients/4.png')}/></div>
                            <div className={styles['clients-item']}><img src={require('../../img/clients/5.png')}/></div>
                            <div className={styles['clients-item']}><img src={require('../../img/clients/6.png')}/></div>
                        </div>
                    </div>
                </section>

                <section className={styles['estimate']}>
                    <div className={styles['container estimate-container']}>
                        <div className={styles['about-img-right']}><img src={require('../../img/about/estimate.png')}/></div>
                        <div className={styles['about-text-left']}>
                            Мы проводим оценку и знаем сколько <br/>
                            действительно стоит помещение.
                        </div>
                    </div>
                </section>

                <section className={styles['ad-placement']}>
                    <div className={styles['container ad-placement-container']}>
                        <div className={styles['about-img-right']}><img src={require('../../img/about/ad-placement.png')}/></div>
                        <div className={styles['about-text-left']}>
                            <p className={styles['ad-big-text']}><b>Наши объявления размещены более чем в
                                30 интернет и офлайн ресурсах.</b></p>
                            <p className={styles['ad-small-text']}>
                                О Вашем предложение в кротчайшие сроки узнает огромное количество потенциальных
                                арендаторов.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles['partnership']}>
                    <div className={styles['container']}>
                        Мы сотрудничаем более чем с <b>1000</b> бизнес-центров<br/> и торгово развлекательных
                        комплексов.
                    </div>
                </section>

                <section className={styles['confidentiality']}>
                    <div className={styles['container']}>
                        <div className={styles['confidentiality-title']}>По многим объектам работаем конфиденциально, в связи с
                            тем, что:
                        </div>
                        <div className={styles['confidentiality-list']}>
                            <div className={styles['confidentiality-item eye-icon']}>
                                Собственники не хотят открыто афишировать на рынке о предложении;
                            </div>
                            <div className={styles['confidentiality-item cup-icon']}>
                                Большинство из наших предложений являются действующими точками питания,
                                сотрудники которых не должны знать о желании собственника сменить арендатора.
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles['legal-features']}>
                    <div className={styles['container legal-features-container']}>
                        <div className={styles['legal-features-text']}>
                            <div className={styles['legal-features-caption']}>Знаем все юридические тонкости</div>
                            <p>для защиты интересов арендодателя и арендатора</p>
                        </div>
                        <div className={styles['legal-features-img']}>
                            <img src={require('../../img/about/ur-uslugi.png')}/>
                        </div>
                    </div>
                </section>

                <section className={styles['experience']}>
                    <div className={styles['experience-container container']}>
                        <div className={styles['experience-img']}><img src={require('../../img/about/map.png')}/></div>
                        <div className={styles['experience-text']}>Более 1800 успешных сделок
                            по аренде и продаже ресторанов.
                        </div>
                    </div>
                </section>

                <section className={styles['about-services']}>
                    <div className={styles['about-services-title']}>Мир кафе так же является Управляющей компанией.</div>
                    <div className={styles['about-services-descr']}>Мы решаем следующие задачи</div>
                    <div className={styles['about-services-list']}>
                        <div className={styles['about-services-item hand-icon']}>
                            <b>Контроль своевременной оплаты аренды, коммунальных услуг</b>
                            <p>Вы получаете профессиональное юредическое сопровождение</p>
                        </div>
                        <div className={styles['about-services-item list-icon']}>
                            <b>Полный контроль над помещением</b>
                            <p>Жалобы соседей<br/>
                                Вопросы ЖКХ<br/>
                                Вопросы арендатора
                            </p>
                        </div>
                        <div className={styles['about-services-item search-icon']}>
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

