import React from "react";
import "./style.css";

export const AgencySignUp = () => {
  return (
    <div className="agency-sign-up">
      <div className="NG-landing-page-wrapper">
        <div className="NG-landing-page">
          <div className="overlap">
            <div className="div-overflow-x">
              <div className="frame">
                <img className="image" alt="Image" src="/img/image.png" />
              </div>
            </div>
            <div className="main">
              <div className="div-pt">
                <div className="div">
                  <div className="text-wrapper">Docs</div>
                  <div className="text-wrapper-2">Agency</div>
                  <div className="text-wrapper-3">Home</div>
                  <img className="image-h-rem" alt="Image h rem" src="/img/image-h-rem-10.png" />
                </div>
              </div>
            </div>
            <div className="div-py">
              <div className="link-hero-join">
                <div className="text-wrapper-4">CONTINUE</div>
                <img className="icon" alt="Icon" src="/img/icon.png" />
              </div>
              <div className="AGENCY-NAME-wrapper">
                <input className="input" />
              </div>
              <div className="TEAM-SIZE-wrapper">
                <input className="input" />
              </div>
              <div className="email-wrapper">
                <input className="input" />
              </div>
              <div className="link-PHONE">
                <input className="input" />
              </div>
              <div className="ls-tight">
                <div className="overlap-group">
                  <img
                    className="want-to-learn-more"
                    alt="Want to learn more"
                    src="/img/want-to-learn-more-check-the-website-2x.png"
                  />
                  <div className="text-wrapper-5">Agency Sign Up</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
