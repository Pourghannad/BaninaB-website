import React from 'react';
import './service-animation.componenet.css';
import PropTypes from 'prop-types';
class ServiceAnimation extends React.Component {
	constructor(){
		super();
		this.state = {
			animationActive : false,
			firstAnimation : false,
			goodConnection : false,
		};
	}
    render() {
		let serviceAnimationClass = ['service-introduction-animation-container'];
		if (this.state.firstAnimation) {
			serviceAnimationClass.push('first-scroll-animation');
		}
		if (this.state.animationActive) {
			serviceAnimationClass.push('service-animation-go');
		}
        return (
            <div className={serviceAnimationClass.join(' ')}>
            <div className="round-icon-animation">
                      <div className="each-round-icon-animation png-temporary-icon cloud"><span></span></div>
                      <div className="each-round-icon-animation png-temporary-icon location"><span></span></div>
                      <div className="each-round-icon-animation png-temporary-icon wifi"><span></span></div>
                      <div className="each-round-icon-animation png-temporary-icon lamp"><span></span></div>
                      <div className="each-round-icon-animation png-temporary-icon lock"><span></span></div>
                      <div className="each-round-icon-animation png-temporary-icon bell"><span></span></div>
                      <div className="each-round-icon-animation png-temporary-icon server"><span></span></div>
                  </div>
            <div className="main-box">
              <div className="main-service-logo">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 300 265">
<path fill="#0D432E" d="M74.7,16c0,0,6.8-6.8,23.2-5.8s23.2,5.8,23.2,5.8s11.6,3.9,23.2,16.4C156,45,155,56.6,155,56.6
	s1,13.5-10.6,20.3c-11.6,6.8-22.3,5.8-28.1,4.8c-5.8-1-14.5-1.9-25.2-8.7S76.7,62.4,70.9,54.7s-8-17.5-5.8-25.2
	C67,22.8,74.7,16,74.7,16z"/>
<path className="six-circle-logo for-service-animation" fill="#0D432E" d="M74.7,16c0,0,6.8-6.8,23.2-5.8s23.2,5.8,23.2,5.8s11.6,3.9,23.2,16.4C156,45,155,56.6,155,56.6
	s1,13.5-10.6,20.3c-11.6,6.8-22.3,5.8-28.1,4.8c-5.8-1-14.5-1.9-25.2-8.7S76.7,62.4,70.9,54.7s-8-17.5-5.8-25.2
	C67,22.8,74.7,16,74.7,16z"/>
<path fill="#0D432E" d="M177.3,5.4c0,0,9.7-2.9,23.2,4.8s19.4,21.3,19.4,21.3s5.8,11.6,1.9,22.3s-13.5,12.6-13.5,12.6
	s-12.6,3.9-26.1-4.8s-18.4-21.3-18.4-21.3S158,28.7,161.9,19S171.5,6.3,177.3,5.4z"/>
<path className="five-circle-logo for-service-animation" fill="#0D432E" d="M177.3,5.4c0,0,9.7-2.9,23.2,4.8s19.4,21.3,19.4,21.3s5.8,11.6,1.9,22.3s-13.5,12.6-13.5,12.6
	s-12.6,3.9-26.1-4.8s-18.4-21.3-18.4-21.3S158,28.7,161.9,19S171.5,6.3,177.3,5.4z"/>
<path fill="#0D432E" d="M236.3,66.3c0,0,5.8-16.4,24.2-10.6s20.3,23.2,20.3,26.1c0,2.9,1.9,12.6-8.7,20.3s-23.2-1-23.2-1
	s-6.8-3.9-10.6-12.6S234.4,75,236.3,66.3z"/>
<path className="four-circle-logo for-service-animation" fill="#0D432E" d="M236.3,66.3c0,0,5.8-16.4,24.2-10.6s20.3,23.2,20.3,26.1c0,2.9,1.9,12.6-8.7,20.3s-23.2-1-23.2-1
	s-6.8-3.9-10.6-12.6S234.4,75,236.3,66.3z"/>
<path fill="#0D432E" d="M265.3,120.5c0,0,7.7-7.7,19.4-1s10.6,21.3,10.6,21.3s1,11.6-8.7,19.4s-20.3,0-20.3,0s-8.7-5.8-9.7-18.4
	C255.7,129.2,265.3,120.5,265.3,120.5z"/>
<path className="three-circle-logo for-service-animation" fill="#0D432E" d="M265.3,120.5c0,0,7.7-7.7,19.4-1s10.6,21.3,10.6,21.3s1,11.6-8.7,19.4s-20.3,0-20.3,0s-8.7-5.8-9.7-18.4
	C255.7,129.2,265.3,120.5,265.3,120.5z"/>
<path fill="#0D432E" d="M241.2,177.6c0,0,8.7-10.6,21.3-7.7c12.6,2.9,16.4,13.5,16.4,13.5s6.8,14.5-3.9,27.1s-24.2,8.7-24.2,8.7
	s-10.6-1-15.5-14.5C230.5,191.1,240.2,178.6,241.2,177.6z"/>
<path className="two-circle-logo for-service-animation" fill="#0D432E" d="M241.2,177.6c0,0,8.7-10.6,21.3-7.7c12.6,2.9,16.4,13.5,16.4,13.5s6.8,14.5-3.9,27.1s-24.2,8.7-24.2,8.7
	s-10.6-1-15.5-14.5C230.5,191.1,240.2,178.6,241.2,177.6z"/>
<path fill="#0D432E" d="M176.3,211.5c0,0,14.5-14.5,32.9-12.6s22.3,14.5,22.3,14.5s7.7,15.5-8.7,33.9c0,0-9.7,9.7-21.3,11.6
	s-18.4,0-18.4,0s-8.7-1.9-13.5-8.7s-5.8-14.5-3.9-20.3C167.6,224,168.6,219.2,176.3,211.5z"/>
<path className="one-circle-logo for-service-animation" fill="#0D432E" d="M176.3,211.5c0,0,14.5-14.5,32.9-12.6s22.3,14.5,22.3,14.5s7.7,15.5-8.7,33.9c0,0-9.7,9.7-21.3,11.6
	s-18.4,0-18.4,0s-8.7-1.9-13.5-8.7s-5.8-14.5-3.9-20.3C167.6,224,168.6,219.2,176.3,211.5z"/>
<path fill="#189D5A" d="M232.4,111.8c-5.8-10.6-19.4-17.4-19.4-17.4s-7.7-4.8-22.3-4.8s-24.2,7.7-24.2,7.7s-12.6,7.7-16.4,20.3
	c-3.9,12.6-1.9,20.3-1.9,20.3s1,6.8,2.9,10.6c1.9,3.9,1.9,10.6,1.9,10.6c0.6,10.4-5.4,14.3-10.4,15.7c-1.6,0.5-3.2,0.7-4.3,0.8
	c-0.1,0-0.3,0.1-0.4,0.1c-0.2,0.1-0.3,0.1-0.5,0.1h-0.7c-0.1,0-0.2,0-0.3,0h-0.1c-0.2,0.1-0.4,0.1-0.6,0.1l0,0c-0.1,0-0.2,0-0.4,0
	c-0.1,0-0.1,0-0.2,0c-3.6,0.5-10.3-0.3-10.3-0.3c-7.7-1.9-15.5-1.9-15.5-1.9c-14.5,1-23.2,5.8-30,9.7s-18.4,14.5-21.3,31
	c-2.9,16.4,7.7,26.1,7.7,26.1s10.6,12.6,33.9,12.6s39.7-18.4,39.7-18.4c7.1-6,9.9-14.1,10.9-20c0.1-1.2,0.1-2.2,0.2-3.4
	c0-2-0.1-4-0.1-6c-0.1-0.3-0.1-0.5-0.1-0.8c0,0.5,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.5c0-0.2-0.1-0.4-0.1-0.6
	c-0.7-4.6-0.1-10.1-0.1-10.1c1-7.7,5.8-12.6,5.8-12.6c0.4-0.6,1-1.2,1.6-1.6c0,0,0,0,0.1-0.1s0.3-0.2,0.5-0.3c0.7-0.6,1.5-1,2.2-1.3
	l0,0c2.4-1.3,5-1.9,7.6-2.3c2.9-0.6,5.9-1.1,8.8-0.9c0.7-0.1,1.4,0,2,0.2c1.2,0.1,2.3,0.3,3.4,0.7c0.6,0.1,1.1,0.3,1.5,0.4
	c0.1,0,0.3,0,0.4,0.1c2.5,0.8,5.1,1.2,7.6,1.5c4.3,0.2,8.6-0.2,8.6-0.2s4.8,0,14.5-3.9s14.5-10.6,14.5-10.6
	c1.9-1.9,10.6-12.6,10.6-26.1S232.4,111.8,232.4,111.8z M112.2,222.7c-7.5,5-16.4,4.7-20-0.7c-3.6-5.3-0.5-13.7,7-18.8
	c7.5-5,16.4-4.7,20,0.7C122.8,209.2,119.7,217.6,112.2,222.7z M196.6,150.5c-9.1,0-16.4-7-16.4-15.5s7.4-15.5,16.4-15.5
	c9.1,0,16.4,7,16.4,15.5S205.7,150.5,196.6,150.5z"/>
<path fill="#0D432E" d="M110.5,108.9c0,0-8.7-12.6-20.3-17.4s-21.3-6.8-39.7-6.8c-15.8,0-30.9,10-34.7,12.8c-0.4,0.5-0.9,0.8-1.4,1.2
	c-0.1,0.1-0.1,0.1-0.2,0.2c-0.2,0.3-0.4,0.5-0.7,0.7c-11.2,12.1-9.5,22-9.5,22s-1,5.8,6.8,16.4c6.9,9.5,18.4,15.1,20.8,16.3
	c0.6,0.2,1.1,0.4,1.5,0.7c1,0.4,1.9,0.8,2.9,1.2c1.2,0.4,2.3,0.9,3.5,1.3c1,0.3,2,0.6,3,0.8c1.5,0.2,2.9,0.6,4.4,1.1
	c0.1,0,0.2,0,0.2,0.1c5.4,0.8,10.2,1.1,10.2,1.1c11.6,1.9,26.1-2.9,26.1-2.9c8.7-1.9,17.4-8.7,17.4-8.7c5.8-3.9,8.7-8.7,8.7-8.7
	C121.2,122.4,110.5,108.9,110.5,108.9z"/>
<path className="last-circle-logo for-service-animation" fill="#0D432E" d="M110.5,108.9c0,0-8.7-12.6-20.3-17.4s-21.3-6.8-39.7-6.8c-15.8,0-30.9,10-34.7,12.8c-0.4,0.5-0.9,0.8-1.4,1.2
	c-0.1,0.1-0.1,0.1-0.2,0.2c-0.2,0.3-0.4,0.5-0.7,0.7c-11.2,12.1-9.5,22-9.5,22s-1,5.8,6.8,16.4c6.9,9.5,18.4,15.1,20.8,16.3
	c0.6,0.2,1.1,0.4,1.5,0.7c1,0.4,1.9,0.8,2.9,1.2c1.2,0.4,2.3,0.9,3.5,1.3c1,0.3,2,0.6,3,0.8c1.5,0.2,2.9,0.6,4.4,1.1
	c0.1,0,0.2,0,0.2,0.1c5.4,0.8,10.2,1.1,10.2,1.1c11.6,1.9,26.1-2.9,26.1-2.9c8.7-1.9,17.4-8.7,17.4-8.7c5.8-3.9,8.7-8.7,8.7-8.7
	C121.2,122.4,110.5,108.9,110.5,108.9z"/>
</svg>

              </div>
            </div>
          </div>
        )
	}
	componentWillUnmount() {
		window.removeEventListener("scroll", () => {
			let servicePageRect = document.getElementById("ServicePage").getBoundingClientRect();
			if (servicePageRect.y < 200 && servicePageRect.y > -1000) {
				this.setState({firstAnimation : true , animationActive : true});				
			} else {
				this.setState({firstAnimation : false , animationActive : false});
			}
		});
	}
	componentDidMount() {		
			window.addEventListener("scroll", () => {
				let servicePageRect = document.getElementById("ServicePage").getBoundingClientRect();
				if (servicePageRect.y < 200 && servicePageRect.y > -1000) {
					this.setState({firstAnimation : true , animationActive : true});				
				} else {
					this.setState({firstAnimation : false , animationActive : false});
				}
			});

		// const imageAddr = "https://www.baninab.com/img/contactBG.jpg";
		// const downloadSize = 130825; //bytes
		// window.addEventListener('load', ()=> {
		// 	let startTime, endTime;
		// 	let download = new Image();
		// 	startTime = (new Date()).getTime();
		// 	let cacheBuster = "?nnn=" + startTime;
		// 	download.src = imageAddr + cacheBuster;
		// 	download.onload =  () => {
		// 		endTime = (new Date()).getTime();
		// 		const duration = (endTime - startTime) / 1000;
		// 		const bitsLoaded = downloadSize * 8;
		// 		const speedMbps = ((bitsLoaded / duration) /1024)/1000;
		// 		if (speedMbps > 0.875) {
		// 			this.setState({goodConnection : true})
		// 		} else {
		// 			this.setState({goodConnection : false})
		// 		}
		// 	}
		// 	download.onerror = function (err, msg) {
		// 		this.setState({goodConnection : false})
		// 	}
		
		// }, false);
	}
	
}
ServiceAnimation.contextTypes = {
	router: PropTypes.object.isRequired
  }
export default ServiceAnimation;