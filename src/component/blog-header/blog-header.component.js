import React from 'react';
import "../../assets/semantic-ui-grid.css"
import {Grid} from 'semantic-ui-react'
import {dopDots} from '../dopdots/dopdots.component'
import "./blog-header.component.css"
import BaninabLogo from "../baninab-logo/baninab-logo.component"
import TrcButton from "../trc-button/trc-button.component"
import ArrowMenuIcon from "../arrow-menu-icon/arrow-menu-icon.component"
import SearchIcon from "../search-icon/search-icon.componenet"
import BaninabTopMenu from "../top-menu/top-menu.component"
import SearchBox from "../search-box/search-box.component"
import {Link} from 'react-router-dom'
import axios from 'axios';
import WebService from '../../web-service/web-service.component'
import { t, changeCurrentLanguage , currentLanguage } from '../../translate/translate-service/translate-service';
class BlogHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: []
        }
    }
    componentWillMount() {
        const WebServiceObject = new WebService();
        let allParentCategoriesTemp = [],allChildCategoriesTemp = [],sortableCategoryList = [];
        axios.get(WebServiceObject.state.wordpressRestApiEndPoint + '/categories').then(res => {
                res.data.forEach(cat => {
                    if (cat.parent === 0) {
                        allParentCategoriesTemp.push(cat);
                        sortableCategoryList.push(cat);
                    } else {
                        allChildCategoriesTemp.push(cat);
                    }
                })
                allParentCategoriesTemp.forEach(parentCat => {
                    let listOfChildCategory = [];
                    allChildCategoriesTemp.forEach(cat => {
                        if (cat.parent === parentCat.id) {
                            listOfChildCategory.push(cat);
                        }
                    })
                    sortableCategoryList[allParentCategoriesTemp.indexOf(parentCat)].subCategory = listOfChildCategory;
                })
                this.setState({categories : sortableCategoryList})
            })
    }
    changeLanguageHandleClick(toChangeLanguage) {
        if (currentLanguage !== toChangeLanguage) {
          window.location.replace(`/${toChangeLanguage}/${window.location.pathname.split('/')[2]}`)
      }
    }
    render() {
        
        changeCurrentLanguage(this.props.lang);
        let categoriesRender = [];
        this
            .state
            .categories
            .forEach((eachCategory, i) => {
                if (eachCategory.subCategory.length !== 0) {
                    let subCategory = [];
                    eachCategory.subCategory.forEach( (eachSubCategory , index) => {
                        subCategory.push(
                            <li key={index}>
                                <Link to={`/fa/blog/category/${eachSubCategory.slug}`}>{eachSubCategory.name}</Link>
                            </li>
                        )
                    });
                    categoriesRender.push(
                        <li key={i} className="have-sub-menu">
                            <Link to={`/fa/blog/category/${eachCategory.slug}`}>{eachCategory.name}</Link>
                            <ul className="sub-menu">
                            {subCategory}
                            </ul>
                        </li>
                    );
                } else {
                    categoriesRender.push(
                        <li key={i}>
                            <Link to={`/fa/blog/category/${eachCategory.slug}`}>{eachCategory.name}</Link>
                        </li>
                    );
                }
            });
        return (
            <header className="blog-header">
                <SearchBox/>
                <div className="website-container container-padding blog-container">
                    <Grid className="object-on-dopdots">
                        <Grid.Row columns={2}>
                            <Grid.Column textAlign='right' floated='right' width={10}>
                                <BaninabLogo isArchiveComponenet={this.props.isArchiveComponenet}/>
                            </Grid.Column>
                            <Grid.Column textAlign='left' floated='left' width={6}>
                                {/* TODO : change querySelector to react add or remove class handler */}
                                <TrcButton
                                    className="blog-search-icon"
                                    clickable="action"
                                    selectorElementForClick=".blog-header"
                                    addClassNameElement="active-search"
                                    buttonColor="light"
                                    icon={< SearchIcon />}
                                    name=""/>
                                <TrcButton
                                    className="blog-category-button"
                                    clickable="action"
                                    selectorElementForClick=".blog-header .website-container"
                                    addClassNameElement="active-menu-list"
                                    buttonColor="light"
                                    icon={< ArrowMenuIcon />}
                                    name={t('header__menuText')}/>
                                    <div className="trc-btn light-btn change-language-button" hidden={this.props.blog || this.props.isArchiveComponenet} onClick={()=> this.changeLanguageHandleClick(t('global__lang__item'))}>
                                        <span className="title-in-trc">{t('global__lang__text')}</span>
                                    </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <BaninabTopMenu/>
                    <canvas
                        className="dopdots dopdots-selector-blog-header"
                        data-margin={25}
                        data-type="grid"
                        data-elementsize={1}
                        data-color="#243235"></canvas>
                </div>
                <div className="category-list">
                    <div className="website-container container-padding blog-container">
                        <ul className="first-menu">
                            {categoriesRender}
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
    componentDidMount() {
        function blogHeaderCanvas() {
            const blogHeaderCanvasSelector = document.querySelector('.dopdots-selector-blog-header');
            const blogheaderSectionSelector = document.querySelector('.blog-header .website-container');
            blogHeaderCanvasSelector.width = blogheaderSectionSelector.clientWidth;
            blogHeaderCanvasSelector.height = blogheaderSectionSelector.clientHeight
            dopDots(blogHeaderCanvasSelector.getContext('2d'));
        }
        blogHeaderCanvas();
        window.addEventListener('resize', function () {
            blogHeaderCanvas();
        });
    }
}

export default BlogHeader;
