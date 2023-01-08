import React from 'react';
import BaninabLogoSvg from "../baninab-logo-svg/baninab-logo-svg.component"
import "./baninab-logo.component.css"
import { t, currentLanguage } from '../../translate/translate-service/translate-service';
class BaninabLogo extends React.Component {
    render() {
        const logoType = this.props.isArchiveComponenet
            ? <h2 className="baninab-logo-type">{t('header__websiteTitle')}</h2>
            : <h1 className="baninab-logo-type">{t('header__websiteTitle')}</h1>;

        return (
            <a href={`/${currentLanguage}`}>
                <div className="logo-container">
                    <div className="baninab-logo">
                        <BaninabLogoSvg/>
                    </div>
                    {logoType}
                </div>
            </a>
        );
    }

}

export default BaninabLogo;
