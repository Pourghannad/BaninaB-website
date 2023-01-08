import React from 'react'
import axios from 'axios';
import './blog-single.component.css'
import WebService from '../../web-service/web-service.component'
import {dopDots} from '../dopdots/dopdots.component'
import PropTypes from 'prop-types';
import BaninabLoading from '../baninab-loading/baninab-loading.componenet'
import { currentLanguage , t } from "../../translate/translate-service/translate-service"
class BlogSingleArticle extends React.Component {
    constructor() {
        super();
        this.state = {
            SingleArticle: [],
            loading: 'active-loading'
        }
    }
    blogSingleArticlesMainGridCanvas() {
        const blogSingleArticlesCanvasSelector = document.querySelector('.dopdots-selector-blog-single-articles-main-grid');
        const blogSingleArticlesSectionSelector = document.querySelector('.blog-single-article .website-container');
        if (blogSingleArticlesSectionSelector && blogSingleArticlesCanvasSelector) {
            blogSingleArticlesCanvasSelector.width = blogSingleArticlesSectionSelector.clientWidth;
            blogSingleArticlesCanvasSelector.height = blogSingleArticlesSectionSelector.clientHeight;
            dopDots(blogSingleArticlesCanvasSelector.getContext('2d'));
        }
        window.addEventListener('resize', this.blogSingleArticlesMainGridCanvas);
        // if (document.querySelector('#root').clientHeight < window.innerHeight) {
        // document         .querySelector('.main-page-footer')         .classList
        // .add('fix-footer-bottom'); }
    }
    componentWillMount() {
        const WebServiceObject = new WebService();
        if (this.props.pageSlug) {
            axios
                .get(WebServiceObject.state.wordpressRestApiEndPoint + '/pages?slug=' + this.props.pageParams.articleSlug)
                .then(res => {
                    if (res.data.length !== 0) {
                        this.setState({SingleArticle: res.data, loading: 'page-loaded'});
                    } else {
                        this
                            .context
                            .router
                            .history
                            .push(`/${currentLanguage}/404`);

                    }
                })
                .catch((err) => {
                    this
                        .context
                        .router
                        .history
                        .push(`/${currentLanguage}/404`);
                });
        } else {
            axios
                .get(WebServiceObject.state.wordpressRestApiEndPoint + '/posts?slug=' + this.props.pageParams.articleSlug)
                .then(res => {
                    if (res.data.length !== 0) {
                        this.setState({SingleArticle: res.data, loading: 'page-loaded'});
                    } else {
                        this
                            .context
                            .router
                            .history
                            .push(`/${currentLanguage}/404`);
                    }
                })
                .catch((err) => {
                    this
                        .context
                        .router
                        .history
                        .push(`/${currentLanguage}/404`);
                });
        }
    }
    tagClickHandle(tagName) {
        this.context.router.history.push(`/blog/search/${tagName}`);
    }
    render() {
        const SingleArticleRender = this
            .state
            .SingleArticle
            .map((SingleArticle, i) => {
                let articleImage;
                let tagsList = [];
                let tagsListContainer;
                if (SingleArticle.post_tags) {
                    SingleArticle.post_tags.map((EachTag , index) => {
                        tagsList.push(
                            <a rel="tag" onClick={ () => this.tagClickHandle(EachTag.name)} key={index}>{EachTag.name}</a>
                        );
                    });

                    tagsListContainer = <div className="blog-single-tags-container">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style={{enableBackground: 'new 0 0 50 50'}} xmlSpace="preserve">
                        <path fill="#0d9c4d" d="M19.3,2H4.6C3.2,2,2,3.2,2,4.6v14.7c0,0.7,0.3,1.3,0.7,1.8l26.2,26.2c1,1,2.6,1,3.6,0l14.7-14.7
                            c1-1,1-2.6,0-3.6L21,2.7C20.6,2.3,19.9,2,19.3,2z M7.3,10.3c-0.3-1.8,1.3-3.2,3-3c1.1,0.2,2,1,2.1,2.1c0.3,1.8-1.3,3.2-3,3
                            C8.3,12.3,7.4,11.4,7.3,10.3z" />
                    </svg>
                        <div className="tags-list-container">
                        {tagsList}
                        </div>
                    </div>
                }
                if (SingleArticle.better_featured_image && SingleArticle.better_featured_image.media_details.sizes.single_page_image) {
                    articleImage = <div className="blog-single-article-image-container">
                        <div className="blog-single-article-image-container-border">
                            <img
                                src={SingleArticle.better_featured_image.media_details.sizes.single_page_image.source_url}
                                width={SingleArticle.better_featured_image.media_details.sizes.single_page_image.width}
                                height={SingleArticle.better_featured_image.media_details.sizes.single_page_image.height}
                                alt={SingleArticle.better_featured_image.alt_text}
                                title={SingleArticle.better_featured_image.caption}/>
                        </div>
                    </div>
                } else if (SingleArticle.better_featured_image) {
                    articleImage = <div className="blog-single-article-image-container image-low-size">
                        <div className="blog-single-article-image-container-border">
                            <img
                                src={SingleArticle.better_featured_image.source_url}
                                width={SingleArticle.better_featured_image.width}
                                height={SingleArticle.better_featured_image.height}
                                alt={SingleArticle.better_featured_image.alt_text}
                                title={SingleArticle.better_featured_image.caption}/>
                        </div>
                    </div>
                }

                return (
                    <div
                        className="blog-single-article-section-container element-on-canvas"
                        key={i}>
                        {articleImage}
                        <h1 className="blog-single-post-title">{SingleArticle.title.rendered}</h1>
                        <div
                            id="content"
                            className="blog-single-content"
                            dangerouslySetInnerHTML={{
                            __html: SingleArticle.content.rendered
                        }}></div>
                        {tagsListContainer}
                    </div>
                )
            });

        return(
            <section className="blog-single-article">
                <BaninabLoading loading={this.state.loading}/>
                <div className="website-container container-padding blog-container">
                    {SingleArticleRender}
                    <canvas
                        className="dopdots dopdots-selector-blog-single-articles-main-grid"
                        data-margin="25"
                        data-type="grid"
                        data-elementsize="1"
                        data-color="#243235"></canvas>
                </div>
            </section>
        )
    }
    componentDidUpdate() {
        let hideImagePromise = new Promise(function (resolve, reject) {
            const allImage = document.querySelectorAll('img.alignnone');
            allImage.forEach(img => {
                let eachImg = new Image();
                eachImg.src = img.currentSrc;
                eachImg.addEventListener('error', function () {
                    img.style.display = "none";
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
        if (this.state.SingleArticle[0].title.rendered) {
            document.title = `${t('header__websiteTitle')} | ${this.state.SingleArticle[0].title.rendered}`;
        }
    }
}
BlogSingleArticle.contextTypes = {
    router: PropTypes.object.isRequired
}
export default BlogSingleArticle