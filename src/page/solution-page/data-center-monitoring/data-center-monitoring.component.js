import React from 'react'
import PropTypes from 'prop-types';
import '../solution-page.component.css'
import {dopDots} from '../../../component/dopdots/dopdots.component';
import BaninabLoading from '../../../component/baninab-loading/baninab-loading.componenet'
import {Carousel} from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { t , changeCurrentLanguage } from "../../../translate/translate-service/translate-service"
class DatacenterMonitoring extends React.Component {
    constructor() {
        super();
        this.state = {
            SingleArticle: [],
            loading: 'active-loading'
        }
        window.addEventListener('resize', this.blogSingleArticlesMainGridCanvas);
        document.title = `${t('header__websiteTitle')} | ${t('SubSubHeader__Solutions__2')}`;
    }
    blogSingleArticlesMainGridCanvas() {
        const blogSingleArticlesCanvasSelector = document.querySelector('.dopdots-selector-blog-datacenter-monitoring-main-grid');
        const blogSingleArticlesSectionSelector = document.querySelector('.blog-single-article .website-container');
        if (blogSingleArticlesSectionSelector && blogSingleArticlesCanvasSelector) {
            blogSingleArticlesCanvasSelector.width = blogSingleArticlesSectionSelector.clientWidth;
            blogSingleArticlesCanvasSelector.height = blogSingleArticlesSectionSelector.clientHeight;
            dopDots(blogSingleArticlesCanvasSelector.getContext('2d'));
        }
        // if (document.querySelector('#root').clientHeight < window.innerHeight) {
        // document         .querySelector('.main-page-footer')         .classList
        // .add('fix-footer-bottom'); }
    }
    
    render() {
        changeCurrentLanguage(this.props.lang);
        return (
            <section className="blog-single-article">
                <BaninabLoading loading={this.state.loading}/>
                <div className="website-container container-padding blog-container">
                    <div className="solutuions-static-pages-content datacenter-monitoring">
                    <h1>{t('page__dcmon__title')}</h1>
                        <div className="main-introduction-section">
                            <img src="../img/dcmon-c-1.png" className="alignnone" alt="عکس" title="مانیتورینگ مراکز داده" />
                            <p>{t('page__dcmon__p__1')}</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="solutuions-content-slider-container">
                        <Carousel showArrows={true} showIndicators={true} autoPlay={true} transitionTime={400} interval={5000} infiniteLoop={true} showThumbs={false} showStatus={false}>
                            <div className="content-basic-image-box-container">
                                <p>{t('page__dcmon__slide__1__1')}</p>
                                <img src="../img/dcmon-c-2.png" className="alignnone" alt={t('global__image')} title={t('page__dcmon__slide__1__1')} />
                            </div>
                            <div className="content-basic-image-box-container">
                            <p>{t('page__dcmon__slide__1__2')}</p>
                            <img src="../img/dcmon-c-3.png" className="alignnone" alt={t('global__image')} title={t('page__dcmon__slide__1__2')} />
                        </div>
                        <div className="content-basic-image-box-container">
                            <p>{t('page__dcmon__slide__1__3')}</p>
                            <img src="../img/dcmon-c-4.png" className="alignnone" alt={t('global__image')} title={t('page__dcmon__slide__1__3')} />
                        </div>
                        <div className="content-basic-image-box-container">
                            <p>{t('page__dcmon__slide__1__4')}</p>
                            <img src="../img/dcmon-c-5.png" className="alignnone" alt={t('global__image')} title={t('page__dcmon__slide__1__4')} />
                        </div>
                        </Carousel>
                        </div>
                        <h3>{t('page__dcmon__between__sliders')}</h3>
                        <div className="dcmon-benefits-section-container solutuions-content-slider-container">
                        <Carousel showArrows={true} showIndicators={true} autoPlay={true} transitionTime={400} interval={5000} infiniteLoop={true} showThumbs={false} showStatus={false}>
                            <div className="each-benefit">
                                <p>{t('page__dcmon__slide__2__1')}</p>
                                <img src="../img/dcmon-c-6.png" className="alignnone" alt={t('global__image')} title={t('page__dcmon__slide__2__1')} />
                            </div>
                            <div className="each-benefit">
                                <p>{t('page__dcmon__slide__2__2')}</p>
                                <img src="../img/dcmon-c-7.png" className="alignnone" alt={t('global__image')} title={t('page__dcmon__slide__2__2')} />
                            </div>
                            <div className="each-benefit">
                                <p>{t('page__dcmon__slide__2__3')}</p>
                                <img src="../img/dcmon-c-8.png" className="alignnone" alt={t('global__image')} title={t('page__dcmon__slide__2__3')} />
                            </div>
                            <div className="each-benefit">
                                <p>{t('page__dcmon__slide__2__4')}</p>
                                <img src="../img/dcmon-c-9.png" className="alignnone" alt={t('global__image')} title={t('page__dcmon__slide__2__4')} />
                            </div>
                        </Carousel>
                        </div>

                    </div>
                    <canvas
                        className="dopdots dopdots-selector-blog-datacenter-monitoring-main-grid"
                        data-margin="25"
                        data-type="grid"
                        data-elementsize="1"
                        data-color="#243235"></canvas>
                </div>
            </section>
        )
    }
    componentDidMount() {
        // this.blogSingleArticlesMainGridCanvas();
        this.setState({
            loading : 'page-loaded'
        });
        let hideImagePromise = new Promise((resolve, reject) => {
            const allImage = document.querySelectorAll('img.alignnone');
            allImage.forEach(img => {
                let eachImg = new Image();
                eachImg.src = img.currentSrc;
                eachImg.addEventListener('error', () => {
                    // TODO : !!??
                });
                eachImg.addEventListener("load", () => {
                    setTimeout(() => {
                        resolve('done');
                    }, 650); // TODO : implement with other way
                });
            });
        });
        hideImagePromise.then(() => {
            this.blogSingleArticlesMainGridCanvas();
        });
    }
}
DatacenterMonitoring.contextTypes = {
    router: PropTypes.object.isRequired
}
export default DatacenterMonitoring;