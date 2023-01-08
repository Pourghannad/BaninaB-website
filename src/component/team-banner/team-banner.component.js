import React from 'react';
import './team-banner.component.css';
import TrcButton from "../trc-button/trc-button.component";
class TeamBanner extends React.Component {
  constructor() {
    super();
  }
  render() {
    var arr = []
    while (arr.length < 4) {
      var randomnumber = Math.floor(Math.random() * 9) + 1;
      if (arr.indexOf(randomnumber) > -1) {
        continue
      };
      arr[arr.length] = randomnumber;
    }
    let teamBannerColumns = [];
    for (let i = 0; i < 4; i++) {
      teamBannerColumns.push(
        <div key={i} className="column each-team-banner-column"><span
          style={{
          backgroundImage: `url(${window.location.origin}/img/team/${arr[i]}.jpg)`
        }}/></div>
      );
    }
    return (
      <div className="company-team-banner-container">
        <div className="ui relaxed four column grid">
          {teamBannerColumns}
        </div>
        <div className="company-team-banner-content">
          <h5>یک شرکت خوب یک تیم خوب دارد
          </h5>
          <a className="trc-btn light-btn go-to-team-page" target="_blank" href="/baninab.com/team">
            <span className="title-in-trc">تیم ما</span>
            <span className="icon-in-trc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 0.302 0.6425000000000001"
                x="0px"
                y="0px"
                fill-rule="evenodd"
                clip-rule="evenodd">
                <path
                  className="fil0"
                  fill="#ffffff"
                  d="M0.289 0.077c0.017,-0.018 0.017,-0.046 0,-0.064 -0.018,-0.017 -0.046,-0.017 -0.064,0l-0.212 0.212c-0.017,0.018 -0.017,0.046 0,0.064l0.212 0.211c0.018,0.018 0.046,0.018 0.064,0 0.017,-0.017 0.017,-0.046 0,-0.063l-0.181 -0.18 0.181 -0.18z"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    )
  }
  componentDidMount() {}

}
export default TeamBanner;