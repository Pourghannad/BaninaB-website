import React from 'react'
import ArrowMenuIcon from '../arrow-menu-icon/arrow-menu-icon.component'
import './close-icon.component.css'
class CloseIcon extends React.Component {
    closeIConHandleClick() {
        document.querySelector(this.props.selectorElementForClick).classList.remove(this.props.removeClassNameElement);
    }
    render() {
        return (
            <span onClick={this.closeIConHandleClick.bind(this)} className="close-icon trc-button light-button">
                <ArrowMenuIcon/>
            </span>
        )
    }
}
export default CloseIcon
