import React from 'react';
import {BrowserRouter, Route, Switch , Redirect } from "react-router-dom";
import ArchiveComponent from "./page/archive/archive.component"
import SingleArticle from "./page/single-article/single-article.component"
import BlogHeader from './component/blog-header/blog-header.component'
import BlogFooter from './component/blog-footer/blog-footer.component'
import BlogSingleArticle from './component/blog-single-article/blog-single-article.component'
import NotFound from './component/not-found/not-found.component';
import IndexPage from './page/index-page/index-page.component';
import DatacenterMonitoring from "./page/solution-page/data-center-monitoring/data-center-monitoring.component";
import BtsMonitoring from "./page/solution-page/bts-monitoring/bts-monitoring.component";
import HomeSecurity from "./page/solution-page/home-security/home-security.component";
import AlarmManagement from "./page/solution-page/alarm-management/alarm-management.component";
import BlogArticles from './component/blog-articles/blog-articles.component'

import './translate/assets/multiLanguage.scss'
class MainComponent extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact key="1" path="/" render={(props) =>
             <Redirect to="/fa"/>
          } />
          
          <Route exact key="2" path="/fa" render={(props) => <IndexPage lang="fa" props={props}/>}/>  
          <Route exact key="3" path="/en" render={(props) => <IndexPage lang="en" props={props}/>}/>  
          <Route exact key="4" path="/fa/blog" render={(props) => 
            <div>
              <BlogHeader lang="fa" blog={true} isArchiveComponenet={Boolean(Object.keys(props.match.params).length)} />
              <BlogArticles searchQuery={props.match.params.searchQuery} categorySlug={props.match.params.categorySlug} pageNumber={props.match.params.pageNumber ? parseInt(props.match.params.pageNumber , 10) : null} lang="fa"/>
              <BlogFooter AbsoluteBottom={true} />
            </div>
          } />  
          <Route exact key="5" path="/fa/404" render={(props) =>
            <div>
                <BlogHeader lang="fa" isArchiveComponenet={Boolean(Object.keys(props.match.params).length)} />
                <NotFound lang="fa"/>
                <BlogFooter AbsoluteBottom={true} />
            </div>
          } />
          <Route exact key="6" path="/en/404" render={(props) =>
            <div>
                <BlogHeader lang="fa" isArchiveComponenet={Boolean(Object.keys(props.match.params).length)} />
                <NotFound lang="en"/>
                <BlogFooter AbsoluteBottom={true} />
            </div>
          } />
          <Route exact key="7" path="/fa/blog/page/:pageNumber" component={ArchiveComponent}/>  
          <Route exact key="8" path="/fa/blog/category/:categorySlug" component={ArchiveComponent}/>  
          <Route exact key="9" path="/fa/blog/category/:categorySlug/page/:pageNumber" component={ArchiveComponent}/>  
          <Route exact key="10" path="/fa/blog/search/:searchQuery" component={ArchiveComponent} />
          <Route exact key="11" path="/fa/blog/search/:searchQuery/page/:pageNumber" component={ArchiveComponent} />
          <Route key="12" path="/fa/blog/:articleSlug" component={SingleArticle}/>
            <Route key="13" path="/fa/datacenter-monitoring" render={(props) => 
              <div>
                <BlogHeader lang="fa" isArchiveComponenet={Boolean(Object.keys(props.match.params).length)} />
                <DatacenterMonitoring lang="fa" />
                <BlogFooter />
              </div> 
            }/>
            <Route key="14" path="/en/datacenter-monitoring" render={(props) => 
              <div>
                <BlogHeader lang="en" isArchiveComponenet={Boolean(Object.keys(props.match.params).length)} />
                <DatacenterMonitoring lang="en" />
                <BlogFooter />
              </div> 
            }/>
            <Route key="15" path="/fa/bts-monitoring" render={(props) => 
              <div>
                <BlogHeader lang="fa" isArchiveComponenet={Boolean(Object.keys(props.match.params).length)} />
                <BtsMonitoring lang="fa" />
                <BlogFooter />
              </div> 
            }/>
            <Route key="16" path="/en/bts-monitoring" render={(props) => 
              <div>
                <BlogHeader lang="en" isArchiveComponenet={Boolean(Object.keys(props.match.params).length)} />
                <BtsMonitoring lang="en" />
                <BlogFooter />
              </div> 
            }/>
            <Route key="17" path="/fa/home-security" render={(props) => 
              <div>
                <BlogHeader lang="fa" isArchiveComponenet={Boolean(Object.keys(props.match.params).length)} />
                <HomeSecurity lang="fa"/>
                <BlogFooter />
              </div> 
            }/>
            <Route key="18" path="/en/home-security" render={(props) => 
              <div>
                <BlogHeader lang="en" isArchiveComponenet={Boolean(Object.keys(props.match.params).length)} />
                <HomeSecurity lang="en" />
                <BlogFooter />
              </div> 
            }/>
            <Route key="19" path="/fa/alarm-system" render={(props) => 
              <div>
                <BlogHeader lang="fa" isArchiveComponenet={Boolean(Object.keys(props.match.params).length)} />
                <AlarmManagement lang="fa" />
                <BlogFooter />
              </div> 
            }/>
            <Route key="20" path="/en/alarm-system" render={(props) => 
              <div>
                <BlogHeader lang="en" isArchiveComponenet={Boolean(Object.keys(props.match.params).length)} />
                <AlarmManagement lang="en" />
                <BlogFooter />
              </div> 
            }/>
            <Route key="21" path="/:articleSlug" render={(props) => 
              <div>
                <BlogHeader lang="fa" isArchiveComponenet={Boolean(Object.keys(props.match.params).length)} />
                <BlogSingleArticle pageSlug={true} pageParams={props.match.params}/>
                <BlogFooter />
            </div> 
            }/>
            <Route exact key="22" path="/blog" render={(props) =>
             <Redirect to="/fa/blog"/>
          } />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default MainComponent;
