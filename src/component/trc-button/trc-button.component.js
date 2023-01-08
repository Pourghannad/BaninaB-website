import React from 'react';
import './trc-button.component.css'
import PropTypes from 'prop-types';
class TrcButton extends React.Component {
    
    constructor() {
        super();
        this.state = {
            isIconClicked : ''
        }
    }
    trcButtonHandleClick = () => {
        if (this.props.clickable === 'action') {
            (this.state.isIconClicked === '') ? this.setState({isIconClicked : 'active '}) : this.setState({isIconClicked : ''});
            document.querySelector(this.props.selectorElementForClick).classList.toggle(this.props.addClassNameElement);
        } else if (this.props.clickable === 'link') {
            this.context.router.history.push(this.props.hrefLink)
        }
    }


    render() {
            return (
                <div onClick={this.trcButtonHandleClick} className={'trc-button ' + this.props.buttonColor + '-button ' + this.state.isIconClicked + this.props.className }>
                    <span className='icon-in-trc'>
                        {this.props.icon}
                    </span>
                    <span className="title-in-trc">{this.props.name}</span>
                </div>
            )
    }
}
TrcButton.contextTypes = {
    router: PropTypes.object.isRequired
}
export default TrcButton;