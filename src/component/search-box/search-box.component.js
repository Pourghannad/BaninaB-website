import React from 'react'
import './search-box.component.css'
import SearchIcon from '../search-icon/search-icon.componenet'
import CloseIcon from '../close-icon/close-icon.component'
import PropTypes from 'prop-types';
class SearchBox extends React.Component {
    constructor() {
        super()
        this.state = {
            value : '',
            imagesCount : 24,         //  TODO : change with redux and when close search page state change (surely in other component)
            backgroundImageNumber : 1,// ///// ....
        }
    }
    submitSearch(event) {
        event.preventDefault();
        document.querySelector('.blog-header').classList.remove('active-search'); // TODO : change with state
        setTimeout(() => { // Change with redux or change router
            this.context.router.history.replace(`/fa/blog/search/${this.state.value}`) 
        },100);

        // window.location.reload(); //TODO : Change with redux or change router
    }
    componentWillMount() {
        this.setState({backgroundImageNumber : Math.floor(Math.random() *  this.state.imagesCount+1)})
    }
    render() {
        // setInterval(()=> {
        //     this.setState({backgroundImageNumber : Math.floor(Math.random() *  this.state.imagesCount+1)})
        // },60000)
        return (
            <div className="search-box-main-container" style={{backgroundImage : `url(${window.location.origin}/img/search/${this.state.backgroundImageNumber}.jpg)`}}>
                <div className="search-input">
                <CloseIcon selectorElementForClick=".blog-header" removeClassNameElement="active-search" />
                    <form onSubmit={this.submitSearch.bind(this)}>
                        <input type="text" placeholder="جستجو کنید ... " value={this.state.value} onChange={(event) => this.setState({value : event.target.value})}/>
                        <input type="submit"/>
                        <span className="search-submit-icon-container"><SearchIcon /></span>
                    </form>
                </div>
            </div>
        )
    }
}
SearchBox.contextTypes = {
    router: PropTypes.object.isRequired
}
export default SearchBox;