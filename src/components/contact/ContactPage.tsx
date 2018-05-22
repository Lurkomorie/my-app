import * as React from 'react';
import { GoogleMap,Marker, withGoogleMap,withScriptjs} from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap((props:any) =>
    <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 59.9385, lng: 30.3701 }}
    >
    <Marker position={{ lat: 59.9385, lng: 30.3701 }}
            icon={require('../../img/ballon.png')}
        />
    </GoogleMap>
))

export default class ContactPage extends React.Component {
  public render() {
    return (
        <div>
            <section className="contacts">
                <div className="container">
                    <div className="breadcrumbs">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-item">
                                <a href="#" className="breadcrumbs-link">Главная</a>
                            </li>
                            <li className="breadcrumbs-item">
                                <span className="breadcrumbs-link">Контакты</span>
                            </li>
                        </ul>
                    </div>
                    <div className="contacts-title">Контакты</div>
                    <div className="contacts-item contacts-adress">
                        <b>Офис:</b>
                        <p>г. Санкт-Петербург, Греческий проспект, дом 29</p>
                    </div>
                    <div className="contacts-item contacts-phone"><b>+7 (812) 640-80-18</b></div>
                    <div className="contacts-item contacts-mail"><b>info@worldcafe.ru</b></div>
                </div>
            </section>

            <section className = 'map' >
                <MyMapComponent googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `470px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}/>
            </section>
        </div>

    )
  }
}
