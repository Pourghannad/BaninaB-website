import React from 'react';
import BlogHeader from '../../component/blog-header/blog-header.component'
import BlogFooter from '../../component/blog-footer/blog-footer.component'
import BlogSingleArticle from '../../component/blog-single-article/blog-single-article.component'
class SingleArticle extends React.Component {
  render() {
    let isArchiveComponenet = Boolean(Object.keys(this.props.match.params).length);
    return (  
      <div>
        <BlogHeader isArchiveComponenet={isArchiveComponenet} />
        <BlogSingleArticle pageSlug={false} pageParams={this.props.match.params}/>
        <BlogFooter />
      </div>
    );
  }
}

export default SingleArticle;