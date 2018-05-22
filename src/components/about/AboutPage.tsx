import * as React from 'react';

export default class AboutPage extends React.Component {
    public render() {
        return (
            <div>
                <section className="about">
                    <div className="container about-container">
                        <div className="about-img-right">
                            <img src={require('../../img/about/logo.png')}/>
                        </div>
                        <div className="about-text-left">
                            <p>- лидер рынка по аренде, продаже и управлению коммерческой<br/> недвижимостью в сфере
                                ресторанного бизнеса.</p>
                            <p>Оказываем любую юридическую поддержку рестораторам,<br/>
                                в том числе получение лицензии на алкоголь <br/>
                                и регистрацию договора аренды в УФРС.</p>
                        </div>
                    </div>
                </section>

                <section className="container">
                    <div className="clients about-clients">
                        <div className="about-clients-title">Более 1400 постоянных клиентов</div>
                        <div className="clients-list">
                            <div className="clients-item"><img src={require('../../img/clients/1.png')}/></div>
                            <div className="clients-item"><img src={require('../../img/clients/2.png')}/></div>
                            <div className="clients-item"><img src={require('../../img/clients/3.png')}/></div>
                            <div className="clients-item"><img src={require('../../img/clients/4.png')}/></div>
                            <div className="clients-item"><img src={require('../../img/clients/5.png')}/></div>
                            <div className="clients-item"><img src={require('../../img/clients/6.png')}/></div>
                            <div className="clients-item"><img src={require('../../img/clients/7.png')}/></div>
                            <div className="clients-item"><img src={require('../../img/clients/8.png')}/></div>
                            <div className="clients-item"><img src={require('../../img/clients/9.png')}/></div>
                            <div className="clients-item"><img src={require('../../img/clients/10.png')}/></div>
                            <div className="clients-item"><img src={require('../../img/clients/11.png')}/></div>
                            <div className="clients-item"><img src={require('../../img/clients/12.png')}/></div>
                            <div className="clients-item"><img src={require('../../img/clients/1.png')}/></div>
                            <div className="clients-item"><img src={require('../../img/clients/2.png')}/></div>
                            <div className="clients-item"><img src={require('../../img/clients/3.png')}/></div>
                            <div className="clients-item"><img src={require('../../img/clients/4.png')}/></div>
                            <div className="clients-item"><img src={require('../../img/clients/5.png')}/></div>
                            <div className="clients-item"><img src={require('../../img/clients/6.png')}/></div>
                        </div>
                    </div>
                </section>

                <section className="estimate">
                    <div className="container estimate-container">
                        <div className="about-img-right"><img src={require('../../img/about/estimate.png')}/></div>
                        <div className="about-text-left">
                            Мы проводим оценку и знаем сколько <br/>
                            действительно стоит помещение.
                        </div>
                    </div>
                </section>

                <section className="ad-placement">
                    <div className="container ad-placement-container">
                        <div className="about-img-right"><img src={require('../../img/about/ad-placement.png')}/></div>
                        <div className="about-text-left">
                            <p className="ad-big-text"><b>Наши объявления размещены более чем в
                                30 интернет и офлайн ресурсах.</b></p>
                            <p className="ad-small-text">
                                О Вашем предложение в кротчайшие сроки узнает огромное количество потенциальных
                                арендаторов.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="partnership">
                    <div className="container">
                        Мы сотрудничаем более чем с <b>1000</b> бизнес-центров<br/> и торгово развлекательных
                        комплексов.
                    </div>
                </section>

                <section className="confidentiality">
                    <div className="container">
                        <div className="confidentiality-title">По многим объектам работаем конфиденциально, в связи с
                            тем, что:
                        </div>
                        <div className="confidentiality-list">
                            <div className="confidentiality-item eye-icon">
                                Собственники не хотят открыто афишировать на рынке о предложении;
                            </div>
                            <div className="confidentiality-item cup-icon">
                                Большинство из наших предложений являются действующими точками питания,
                                сотрудники которых не должны знать о желании собственника сменить арендатора.
                            </div>
                        </div>
                    </div>
                </section>

                <section className="legal-features">
                    <div className="container legal-features-container">
                        <div className="legal-features-text">
                            <div className="legal-features-caption">Знаем все юридические тонкости</div>
                            <p>для защиты интересов арендодателя и арендатора</p>
                        </div>
                        <div className="legal-features-img">
                            <img src={require('../../img/about/ur-uslugi.png')}/>
                        </div>
                    </div>
                </section>

                <section className="experience">
                    <div className="experience-container container">
                        <div className="experience-img"><img src={require('../../img/about/map.png')}/></div>
                        <div className="experience-text">Более 1800 успешных сделок
                            по аренде и продаже ресторанов.
                        </div>
                    </div>
                </section>

                <section className="about-services">
                    <div className="about-services-title">Мир кафе так же является Управляющей компанией.</div>
                    <div className="about-services-descr">Мы решаем следующие задачи</div>
                    <div className="about-services-list">
                        <div className="about-services-item hand-icon">
                            <b>Контроль своевременной оплаты аренды, коммунальных услуг</b>
                            <p>Вы получаете профессиональное юредическое сопровождение</p>
                        </div>
                        <div className="about-services-item list-icon">
                            <b>Полный контроль над помещением</b>
                            <p>Жалобы соседей<br/>
                                Вопросы ЖКХ<br/>
                                Вопросы арендатора
                            </p>
                        </div>
                        <div className="about-services-item search-icon">
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

