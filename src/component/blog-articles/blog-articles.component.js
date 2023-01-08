import React from 'react'
import {dopDots} from '../dopdots/dopdots.component'
import PageTitle from '../page-title/page-title.component'
import "../../assets/semantic-ui-grid.css"
import {Grid} from 'semantic-ui-react'
import './blog-articles.component.css'
import WebService from '../../web-service/web-service.component'
import TrcButton from "../trc-button/trc-button.component"
import LeftArrowIcon from '../left-arrow-icon/left-arrow-icon.component'
import axios from 'axios';
import PropTypes from 'prop-types';
import BaninabLoading from '../baninab-loading/baninab-loading.componenet'
import {Link} from 'react-router-dom'
import { currentLanguage ,t } from "../../translate/translate-service/translate-service"
class BlogArticles extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: 'active-loading',
            listArticles: [],
            havePagination: false,
            articlesCount: 0,
            pageNumber: 1,
            postPerPage: 4,
            paginationLimit: 4,
            categoryName: ''
        }
    }
    blogArticlesMainGridCanvas() {
        const blogArticlesCanvasSelector = document.querySelector('.dopdots-selector-blog-articles-main-grid');
        const blogArticlesSectionSelector = document.querySelector('.blog-articles .website-container');
        if (blogArticlesSectionSelector && blogArticlesCanvasSelector) {
            blogArticlesCanvasSelector.width = blogArticlesSectionSelector.clientWidth;
            blogArticlesCanvasSelector.height = blogArticlesSectionSelector.clientHeight;
            dopDots(blogArticlesCanvasSelector.getContext('2d'));
        }
        window.addEventListener('resize', this.blogArticlesMainGridCanvas);
    }

    articlesService(PageNumberParam , PropsParam) {
        let categoryProps = PropsParam ? PropsParam.categorySlug : this.props.categorySlug;
        const WebServiceObject = new WebService();
        if (Boolean(this.props.categorySlug)) {
            axios
                .get(WebServiceObject.state.wordpressRestApiEndPoint + `/categories?slug=${categoryProps}`)
                .then(res => {
                    this.setState({categoryName: res.data[0].name})
                })
                .catch((err) => {
                    this
                        .context
                        .router
                        .history
                        .push(`/${currentLanguage}/404`);
                });
        }
        
        let postsEndPoint = (!this.props.categorySlug && !this.props.searchQuery)
            ? WebServiceObject.state.wordpressRestApiEndPoint + `/posts?page=${PropsParam ? PropsParam.pageNumber ? PropsParam.pageNumber : PageNumberParam : PageNumberParam}&per_page=${this.state.postPerPage}`
            : ((this.props.categorySlug)
                ? WebServiceObject.state.wordpressRestApiEndPoint + `/posts?filter[category_name]=${categoryProps}&page=${PropsParam ? PropsParam.pageNumber ? PropsParam.pageNumber : PageNumberParam : PageNumberParam}&per_page=${this.state.postPerPage}`
                : (this.props.searchQuery
                    ? WebServiceObject.state.wordpressRestApiEndPoint + `/posts?search=${this.props.searchQuery}&page=${PropsParam ? PropsParam.pageNumber ? PropsParam.pageNumber : PageNumberParam : PageNumberParam}&per_page=${this.state.postPerPage}`
                    : ``))
        axios
            .get(postsEndPoint)
            .then(res => {
                this.setState({
                    listArticles: res.data,
                    loading: 'page-loaded',
                    articlesCount: parseInt(res.headers['x-wp-total'] , 10),
                    havePagination: (res.data.length <= this.state.postPerPage)
                        ? true
                        : false,
                    pageNumber: this.props.pageNumber
                        ? this.props.pageNumber
                        : this.state.pageNumber
                });
                if (res.data.length === 0) {
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
    componentWillReceiveProps(nextProps) {        
       this.articlesService(this.state.pageNumber , nextProps);
       this.setState({loading : 'active-loading'})
        
    }
    componentWillMount() {
        this.setState({
            pageNumber: this.props.pageNumber
                ? this.props.pageNumber
                : 1
        })
    }
    render() {
        
        const listArticlesRender = this
            .state
            .listArticles
            .map((Article, i) => {
                let articlesImage;
                let articleCategories = [];
                for (let i = 0; i < Article.post_categories.length; i++) {
                    if (Article.post_categories[i].parent === 0) {
                        articleCategories.push(
                            <span key={i}>{Article.post_categories[i].name}</span>
                        );
                    }
                }
                if (Article.better_featured_image && Article.better_featured_image.media_details.sizes.medium_large) {
                    articlesImage = <div className="article-thumbnail-container" key={i}>
                        <span className="article-category-container">{articleCategories}</span>
                        <div
                            className="artcile-thumbnail-orginal"
                            style={{
                            backgroundImage: `url(${Article.better_featured_image.media_details.sizes.medium_large.source_url})`
                        }}></div>
                    </div>
                } else if (Article.better_featured_image) {
                    articlesImage = <div className="article-thumbnail-container" key={i}>
                        <span className="article-category-container">{articleCategories}</span>
                        <div
                            className="artcile-thumbnail-orginal"
                            style={{
                            backgroundImage: `url(${Article.better_featured_image.source_url})`
                        }}></div>
                    </div>
                }
                return (
                    <Grid.Column className="each-article" textAlign='right' floated='right' key={i} mobile={16} tablet={16} computer={8}>
                        <Link to={`/fa/blog/${Article.slug}`}>
                            <div className="each-article-container">
                                {articlesImage}
                                <div className="article-content-container">
                                    <h2 className="article-title">{Article.title.rendered}</h2>
                                    <div
                                        className="article-excerpt"
                                        dangerouslySetInnerHTML={{
                                        __html: Article.excerpt.rendered
                                    }}></div>
                                </div>
                                <TrcButton
                                    className="goto-article-page-button"
                                    icon={< LeftArrowIcon />}
                                    buttonColor="light"
                                    name="ادامه نوشته"/>
                            </div>
                        </Link>
                    </Grid.Column>
                )
            });
        let paginationNumberRender = [];
        let paginationNumberCount = ((this.state.articlesCount / this.state.postPerPage) < 4 || this.state.pageNumber + 1 >= (this.state.articlesCount / this.state.postPerPage))
            ? this.state.articlesCount / this.state.postPerPage
            : this.state.pageNumber + (this.state.paginationLimit - 2)
        let startedPaginationNumber = (this.state.pageNumber < this.state.paginationLimit - 1)
            ? 0
            : this.state.pageNumber - (this.state.paginationLimit - 1);
        for (let i = startedPaginationNumber; i < paginationNumberCount; i++) {
            let index = i + 1;
            let paginationEndPoint = (!this.props.categorySlug && !this.props.searchQuery)
                ? `/fa/blog/page/` + index 
                : (this.props.categorySlug ? `/fa/blog/category/${this.props.categorySlug}/page/` + index : (this.props.searchQuery ? `/fa/blog/search/${this.props.searchQuery}/page/` + index : ``))
            if (this.state.pageNumber === index) {
                paginationNumberRender.push(
                    <span className="active" key={i}>{index}</span>
                );
            } else {
                paginationNumberRender.push(
                    <Link
                        key={i}
                        to={paginationEndPoint}
                        onClick={() => this.paginationHandleClick(index)}>
                        <span>{index}</span>
                    </Link>
                );
            }
        }
        let paginationRender = Boolean(this.state.articlesCount)
            ? <div className="pagination-section element-on-canvas">
                    <div className="pagination-container">{paginationNumberRender}</div>
                </div>
            : ``;
        let blogArticlesTitle = (!this.props.categorySlug && !this.props.searchQuery)
            ? `آخرین نوشته های وبلاگ`
            : ((this.props.categorySlug)
                ? `آخرین نوشته های ${this.state.categoryName}`
                : (this.props.searchQuery
                    ? `نتایج جستوجو ${this.props.searchQuery}`
                    : ``));
        return (
            <section className="blog-articles">
                <BaninabLoading loading={this.state.loading}/>
                <div className="website-container container-padding blog-container">
                    <PageTitle title={blogArticlesTitle}/>
                    <Grid className="archive-blog-section element-on-canvas">
                        <Grid.Row columns={2}>
                            {listArticlesRender}
                        </Grid.Row>
                    </Grid>
                    {paginationRender}
                    <canvas
                        className="dopdots dopdots-selector-blog-articles-main-grid"
                        data-margin={25}
                        data-type="grid"
                        data-elementsize={1}
                        data-color="#243235"></canvas>
                </div>
            </section>
        )
    }
    paginationHandleClick(pageNumberHandleClickParam) {
        this.setState({pageNumber: pageNumberHandleClickParam, loading: 'active-loading'});
        if (Boolean(this.props.pageNumber)) {
            // this.articlesService(pageNumberHandleClickParam);
        }
    }
    // componentWillUpdate() {
    //     this.articlesService(this.state.pageNumber);
    // }
    componentDidMount() {
        this.articlesService(this.state.pageNumber);
    }
    componentDidUpdate() {
        this.blogArticlesMainGridCanvas();
        if (Boolean(this.state.categoryName)) {
            document.title = `${t('header__websiteTitle')} | ${this.state.categoryName}`;
        } 

    }
}

BlogArticles.contextTypes = {
    router: PropTypes.object.isRequired
}
export default BlogArticles