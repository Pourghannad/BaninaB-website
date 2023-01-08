import React from 'react';
import './archive.component.css'
import BlogHeader from '../../component/blog-header/blog-header.component'
import BlogFooter from '../../component/blog-footer/blog-footer.component'
import BlogArticles from '../../component/blog-articles/blog-articles.component'
import { changeCurrentLanguage } from '../../translate/translate-service/translate-service';
class ArchiveComponent extends React.Component {
  constructor(props) {
    super(props);
    if (!props.match.params.searchQuery && !props.match.params.categorySlug ) {
      document.title = 'بانی ناب پردازش | وبلاگ';
    } else if (this.props.match.params.searchQuery) {
      document.title = `بانی ناب پردازش | جستجو : ${props.match.params.searchQuery}`;
    }
  }
  render() {
    changeCurrentLanguage('fa');
    return (
      <div>
        <BlogHeader blog={true} />
        <BlogArticles searchQuery={this.props.match.params.searchQuery} categorySlug={this.props.match.params.categorySlug} pageNumber={this.props.match.params.pageNumber ? parseInt(this.props.match.params.pageNumber , 10) : null}/>
        <BlogFooter />
      </div>
    );
  }
}

export default ArchiveComponent;
