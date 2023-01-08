import React from 'react'
import BaninabLogoSvg from '../baninab-logo-svg/baninab-logo-svg.component';
import './baninab-loading.component.css'
import './baninab-loading.component.responsive.css'
const BaninabLoading = (props) => {
    if (props.loading === "active-loading") {
        document.documentElement.style.overflow = 'hidden';
    } else {
        document.documentElement.style.overflow = 'visible';
    }
    
    return (
        <div className={`blog-loading loading-webiste ${props.loading}`}>
            <div className="baninab-logo">
                <BaninabLogoSvg/>
            </div>
        </div>
    )
}

export default BaninabLoading;