import React from 'react';
import './index-page.component.css'
import './index-page.component.responsive.css';
import {dopDots} from '../../component/dopdots/dopdots.component'
import IconWithDescription from  '../../component/icon-with-description/icon-with-description.component'
import ServiceAnimation from '../../component/service-animation/service-animation.component';
import TeamBanner from '../../component/team-banner/team-banner.component'
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import BlogFooter from "../../component/blog-footer/blog-footer.component";
import BaninabLoading from "../../component/baninab-loading/baninab-loading.componenet"
import { t , currentLanguage , changeCurrentLanguage } from "../../translate/translate-service/translate-service"

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      googleMapLoad : false,
      loading: 'active-loading',
      currentLanguageState : 'fa',
    }
  }
  intervalStart = null;
  changeLanguageHandleClick(toChangeLanguage) {
    if (currentLanguage !== toChangeLanguage) {  
      window.location.replace(`#/${toChangeLanguage}`);
      setTimeout(() => {
        window.location.reload();
      }, 250);
  }
}
  headerInterval() {
    const titleTimeOut = 1250;
    const HeaderAnimationFunction = function() {
      document
            .querySelector('.full-height-page .main-section-container .first-page-container-content .main-co' +
                'ntent .website-slogan-container h2 span:nth-child(2)')
            .classList
            .add('title-animation-joan-leon');
        setTimeout(() => {
            document
                .querySelector('.full-height-page .main-section-container .first-page-container-content .main-co' +
                    'ntent .website-slogan-container h2 span:nth-child(2)')
                .classList
                .remove('title-animation-joan-leon');
            document
                .querySelector('.full-height-page .main-section-container .first-page-container-content .main-co' +
                    'ntent .website-slogan-container h2 span:nth-child(4)')
                .classList
                .add('title-animation-joan-leon');
        }, titleTimeOut);
        setTimeout(() => {
            document
                .querySelector('.full-height-page .main-section-container .first-page-container-content .main-co' +
                    'ntent .website-slogan-container h2 span:nth-child(4)')
                .classList
                .remove('title-animation-joan-leon');
            document
                .querySelector('.full-height-page .main-section-container .first-page-container-content .main-co' +
                    'ntent .website-slogan-container h2 span:nth-child(6)')
                .classList
                .add('title-animation-joan-leon');
        }, titleTimeOut * 2);
        setTimeout(() => {
            document
                .querySelector('.full-height-page .main-section-container .first-page-container-content .main-co' +
                    'ntent .website-slogan-container h2 span:nth-child(6)')
                .classList
                .remove('title-animation-joan-leon');
        }, titleTimeOut * 3);
      };
    
  return setInterval(HeaderAnimationFunction, titleTimeOut * 5);
  
  }
  render() {
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 35.745066, lng: 51.451244 }}
        defaultOptions={{ mapTypeControl: false, streetViewControl:false,styles: [{
                  elementType: "geometry",
                  stylers: [{
                      color: "#121a1c"
                  }]
              }, {
                  elementType: "labels.icon",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  elementType: "labels.text.fill",
                  stylers: [{
                      color: "#757575"
                  }]
              }, {
                  elementType: "labels.text.stroke",
                  stylers: [{
                      color: "#212121"
                  }]
              }, {
                  featureType: "administrative",
                  elementType: "geometry",
                  stylers: [{
                      color: "#757575"
                  }]
              }, {
                  featureType: "administrative.country",
                  elementType: "labels.text.fill",
                  stylers: [{
                      color: "#9e9e9e"
                  }]
              }, {
                  featureType: "administrative.land_parcel",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "administrative.locality",
                  elementType: "labels.text.fill",
                  stylers: [{
                      color: "#bdbdbd"
                  }]
              }, {
                  featureType: "poi",
                  elementType: "labels.text.fill",
                  stylers: [{
                      color: "#757575"
                  }]
              }, {
                  featureType: "poi.business",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "poi.park",
                  elementType: "geometry",
                  stylers: [{
                      color: "#181818"
                  }]
              }, {
                  featureType: "poi.park",
                  elementType: "labels.text",
                  stylers: [{
                      visibility: "off"
                  }]
              }, {
                  featureType: "poi.park",
                  elementType: "labels.text.fill",
                  stylers: [{
                      color: "#616161"
                  }]
              }, {
                  featureType: "poi.park",
                  elementType: "labels.text.stroke",
                  stylers: [{
                      color: "#1b1b1b"
                  }]
              }, {
                  featureType: "road",
                  elementType: "geometry.fill",
                  stylers: [{
                      color: "#2c2c2c"
                  }]
              }, {
                  featureType: "road",
                  elementType: "labels.text.fill",
                  stylers: [{
                      color: "#8a8a8a"
                  }]
              }, {
                  featureType: "road.arterial",
                  elementType: "geometry",
                  stylers: [{
                      color: "#373737"
                  }]
              }, {
                  featureType: "road.highway",
                  elementType: "geometry",
                  stylers: [{
                      color: "#3c3c3c"
                  }]
              }, {
                  featureType: "road.highway.controlled_access",
                  elementType: "geometry",
                  stylers: [{
                      color: "#4e4e4e"
                  }]
              }, {
                  featureType: "road.local",
                  elementType: "labels.text.fill",
                  stylers: [{
                      color: "#616161"
                  }]
              }, {
                  featureType: "transit",
                  elementType: "labels.text.fill",
                  stylers: [{
                      color: "#757575"
                  }]
              }, {
                  featureType: "water",
                  elementType: "geometry",
                  stylers: [{
                      color: "#000000"
                  }]
              }, {
                  featureType: "water",
                  elementType: "labels.text.fill",
                  stylers: [{
                      color: "#3d3d3d"
                  }]
              }] }}>
        <Marker
          icon={{url: "img/location.png"}}
          position={{ lat: 35.745066, lng: 51.451244 }}
        />
      </GoogleMap>
    ));
    const googleMapsRender = this.state.googleMapLoad ?                       <MapWithAMarker
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCD2w_ZcYlDJYj_lDNhq3FMiQI4E94Dpt8&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `375px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  /> : '';
    return(
<div>
    <BaninabLoading loading={this.state.loading} />
        <section id="HomePage" className="full-height-page first-page main-section dark-section">
          <div className="main-section-container website-container">
            <canvas className="dopdots dopdotsSelector_1" data-margin={25} data-moveradius={50} data-type="grid" data-elementformousemove=".full-height-page .main-section-container .first-page-container-content" data-animationdelaytime={500} data-movespeed={220} data-elementsize={1} data-color="#2e4250" />
            <div className="first-page-container-content">
              <ul className="menu-list">
                <li className="menu-item front-section">
                  <a>{t('header__menu__homePage')}</a>
                </li>
                <li className="menu-item service-section">
                  <a>{t('header__menu__service')}</a>
                </li>
                <li className="menu-item solution-section">
                  <a>{t('header__menu__solution')}</a>
                </li>
                <li className="menu-item about-section">
                  <a>{t('header__menu__about')}</a>
                </li>
                <li className="menu-item contact-section">
                  <a>{t('header__menu__contact')}</a>
                </li>
                <li className="menu-item blog">
                  <a href="/fa/blog" target="_blank" rel="noopener noreferrer">{t('header__menu__blog')}</a>
                </li>
                <li className="menu-item jobs">
                  <a target="_blank" href="/jobs">{t('header__menu__jobs')}</a>
                </li>
              </ul>
              <div className="first-page-header ui grid">
                <div className="right floated right aligned eight wide column">
                  <div className="logo-container">
                    <div className="baninab-logo">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 265" style={{enableBackground: 'new 0 0 300 265'}} xmlSpace="preserve">
                        <path fill="#0b432d" d="M74.7,16c0,0,6.8-6.8,23.2-5.8s23.2,5.8,23.2,5.8s11.6,3.9,23.2,16.4C156,45,155,56.6,155,56.6
	s1,13.5-10.6,20.3c-11.6,6.8-22.3,5.8-28.1,4.8c-5.8-1-14.5-1.9-25.2-8.7S76.7,62.4,70.9,54.7s-8-17.5-5.8-25.2
	C67,22.8,74.7,16,74.7,16z" />
                        <path fill="#0b432d" d="M177.3,5.4c0,0,9.7-2.9,23.2,4.8s19.4,21.3,19.4,21.3s5.8,11.6,1.9,22.3s-13.5,12.6-13.5,12.6
	s-12.6,3.9-26.1-4.8s-18.4-21.3-18.4-21.3s-5.8-11.6-1.9-21.3S171.5,6.3,177.3,5.4z" />
                        <path fill="#0b432d" d="M236.3,66.3c0,0,5.8-16.4,24.2-10.6s20.3,23.2,20.3,26.1c0,2.9,1.9,12.6-8.7,20.3c-10.6,7.7-23.2-1-23.2-1
	s-6.8-3.9-10.6-12.6S234.4,75,236.3,66.3z" />
                        <path fill="#0b432d" d="M265.3,120.5c0,0,7.7-7.7,19.4-1s10.6,21.3,10.6,21.3s1,11.6-8.7,19.4s-20.3,0-20.3,0s-8.7-5.8-9.7-18.4
	C255.7,129.2,265.3,120.5,265.3,120.5z" />
                        <path fill="#0b432d" d="M241.2,177.6c0,0,8.7-10.6,21.3-7.7c12.6,2.9,16.4,13.5,16.4,13.5s6.8,14.5-3.9,27.1s-24.2,8.7-24.2,8.7
	s-10.6-1-15.5-14.5C230.5,191.1,240.2,178.6,241.2,177.6z" />
                        <path fill="#0b432d" d="M176.3,211.5c0,0,14.5-14.5,32.9-12.6c18.4,1.9,22.3,14.5,22.3,14.5s7.7,15.5-8.7,33.9c0,0-9.7,9.7-21.3,11.6
	c-11.6,1.9-18.4,0-18.4,0s-8.7-1.9-13.5-8.7c-4.8-6.8-5.8-14.5-3.9-20.3C167.6,224,168.6,219.2,176.3,211.5z" />
                        <path fill="#179d5a" d="M232.4,111.8c-5.8-10.6-19.4-17.4-19.4-17.4s-7.7-4.8-22.3-4.8s-24.2,7.7-24.2,7.7s-12.6,7.7-16.4,20.3
	c-3.9,12.6-1.9,20.3-1.9,20.3s1,6.8,2.9,10.6c1.9,3.9,1.9,10.6,1.9,10.6c0.6,10.4-5.4,14.3-10.4,15.7c-1.6,0.5-3.2,0.7-4.3,0.8
	c-0.1,0-0.3,0.1-0.4,0.1c-0.2,0.1-0.3,0.1-0.5,0.1h-0.7c-0.1,0-0.2,0-0.3,0h-0.1c-0.2,0.1-0.4,0.1-0.6,0.1l0,0c-0.1,0-0.2,0-0.4,0
	c-0.1,0-0.1,0-0.2,0c-3.6,0.5-10.3-0.3-10.3-0.3c-7.7-1.9-15.5-1.9-15.5-1.9c-14.5,1-23.2,5.8-30,9.7s-18.4,14.5-21.3,31
	c-2.9,16.4,7.7,26.1,7.7,26.1s10.6,12.6,33.9,12.6s39.7-18.4,39.7-18.4c7.1-6,9.9-14.1,10.9-20c0.1-1.2,0.1-2.2,0.2-3.4
	c0-2-0.1-4-0.1-6c-0.1-0.3-0.1-0.5-0.1-0.8c0,0.5,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c0-0.2-0.1-0.4-0.1-0.6
	c-0.7-4.6-0.1-10.1-0.1-10.1c1-7.7,5.8-12.6,5.8-12.6c0.4-0.6,1-1.2,1.6-1.6c0,0,0,0,0.1-0.1s0.3-0.2,0.5-0.3c0.7-0.6,1.5-1,2.2-1.3
	l0,0c2.4-1.3,5-1.9,7.6-2.3c2.9-0.6,5.9-1.1,8.8-0.9c0.7-0.1,1.4,0,2,0.2c1.2,0.1,2.3,0.3,3.4,0.7c0.6,0.1,1.1,0.3,1.5,0.4
	c0.1,0,0.3,0,0.4,0.1c2.5,0.8,5.1,1.2,7.6,1.5c4.3,0.2,8.6-0.2,8.6-0.2s4.8,0,14.5-3.9s14.5-10.6,14.5-10.6
	c1.9-1.9,10.6-12.6,10.6-26.1S232.4,111.8,232.4,111.8z M112.2,222.7c-7.5,5-16.4,4.7-20-0.7c-3.6-5.3-0.5-13.7,7-18.8
	c7.5-5,16.4-4.7,20,0.7C122.8,209.2,119.7,217.6,112.2,222.7z M196.6,150.5c-9.1,0-16.4-7-16.4-15.5s7.4-15.5,16.4-15.5
	c9.1,0,16.4,7,16.4,15.5S205.7,150.5,196.6,150.5z" />
                        <path fill="#0b432d" d="M110.5,108.9c0,0-8.7-12.6-20.3-17.4s-21.3-6.8-39.7-6.8c-15.8,0-30.9,10-34.7,12.8c-0.4,0.5-0.9,0.8-1.4,1.2
	c-0.1,0.1-0.1,0.1-0.2,0.2c-0.2,0.3-0.4,0.5-0.7,0.7c-11.2,12.1-9.5,22-9.5,22s-1,5.8,6.8,16.4c6.9,9.5,18.4,15.1,20.8,16.3
	c0.6,0.2,1.1,0.4,1.5,0.7c1,0.4,1.9,0.8,2.9,1.2c1.2,0.4,2.3,0.9,3.5,1.3c1,0.3,2,0.6,3,0.8c1.5,0.2,2.9,0.6,4.4,1.1
	c0.1,0,0.2,0,0.2,0.1c5.4,0.8,10.2,1.1,10.2,1.1c11.6,1.9,26.1-2.9,26.1-2.9c8.7-1.9,17.4-8.7,17.4-8.7c5.8-3.9,8.7-8.7,8.7-8.7
	C121.2,122.4,110.5,108.9,110.5,108.9z" />
                      </svg>
                    </div>
                    <h1 className="baninab-logo-type">
                      {t('header__websiteTitle')}
                    </h1>
                  </div>
                </div>
                <div className="left floated left aligned six wide column">
                <div className="trc-btn light-btn change-language-button" onClick={()=> this.changeLanguageHandleClick(t('global__lang__item'))}>
                    <span className="title-in-trc">{t('global__lang__text')}</span>
                  </div>

                  <div className="trc-btn light-btn left-sidebar-menu-icon">
                    <span className="icon-in-trc">
                      <svg version="1.1" id="Menu_Arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 125 130" style={{enableBackground: 'new 0 0 125 130'}} xmlSpace="preserve">
                        <g>
                          <rect y={13} className="st0 top" width={125} height={14} />
                          <rect y={58} className="st0 center" width={125} height={14} />
                          <rect y={103} className="st0 bottom" width={125} height={14} />
                        </g>
                      </svg>
                    </span>
                    <span className="title-in-trc">{t('header__menuText')}</span>
                  </div>
                </div>
              </div>
              <div className="main-content">
                <div className="website-slogan-container">
                  <h2>
                    <span>{t('homePage__title__0')}</span>
                    <span>{t('homePage__title__1')}</span>{t('global__Virgol')}
                    <span>{t('homePage__title__2')}</span>
                    <span>{t('homePage__title__3')}</span>{t('global__Virgol')}
                    <span>{t('homePage__title__4')}</span>
                    <span>{t('homePage__title__5')}</span>
                  </h2>
                  <h3>
                      {t('homePage__description')}
                  </h3>
                </div>
              </div>
              <div className="next-page">
                <div className="trc-btn light-btn go-to-how-we-work">
                  <span className="title-in-trc">{t('global__learnMore')}</span>
                  <span className="icon-in-trc">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 32" style={{enableBackground: 'new 0 0 50 32'}} xmlSpace="preserve">
                      <path fill="#fff" d="M47.5,3.3c-2-2-5-2-6.8,0l-16,16l-16-16c-2-2-5-2-6.8,0s-2,5,0,6.8l19.4,19.4c0.9,0.9,2.2,1.4,3.4,1.4
                           c1.3,0,2.5-0.5,3.4-1.4l19.4-19.4C49.5,8.3,49.5,5.1,47.5,3.3z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ServicePage" className="service-page main-section dark-section">
          <div className="main-section-container website-container">
            <canvas className="dopdots dopdotsSelector_2" data-margin={25} data-type="grid" data-elementsize={1} data-color="#283337" />
            <div className="page-title-container">
              <div className="page-title-text-container">
                <h4>{t('Header__Services__1')}</h4>
                <h6>{t('SubHeader__Services')}</h6>
              </div>
            </div>
            <div className="service-page-content ui grid">
              <div className="right floated right aligned six wide column service-description">
                <div className="column each-service">
                  <h5>{t('SubSubHeader__Services__1')}</h5>
                  <p>{t('SubSubHeader__Services__1__p')}</p>
                </div>
                <div className="column each-service">
                  <h5>{t('SubSubHeader__Services__2')}</h5>
                  <p>{t('SubSubHeader__Services__2__p')}</p>
                </div>
                <div className="column each-service">
                  <h5>{t('global__header__menu__solution')}</h5>
                  <p>{t('SubSubHeader__Services__3__p')}</p>
                </div>
              </div>
              <div className="left floated right aligned six wide column service-introduction-section">
                <ServiceAnimation />
              </div>
            </div>
          </div>
        </section>
        <section id="SolutionPage" className="solution-page main-section dark-section">
          <div className="main-section-container website-container">
            <canvas className="dopdots dopdotsSelector_3" data-margin={25} data-type="grid" data-elementsize={1} data-color="#283337" />
            <canvas className="dopdots dopdotsSelector_4 lineY" width={5} data-margin={25} data-elementsize={1} data-type="line" data-color="#445156" data-manifest="{&quot;lineDirection&quot; : &quot;y&quot;,&quot;startPoint&quot; : {&quot;x&quot; : 1 , &quot;y&quot; : 1} , &quot;endPoint&quot; : &quot;fullHeight&quot;}" />
            <canvas className="dopdots dopdotsSelector_5 lineX InOneRow" style={{opacity:0}} data-margin={25} data-elementsize={1} data-type="line" data-color="#445156" data-manifest="{&quot;lineDirection&quot; : &quot;x&quot;,&quot;startPoint&quot; : {&quot;x&quot; : 19 , &quot;y&quot; : 400} , &quot;endPoint&quot; : &quot;fullWidth&quot;}" />
            <canvas className="dopdots dopdotsSelector_6 lineX InTwoRow" data-margin={25} data-elementsize={1} data-type="line" data-color="#445156" data-manifest="{&quot;lineDirection&quot; : &quot;x&quot;,&quot;startPoint&quot; : {&quot;x&quot; : 19 , &quot;y&quot; : 463} , &quot;endPoint&quot; : &quot;fullWidth&quot;}" />
            <div className="page-title-container">
              <div className="page-title-text-container">
                <h4>{t('Header__Solutions')}</h4>
                <h6>{t('SubHeader__About')}</h6>
              </div>
            </div>
            <div className="solution-page-content ui two column centered grid">
              <div className="each-solution column right aligned clearfix">
                <div className="each-solution-container">
                  <h5>{t('SubSubHeader__Solutions__1')}</h5>
                  <p>{t('SubSubHeader__Solutions__1__p')}</p>
                  <a href={`/#/${currentLanguage}/home-security`} target="_blank" className="trc-btn light-btn go-to-solution-modal">
                    <span className="title-in-trc">{t('global__learnMore')}</span>
                    <span className="icon-in-trc">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" version="1.1" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality'}} viewBox="0 0 0.302 0.6425000000000001" x="0px" y="0px" fillRule="evenodd" clipRule="evenodd">
                        <path className="fil0" fill="#ffffff" d="M0.289 0.077c0.017,-0.018 0.017,-0.046 0,-0.064 -0.018,-0.017 -0.046,-0.017 -0.064,0l-0.212 0.212c-0.017,0.018 -0.017,0.046 0,0.064l0.212 0.211c0.018,0.018 0.046,0.018 0.064,0 0.017,-0.017 0.017,-0.046 0,-0.063l-0.181 -0.18 0.181 -0.18z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="each-solution column right aligned clearfix">
                <div className="each-solution-container">
                  <h5>{t('SubSubHeader__Solutions__2')}</h5>
                  <p>{t('SubSubHeader__Solutions__2__p')}</p>
                  <a className="trc-btn light-btn go-to-solution-modal" target="_blank" href={`/#/${currentLanguage}/datacenter-monitoring`}>
                    <span className="title-in-trc">{t('global__learnMore')}</span>
                    <span className="icon-in-trc">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" version="1.1" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality'}} viewBox="0 0 0.302 0.6425000000000001" x="0px" y="0px" fillRule="evenodd" clipRule="evenodd">
                        <path className="fil0" fill="#ffffff" d="M0.289 0.077c0.017,-0.018 0.017,-0.046 0,-0.064 -0.018,-0.017 -0.046,-0.017 -0.064,0l-0.212 0.212c-0.017,0.018 -0.017,0.046 0,0.064l0.212 0.211c0.018,0.018 0.046,0.018 0.064,0 0.017,-0.017 0.017,-0.046 0,-0.063l-0.181 -0.18 0.181 -0.18z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="each-solution column right aligned clearfix">
                <div className="each-solution-container">
                  <h5>{t('SubSubHeader__Solutions__3')}</h5>
                  <p>{t('SubSubHeader__Solutions__3__p')}</p>
                  <a href={`/#/${currentLanguage}/bts-monitoring`} target="_blank" className="trc-btn light-btn go-to-solution-modal">
                    <span className="title-in-trc">{t('global__learnMore')}</span>
                    <span className="icon-in-trc">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" version="1.1" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality'}} viewBox="0 0 0.302 0.6425000000000001" x="0px" y="0px" fillRule="evenodd" clipRule="evenodd">
                        <path className="fil0" fill="#ffffff" d="M0.289 0.077c0.017,-0.018 0.017,-0.046 0,-0.064 -0.018,-0.017 -0.046,-0.017 -0.064,0l-0.212 0.212c-0.017,0.018 -0.017,0.046 0,0.064l0.212 0.211c0.018,0.018 0.046,0.018 0.064,0 0.017,-0.017 0.017,-0.046 0,-0.063l-0.181 -0.18 0.181 -0.18z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="each-solution column right aligned clearfix">
                <div className="each-solution-container">
                  <h5>{t('SubSubHeader__Solutions__4')}</h5>
                  <p>{t('SubSubHeader__Solutions__4__p')}</p>
                  <a href={`/#/${currentLanguage}/alarm-system`} target="_blank" className="trc-btn light-btn go-to-solution-modal">
                    <span className="title-in-trc">{t('global__learnMore')}</span>
                    <span className="icon-in-trc">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" version="1.1" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality'}} viewBox="0 0 0.302 0.6425000000000001" x="0px" y="0px" fillRule="evenodd" clipRule="evenodd">
                        <path className="fil0" fill="#ffffff" d="M0.289 0.077c0.017,-0.018 0.017,-0.046 0,-0.064 -0.018,-0.017 -0.046,-0.017 -0.064,0l-0.212 0.212c-0.017,0.018 -0.017,0.046 0,0.064l0.212 0.211c0.018,0.018 0.046,0.018 0.064,0 0.017,-0.017 0.017,-0.046 0,-0.063l-0.181 -0.18 0.181 -0.18z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="customers-section" style={{display: 'none'}}>
              <div className="customers-section-title">
                <h6>شرکت‌هایی که به ما اعتماد کرده‌اند</h6>
                <canvas className="dopdots dopdotsSelector_7 titleLineX" height={50} data-margin={25} data-elementsize={1} data-type="line" data-color="#445156" data-manifest="{&quot;lineDirection&quot; : &quot;x&quot;,&quot;startPoint&quot; : {&quot;x&quot; : 12.5 , &quot;y&quot; : 7} , &quot;endPoint&quot; : &quot;fullWidth&quot;}" />
              </div>
              <div className="customers-content">
              </div>
            </div>
          </div>
        </section>
        <section id="AboutPage" className="about-page main-section dark-section">
          <div className="main-section-container website-container">
            <canvas className="dopdots dopdotsSelector_8" data-margin={25} data-type="grid" data-elementsize={1} data-color="#283337" />
            <div className="page-title-container">
              <div className="page-title-text-container">
                <h4>{t('header__menu__about')}</h4>
                <h6>{t('SubHeader__About')}</h6>
              </div>
            </div>
            <div className="about-company-paragraph">
              <p>
                {t('SubHeader__About__p')}
              </p>
            </div>
            <div className="technologies-that-we-use">
              <div className="technologies-that-we-use-title">
                <h6>{t('SubSubHeader_About__1')}</h6>
                <canvas className="dopdots dopdotsSelector_9 titleLineX" height={50} data-margin={25} data-elementsize={1} data-type="line" data-color="#515a5c" data-manifest="{&quot;lineDirection&quot; : &quot;x&quot;,&quot;startPoint&quot; : {&quot;x&quot; : 12.5 , &quot;y&quot; : 7} , &quot;endPoint&quot; : &quot;fullWidth&quot;}" />
              </div>
              <div className="technologies-that-we-use-content">
                <IconWithDescription imgSrc="img/java.png" width={170} height={170} title="Java" />
                <IconWithDescription imgSrc="img/elastic.png" width={170} height={170} title="ElasticSearch" />
                <IconWithDescription imgSrc="img/mongodb.png" width={170} height={170} title="MongoDB" />
                <IconWithDescription imgSrc="img/hazelcast.png" width={170} height={170} title="Hazelcast" />
                <IconWithDescription imgSrc="img/spring.png" width={170} height={170} title="spring" />
                <IconWithDescription imgSrc="img/docker.png" width={170} height={170} title="Docker" />
                <IconWithDescription imgSrc="img/kubernetes.png" width={170} height={170} title="Kubernetes" />
                <IconWithDescription imgSrc="img/karma.png" width={170} height={170} title="Karma" />
                <IconWithDescription imgSrc="img/reactiveX.png" width={170} height={170} title="ReactiveX" />
                <IconWithDescription imgSrc="img/angular.png" width={170} height={170} title="Angular" />
                <IconWithDescription imgSrc="img/d3.png" width={170} height={170} title="D3" />
                <IconWithDescription imgSrc="img/typescript.png" width={170} height={170} title="TypeScript" />
              </div>
            </div>
            <div className="trust-badge">
              <div className="trust-badge-title">
                <h6>نماد های اطمینان ما</h6>
                <canvas className="dopdots trust-badge-title-canvas titleLineX" height={50} data-margin={25} data-elementsize={1} data-type="line" data-color="#515a5c" data-manifest="{&quot;lineDirection&quot; : &quot;x&quot;,&quot;startPoint&quot; : {&quot;x&quot; : 12.5 , &quot;y&quot; : 10} , &quot;endPoint&quot; : &quot;fullWidth&quot;}" />
              </div>
              <div className="trust-badge-content">
                  <IconWithDescription imgSrc="img/nezam-senfi.png" href="img/nezam-senfi-certificate.jpg" width={200} height={200} title="سازمان نظام صنفی رایانه ای" />
                  <IconWithDescription imgSrc="img/informatics.png" href="img/informatics-certificate.jpg" width={200} height={200} title="شورای عالی انفورماتیک" />
                  <IconWithDescription imgSrc="img/otagh-bazargani.png" href="img/otagh-bazargani-certificate.jpg" width={200} height={200} title="اتاق بازرگانی، صنایع، معادن و کشاورزی ایران" />
                  <IconWithDescription imgSrc="img/brain.png" href="http://pub.daneshbonyan.ir/" width={200} height={200} title="دانش بنیان (معاونت علمی و فناوری ریاست جمهوری)" />
              </div>
            </div>
            {/* <div className="company-team">
            <div className="company-team-title">
                <h6>تیم ما</h6>
                <canvas className="dopdots company-team-title-canvas titleLineX" height={50} data-margin={25} data-elementsize={1} data-type="line" data-color="#515a5c" data-manifest="{&quot;lineDirection&quot; : &quot;x&quot;,&quot;startPoint&quot; : {&quot;x&quot; : 12.5 , &quot;y&quot; : 10} , &quot;endPoint&quot; : &quot;fullWidth&quot;}" />
              </div>
              <TeamBanner />
            </div> */}
          </div>
        </section>
        <section id="ContactPage" className="contact-page main-section" style={{backgroundImage: 'url("./img/contactBG.jpg")'}} >
          <canvas className="dopdots dopdots-contact-grid dopdotsSelector_10" width={2200} data-margin={25} data-type="grid" data-elementsize={1} data-color="#ffffff10"  style={{display: 'none'}} />
          <div className="main-section-container website-container">
            <div className="page-title-container">
              <div className="page-title-text-container">
                <h4>{t('header__menu__contact')}</h4>
                <h6>{t('SubHeader__contact')}</h6>
              </div>
            </div>
            <div className="contact-page-content clearfix">
              <div className="each-contact-way">
                <canvas className="dopdots dopdots-call-contact-way dopdotsSelector_11" data-margin={25} data-type="grid" data-elementsize={1} data-color="#ffffff2a" />
                <div className="each-contact-way-container">
                  <i className="contact-way-icon icon-phone" style={{backgroundImage: 'url("./img/phone.svg")'}} />
                  <h6>{t('SubHeader__contact__1')}</h6>
                  <div className="each-contact-way-description">
                    <span className="more-description">{t('SubHeader__contact__1__p')}</span>
                    <a className="each-contact-way-description-link call" href="tel:02122862342">+9821 - 22862342</a>
                    <a className="each-contact-way-description-link call" href="tel:09031557441">+98903 - 1557441</a>
                  </div>
                </div>
              </div>
              <div className="each-contact-way">
                <canvas className="dopdots dopdots-visit-contact-way dopdotsSelector_12" data-margin={25} data-type="grid" data-elementsize={1} data-color="#ffffff2a" />
                <div className="each-contact-way-container">
                  <div className="visit-us-modal basic-modal">
                    <div className="visit-us-modal-container website-container">
                      <div className="close-solution-modal">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve" width="512px" height="512px">
                          <path className="path0" d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249    C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306    C514.019,27.23,514.019,14.135,505.943,6.058z" fill="#0a181b" />
                          <path className="path1" d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636    c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z" fill="#0a181b" />
                        </svg>
                      </div>
                      <h5>{t('global__SubHeader__contact__2')}</h5>
                      <br />
                      <p>{t('Address')}</p>
                      <br />
                      <p>
                        {t('Zip__Code')}
                        :  ‌1661635914  
                      </p>
                      <br />
                      <p>{t('Metro__Station')}</p>
                      <br />
                      <p>{t('Taxi__Station')}</p>
                      <br />
                      {googleMapsRender}
                    </div>
                  </div>
                  <i className="contact-way-icon icon-phone" style={{backgroundImage: 'url("./img/eye.svg")'}} />
                  <h6>{t('global__SubHeader__contact__2')}</h6>
                  <div className="each-contact-way-description visit-us">
                    <span className="more-description">{t('SubHeader__contact__2__p')}</span>
                    <a className="each-contact-way-description-link" href="#" onClick={(e)=> {
                      e.preventDefault();
                      this.setState({googleMapLoad : true})
                      }}>{t('SubHeader__contact__3__p')}</a>
                  </div>
                </div>
              </div>
              <div className="each-contact-way">
                <canvas className="dopdots dopdots-email-contact-way dopdotsSelector_13" data-margin={25} data-type="grid" data-elementsize={1} data-color="#ffffff2a" />
                <div className="each-contact-way-container">
                  <i className="contact-way-icon icon-phone" style={{backgroundImage: 'url("./img/mail.svg")'}} />
                  <h6>{t('SubHeader__contact__3')}</h6>
                  <div className="each-contact-way-description">
                    <span className="more-description">{t('SubHeader__contact__4__p')}</span>
                    <a className="each-contact-way-description-link email" href="mailto:info@baninab.com">Info@Baninab.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BlogFooter />
      </div>
    )
  }
  componentWillUnmount() {
    clearInterval(this.intervalStart);
  }
  componentDidMount() {
    changeCurrentLanguage(this.props.lang);
    document.title = `${t('header__websiteTitle')} | ${t('header__menu__homePage')}`;  
    if (this.props.props.match.path === "/fa" || this.props.props.match.path === "/en") { //TODO : fix when change with react components 
      this.intervalStart = this.headerInterval();
      
    
        /* Set Full height for First page */
const fullHeightPageSelector = document.querySelector('.full-height-page');
fullHeightPageSelector.style.height = window.innerHeight + "px";
/* drop-down-icon animation */
const dropDownIconSelector = document.querySelector('.first-page-container-content .next-page .go-to-how-we-work .icon-in-trc');
// setInterval(function () {
//     dropDownIconSelector
//         .classList
//         .add('set-animation');
//     setTimeout(function () {
//         dropDownIconSelector
//             .classList
//             .remove('set-animation');
//     }, 500);
// }, 2500);

/* left sidebar menu icon event */
const leftSidebarMenuIconSelector = document.querySelector('.first-page-header .left-sidebar-menu-icon');
const menuListSelector = document.querySelector('.first-page-container-content .menu-list');
const firstPageHeaderSelector = document.querySelector('.first-page-container-content .first-page-header');
leftSidebarMenuIconSelector.addEventListener('click', function () {
    this.classList.toggle('active-menu-icon');
    menuListSelector.classList.toggle('active-menu-list');
    firstPageHeaderSelector.classList.toggle('active-menu-list');
});
/* set dopdots size for main page */
function pageOneSizeForCanvas() {
    const mainSectionContainerSelector = document.querySelector('.first-page-container-content');
    const mainSectionContainerCanvasSelector = document.querySelector('.full-height-page .main-section-container canvas');
    mainSectionContainerCanvasSelector.width = mainSectionContainerSelector.clientWidth;
    mainSectionContainerCanvasSelector.height = mainSectionContainerSelector.clientHeight;
    // TODO : fix  resize dopdots problem
}
pageOneSizeForCanvas();

function pageServiceSizeForCanvas() {

    const serviceSectionContainerSelector = document.querySelector('.service-page.main-section .main-section-container.website-container');
    const serviceSectionContainerCanvasSelector = document.querySelector('.service-page.main-section .main-section-container.website-container canvas');
    serviceSectionContainerCanvasSelector.width = serviceSectionContainerSelector.clientWidth;
    serviceSectionContainerCanvasSelector.height = serviceSectionContainerSelector.clientHeight;

    // TODO : fix  resize dopdots problem
}
pageServiceSizeForCanvas();

function pageSolutionSizeForCanvas() {

    const solutionSectionContainerSelector = document.querySelector('.solution-page.main-section .main-section-container.website-container');
    const solutionSectionContainerSelectorGrid = document.querySelector('.solution-page.main-section .main-section-container.website-container .solution-' +
            'page-content');
    const solutionSectionContainerCanvasSelector = document.querySelector('.solution-page.main-section .main-section-container.website-container canvas.dop' +
            'dotsSelector_3');
    const solutionSectionContainerCanvasLineYSelector = document.querySelector('.solution-page.main-section .main-section-container.website-container canvas.dop' +
            'dotsSelector_4');
    const solutionSectionContainerCanvasLineXTitleSelector = document.querySelector('.solution-page.main-section .main-section-container.website-container canvas.tit' +
            'leLineX');
    const solutionSectionContainerCanvasLineXSelector = document.querySelectorAll('.solution-page.main-section .main-section-container.website-container canvas.lin' +
            'eX');
    const solutionSectionCustomersTitle = document.querySelector('.solution-page .main-section-container.website-container .customers-section .cus' +
            'tomers-section-title h6');
    solutionSectionContainerCanvasSelector.width = solutionSectionContainerSelector.clientWidth;
    solutionSectionContainerCanvasSelector.height = solutionSectionContainerSelector.clientHeight;
    solutionSectionContainerCanvasLineXTitleSelector.width = solutionSectionContainerSelector.clientWidth - solutionSectionCustomersTitle.clientWidth - 35;
    solutionSectionContainerCanvasLineYSelector.height = solutionSectionContainerSelectorGrid.clientHeight;
    solutionSectionContainerCanvasLineXSelector.forEach(element => {
        element.width = solutionSectionContainerSelectorGrid.clientWidth - 25;
        element.height = solutionSectionContainerSelectorGrid.clientHeight;
    });
    // TODO : fix  resize dopdots problem
}
pageSolutionSizeForCanvas();

/* */
function pageAboutSizeForCanvas() {
    const aboutSectionContainerSelector = document.querySelector('.about-page.main-section .main-section-container.website-container');
    const aboutSectionContainerCanvasSelector = document.querySelector('.about-page.main-section .main-section-container.website-container canvas');
    const aboutSectionContainerAboutTitle = document.querySelector('.about-page.main-section .main-section-container.website-container .about-team .about-team-title h6');
    const badgsSectionContainerTitle = document.querySelector('.about-page .main-section-container .trust-badge .trust-badge-title h6');
    const technologiesSectionContainerTitleCanvasSelector = document.querySelector('.technologies-that-we-use canvas.titleLineX');
    aboutSectionContainerCanvasSelector.width = aboutSectionContainerSelector.clientWidth;
    aboutSectionContainerCanvasSelector.height = aboutSectionContainerSelector.clientHeight - 20;
    technologiesSectionContainerTitleCanvasSelector.width = aboutSectionContainerSelector.clientWidth - 300;
    // TODO : fix  resize dopdots problem
    const badgeSectionContainerTitleCanvasSelector = document.querySelector('.trust-badge canvas.titleLineX');
    badgeSectionContainerTitleCanvasSelector.width = aboutSectionContainerSelector.clientWidth - 170;

    // const companyTeamContainerTitleCanvasSelector = document.querySelector('.company-team canvas.titleLineX');
    // companyTeamContainerTitleCanvasSelector.width = aboutSectionContainerSelector.clientWidth - 50;
}

pageAboutSizeForCanvas();

/* */
function pageContactSizeForCanvas() {
    const contactSectionContainerSelector = document.querySelector('.contact-page.main-section');
    const contactSectionContainerCanvasSelector = document.querySelector('.contact-page.main-section canvas');
    const eachContentWaySelector = document.querySelectorAll('.contact-page .main-section-container .contact-page-content .each-contact-way');
    contactSectionContainerCanvasSelector.height = contactSectionContainerSelector.clientHeight;
    eachContentWaySelector.forEach(function (EachContentWaySelector) {
        EachContentWaySelector
            .querySelector('canvas')
            .width = EachContentWaySelector.clientWidth;
        EachContentWaySelector
            .querySelector('canvas')
            .height = EachContentWaySelector.clientHeight;
    });
    // TODO : fix  resize dopdots problem
}
pageContactSizeForCanvas();


const solutionModalCloseButtonSelectorAll = document.querySelectorAll('.close-solution-modal');
solutionModalCloseButtonSelectorAll.forEach(function (solutionModalCloseButton) {
    solutionModalCloseButton
        .addEventListener('click', function () {
            this
                .parentNode
                .parentNode
                .classList
                .remove('active-modal');
            document
                .querySelector('body')
                .classList
                .remove('modal-is-active');
        });
}, this);

for (var i = 1; i < 14; i++) {
    dopDots(document.querySelector('.dopdotsSelector_' + i + '').getContext('2d'));
}
/* resize */
window
    .addEventListener("resize", function () {
        setTimeout(() => {
            pageOneSizeForCanvas();
            pageServiceSizeForCanvas();
            pageSolutionSizeForCanvas();
            pageAboutSizeForCanvas();
            for (var i = 1; i < 14; i++) {
                dopDots(document.querySelector('.dopdotsSelector_' + i + '').getContext('2d'));
            }
        }, 200); // TODO : change to promise
        fullHeightPageSelector.style.height = window.innerHeight + "px";
    });

/*  */

const goToServicePageBtnSelector = document.querySelector('.full-height-page .main-section-container .first-page-container-content .next-pa' +
        'ge .go-to-how-we-work');
const servicePageSectionSelector = document.getElementById('ServicePage');
goToServicePageBtnSelector.addEventListener("click", function () {
    scrollIt(servicePageSectionSelector);
});

function scrollIt(element) {
    // window.scrollTo({'behavior': 'smooth', 'left': 0, 'top': element.offsetTop});
    if (window.scroll) {
      window.scroll({
        top: element.offsetTop,
        behavior: "smooth",
        left:0,
      });
    }
}

/* */

document
    .querySelector('.full-height-page .main-section-container .first-page-container-content .menu-li' +
            'st li.front-section a')
    .addEventListener("click", function () {
        scrollIt(document.getElementById('HomePage'));
    });

document
    .querySelector('.full-height-page .main-section-container .first-page-container-content .menu-li' +
            'st li.service-section a')
    .addEventListener("click", function () {
        scrollIt(document.getElementById('ServicePage'));
    });

document
    .querySelector('.full-height-page .main-section-container .first-page-container-content .menu-li' +
            'st li.solution-section a')
    .addEventListener("click", function () {
        scrollIt(document.getElementById('SolutionPage'));
    });

document
    .querySelector('.full-height-page .main-section-container .first-page-container-content .menu-li' +
            'st li.about-section a')
    .addEventListener("click", function () {
        scrollIt(document.getElementById('AboutPage'));
    });

document
    .querySelector('.full-height-page .main-section-container .first-page-container-content .menu-li' +
            'st li.contact-section a')
    .addEventListener("click", function () {
        scrollIt(document.getElementById('ContactPage'));
    });

    document
    .querySelector('.full-height-page .main-section-container .first-page-container-content .menu-li' +
            'st li.front-section a')
    .addEventListener("click", function () {
        scrollIt(document.getElementById('HomePage'));
    });

// window.addEventListener("scroll" , function() {     if (window.scrollY > 170)
// {         document.querySelector('.first-page-container-content
// .first-page-header').classList.add('fix-top-header');
// document.querySelector('.first-page-container-content
// .first-page-header').classList.add('website-container');
// document.querySelector('.first-page-container-content
// .menu-list').classList.add('fix-top-header');     } else {
// document.querySelector('.first-page-container-content
// .first-page-header').classList.remove('fix-top-header');
// document.querySelector('.first-page-container-content
// .first-page-header').classList.remove('website-container');
// document.querySelector('.first-page-container-content
// .menu-list').classList.remove('fix-top-header');     } });

// document.querySelector('.full-height-page .main-section-container .first-page-container-content .menu-li' +
// 'st li.jobs a').addEventListener('click' , () => {
//     document.querySelector('.jobs-modal.basic-modal').classList.add('active-modal');
//     document.querySelector('body').classList.add('modal-is-active');
// })
document.querySelector(".each-contact-way-description.visit-us .each-contact-way-description-link").addEventListener("click", e => {
  e.preventDefault();
    document.querySelector("body").classList.add("modal-is-active"),
    document.querySelector(".visit-us-modal").classList.add("active-modal")
});
    }
    window.addEventListener("load",()=> {
        this.setState({loading: 'page-loaded'});
    });
    /* badgs */
    dopDots(document.querySelector('.trust-badge-title-canvas').getContext('2d'));

    /* team */
    // dopDots(document.querySelector('.company-team-title-canvas').getContext('2d'));
  
  }
}
IndexPage.contextTypes = {
  router: PropTypes.object.isRequired
}
export default IndexPage;