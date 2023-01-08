import React from 'react'
import {dopDots} from '../dopdots/dopdots.component'
import './not-found.component.css'
import TrcButton from '../trc-button/trc-button.component'
import { t, changeCurrentLanguage, currentLanguage } from '../../translate/translate-service/translate-service';

class NotFound extends React.Component {
    constructor() {
        super();
        this.state = {
            SingleArticle: [],
            loading: 'active-loading',
            notFoundSectionHeight: 0
        }
        document.title = `${t('header__websiteTitle')} | ${t('notFound__title')}`;
    }
    render() {
        changeCurrentLanguage(this.props.lang)
        return (
            <div className="not-found-section">
                <div className="website-container container-padding blog-container">
                    <div className="not-found-content element-on-canvas">
                        <div className="not-found-element">
                            <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 400 150">
                                <g>
                                    <path
                                        className="st0"
                                        d="M114.4,12L110,29.8l-1.1,4.5l-4.4-1.8c-2.3-1-4.8-1.7-7.3-2.2c-2.5-0.5-5-0.7-7.6-0.7c-2.1,0-4.1,0.2-6,0.5
		c-1.9,0.3-3.5,0.9-5,1.5c-1.6,0.6-3,1.4-4.3,2.4c-5.9,4.4-9.9,11-11.8,19.9c0,0.3,0.1,0.5,0.3,0.7c5.4,5,13.7,7.6,25.1,7.7
		c3.5,0.1,7.6-0.3,12.2-1.2c4.3-0.8,8.3-2,12.3-3.6l4.9-2l0.7,5.3l2.4,18l0.4,3.1l-2.8,1.2c-9.1,4-18.8,6-29.1,6
		c-14.6-0.1-26.4-3-35.2-8.8c0.5,4.6,1,9.2,1.3,13.8c0.3,4.5,0.6,9.1,0.8,13.6c0.1,4.9,0.2,9.4,0.2,13.5v22.4v4.1h-4.1H33.3h-4.1
		v-4.1v-22.7C29.2,76.3,22.8,41,10,15.2L8,10.9l4.4-1.5l16.9-6l3.9-1.3L34.5,6c1.9,5.6,3.3,9.6,4.2,12.2c1.4,4.3,3,8.7,4.5,13.3
		c3.3-7.8,8-14.3,14.2-19.5c8.2-6.8,18-10.2,29.4-10.1c4.5,0,8.8,0.4,13,1.3c4.2,0.9,8.3,2.2,12.3,4l3.1,1.4L114.4,12z"/>
                                    <path
                                        className="st1"
                                        d="M170,57.8c0.6-0.5,1.2-1.1,1.9-1.6c0.6-0.5,1.2-1.1,1.9-1.6c0.6-0.5,1.3-1,2-1.4c2-1.4,4.1-2.5,6.3-3.4
		c4.3-1.9,9-2.8,14-2.8c3.3,0,6.5,0.4,9.5,1.2c1,0.3,2,0.6,3,0.9c1,0.3,2,0.8,2.9,1.2c1,0.5,1.9,1,2.8,1.5c0.9,0.5,1.8,1.1,2.6,1.7
		c0.9,0.6,1.7,1.3,2.6,2c0.9,0.7,1.7,1.5,2.4,2.2c1.8,1.8,3.3,3.7,4.7,5.7c1.3,2,2.5,4.1,3.3,6.2c0.6,1.4,1.1,2.9,1.5,4.5
		c0.4,1.5,0.7,3.1,0.9,4.7c0.2,1.6,0.3,3.2,0.3,4.9c0,10-3.6,18.6-10.8,25.9c-1.8,1.8-3.7,3.3-5.7,4.6c-0.3,0.3-0.7,0.6-1.1,0.8
		c-0.4,0.3-0.8,0.5-1.2,0.8c-0.4,0.2-0.8,0.5-1.2,0.7s-0.8,0.4-1.3,0.6c-0.4,0.2-0.9,0.4-1.3,0.5c-0.8,0.3-1.5,0.6-2.3,0.9
		c-0.8,0.2-1.5,0.5-2.3,0.7c-0.8,0.2-1.5,0.4-2.3,0.5c-2.3,0.4-4.7,0.6-7.2,0.6c-5,0-9.7-0.9-14-2.7c-1.5-0.6-2.9-1.3-4.3-2.1
		c-1.3-0.8-2.7-1.7-4-2.6c-0.3-0.3-0.7-0.5-1-0.8c-0.3-0.3-0.6-0.5-0.9-0.8c-0.3-0.3-0.6-0.5-0.9-0.8c-0.3-0.3-0.6-0.5-0.9-0.8
		c-0.4-0.5-0.8-0.9-1.2-1.4c-0.4-0.4-0.8-0.9-1.2-1.3c-0.4-0.4-0.8-0.9-1.1-1.4c-0.3-0.5-0.7-1-1-1.5c-0.3-0.5-0.7-1-1-1.5
		c-0.3-0.5-0.6-1-0.9-1.5c-0.3-0.5-0.6-1-0.8-1.5c-0.3-0.5-0.5-1-0.7-1.6c-1.8-4.3-2.7-9-2.7-14c0-5,0.9-9.7,2.7-14.1
		C163.8,65.4,166.5,61.4,170,57.8z M183.7,83.9c0,0.8,0.1,1.5,0.2,2.1c0.1,0.7,0.2,1.3,0.4,1.9c0.2,0.6,0.4,1.2,0.7,1.8
		c0.3,0.6,0.7,1.1,1,1.6c0.4,0.5,0.8,1,1.3,1.5c1.2,1.2,2.6,2.2,4.1,2.8c1.5,0.6,3.2,0.9,5.1,0.9c3.6-0.1,6.6-1.3,9-3.7
		c0.6-0.6,1.1-1.3,1.6-1.9c0.4-0.7,0.8-1.4,1.2-2.1c0.5-1.4,0.8-3.1,0.8-4.8c0-1.8-0.3-3.4-0.8-4.9c-0.6-1.4-1.5-2.8-2.8-4
		c-0.3-0.3-0.7-0.7-1.1-1c-0.4-0.3-0.8-0.6-1.1-0.8c-0.4-0.2-0.8-0.5-1.2-0.7s-0.8-0.4-1.3-0.5c-0.4-0.1-0.9-0.3-1.4-0.4
		c-0.5-0.1-1-0.2-1.4-0.3c-0.5-0.1-1-0.1-1.5-0.1c-0.6,0-1,0-1.4,0.1c-0.4,0.1-0.8,0.1-1.2,0.2c-0.4,0.1-0.8,0.2-1.2,0.3
		c-0.4,0.1-0.7,0.2-1.1,0.4c-1.5,0.6-2.9,1.5-4.1,2.8s-2.1,2.6-2.7,4C184,80.4,183.7,82,183.7,83.9z"/>
                                    <path
                                        className="st2"
                                        d="M381,12l-4.4,17.8l-1.1,4.5l-4.4-1.8c-2.3-1-4.8-1.7-7.3-2.2c-2.5-0.5-5-0.7-7.6-0.7c-2.1,0-4.1,0.2-6,0.5
		c-1.9,0.3-3.5,0.9-5,1.5c-1.6,0.6-3,1.4-4.3,2.4c-5.9,4.4-9.9,11-11.8,19.9c0,0.3,0.1,0.5,0.3,0.7c5.4,5,13.7,7.6,25.1,7.7
		c3.5,0.1,7.6-0.3,12.2-1.2c4.3-0.8,8.3-2,12.3-3.6l4.9-2l0.7,5.3l2.4,18l0.4,3.1l-2.8,1.2c-9.1,4-18.8,6-29.1,6
		c-14.6-0.1-26.4-3-35.2-8.8c0.5,4.6,1,9.2,1.3,13.8c0.3,4.5,0.6,9.1,0.8,13.6c0.1,4.9,0.2,9.4,0.2,13.5v22.4v4.1h-4.1h-18.4h-4.1
		v-4.1v-22.7c0-44.8-6.4-80.1-19.2-105.9l-2.1-4.2l4.4-1.5l16.9-6l3.9-1.3l1.3,3.9c1.9,5.6,3.3,9.6,4.2,12.2c1.4,4.3,3,8.7,4.5,13.3
		c3.3-7.8,8-14.3,14.2-19.5c8.2-6.8,18-10.2,29.4-10.1c4.5,0,8.8,0.4,13,1.3c4.2,0.9,8.3,2.2,12.3,4l3.1,1.4L381,12z"/>
                                </g>
                            </svg>

                        </div>
                        <h3 className="not-found-description">{t('notFound')}</h3> {/* TODO : change title , when have server exception direct to this route */}
                        <TrcButton
                            clickable="link"
                            hrefLink={`/${currentLanguage}`}
                            className="goto-home-page"
                            buttonColor="light"
                            name={t('returnHome')}/>
                    </div>
                    <canvas
                        className="dopdots dopdots-selector-not-found"
                        data-margin={25}
                        data-type="grid"
                        data-elementsize={1}
                        data-color="#179d5a"></canvas>
                </div>
            </div>
        )
    }
    notFoundCanvasSetting() {
        const notFoundCanvasSelector = document.querySelector('.dopdots-selector-not-found');
        const notFoundSectionSelector = document.querySelector('.not-found-section .website-container');
        let notFoundComputeHeight = window.innerHeight - (document.querySelector('.blog-header').clientHeight + document.querySelector('.main-page-footer').clientHeight);
        document
            .querySelector('.not-found-section')
            .style
            .height = notFoundComputeHeight + 'px';
        if (notFoundSectionSelector && notFoundCanvasSelector) {
            notFoundCanvasSelector.width = notFoundSectionSelector.clientWidth;
            notFoundCanvasSelector.height = notFoundSectionSelector.clientHeight;
            dopDots(notFoundCanvasSelector.getContext('2d'));
        }
    }
    componentDidMount() {
        this.notFoundCanvasSetting();
        window.addEventListener('resize', () => {
            this.notFoundCanvasSetting();
        })
    }
}

export default NotFound;