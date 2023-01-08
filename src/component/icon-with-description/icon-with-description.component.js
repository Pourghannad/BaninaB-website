import React from "react"
import './icon-with-description.component.css'
class IconWithDescription extends React.Component {
    render() {
        return (
            <a href={this.props.href ? this.props.href : ''} onClick={(event)=>  {this.props.href ? '' : event.preventDefault()}} rel="nofollow" target={this.props.href ? '_blank' : ''} className="each-icon-with-description">
                <div className="icon-with-description-icon" style={{backgroundImage: `url(${this.props.imgSrc})`, width: this.props.width, height: this.props.height}} />
                <div className="icon-with-description-description">
                    {this.props.title}
                </div>
            </a>
        )
    }
}
export default IconWithDescription;