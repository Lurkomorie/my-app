/* tslint:disable */
import * as React from 'react';

const servicesS = require('./services-slider.css');
const main = require('../../css/main.css');

export default class ServicesSlider extends React.Component{
  public render() {
    return (
        <section className={servicesS['services-slider']}>
            <div className={servicesS['services-slider-list']}>
                <div className={main['wrapper-overlay']}>
                    <div className={main['overlay-effect']}/>
                    <div className={`${servicesS['services-slide']} ${servicesS['sr-sl-1']}`}>
                        <div className={`${servicesS['services-slide-text']} ${main['container']}`}>
                            <div className={servicesS['services-slide-title']}>Название услуи будет тут</div>
                            <div className={servicesS['services-slide-descr']}>То есть, картинки должны меняться вместе с услугами.
                                Плюс,<br/>
                                    так же как и на сайте банка должны быть кружочки, нажав на<br/>
                                    который можно выбрать нужную картинку.
                            </div>
                        </div>
                    </div>
                    <div className={servicesS['services-slider-nav']}>
                        <div className={servicesS['services-slider-prev']}/>
                        <div className={servicesS['services-slider-next']}/>
                    </div>
                    <div className={servicesS['services-slider-dots']}>
                        <div className={`${servicesS['services-slider-dot']} ${servicesS['active']}`}/>
                        <div className={servicesS['services-slider-dot']}/>
                        <div className={servicesS['services-slider-dot']}/>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
