import React from 'react'
import './page-title.component.css'
const PageTitle = (props) => (
    <div className="page-title-container element-on-canvas">
        <div className="page-title-text-container">
            <h4>{props.title}</h4>
        </div>
    </div>
)
export default PageTitle