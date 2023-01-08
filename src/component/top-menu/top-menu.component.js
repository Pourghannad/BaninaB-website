import React from 'react';
import "./top-menu.component.css";
import PropTypes from 'prop-types';
import { t } from '../../translate/translate-service/translate-service';
class BaninabTopMenu extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<ul className="menu-list">
			<li className="menu-item front-section">
				<a href="/#HomePage" rel="noopener noreferrer" target="_blank">{t('header__menu__homePage')}</a>
			</li>
			<li className="menu-item service-section">
				<a href="/#ServicePage" rel="noopener noreferrer" target="_blank">{t('header__menu__service')}</a>
			</li>
			<li className="menu-item solution-section">
				<a href="/#SolutionPage" rel="noopener noreferrer" target="_blank">{t('global__header__menu__solution')}</a>
			</li>
			<li className="menu-item about-section">
				<a href="/#AboutPage" rel="noopener noreferrer" target="_blank">{t('header__menu__about')}</a>
			</li>
			<li className="menu-item contact-section">
				<a href="/#ContactPage" rel="noopener noreferrer" target="_blank">{t('header__menu__contact')}</a>
			</li>
			<li className="menu-item blog">
				<a onClick={() => this.context.router.history.push('/fa/blog')} rel="noopener noreferrer" target="_blank">{t('header__menu__blog')}</a>
			</li>
			<li className="menu-item jobs">
				<a onClick={() => this.context.router.history.push('/jobs')} rel="noopener noreferrer" target="_blank">{t('header__menu__jobs')}</a>
			</li>
		</ul>		
		)
	}
}
BaninabTopMenu.contextTypes = {
    router: PropTypes.object.isRequired
}
export default BaninabTopMenu;