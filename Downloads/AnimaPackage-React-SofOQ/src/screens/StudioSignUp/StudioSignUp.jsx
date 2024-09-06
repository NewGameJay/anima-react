import React from "react";
import "./style.css";

export const StudioSignUp = () => {
  return (
    <div className="studio-sign-up">
      <div className="NG-landing-page-wrapper-2">
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="frame-wrapper">
              <div className="image-wrapper">
                <img className="img" alt="Image" src="/img/image.png" />
              </div>
            </div>
            <div className="div-pt-wrapper">
              <div className="div-wrapper">
                <div className="frame-2">
                  <div className="text-wrapper-6">Docs</div>
                  <div className="text-wrapper-7">Agency</div>
                  <div className="text-wrapper-8">Home</div>
                  <img className="image-h-rem-2" alt="Image h rem" src="/img/image-h-rem-10.png" />
                </div>
              </div>
            </div>
            <div className="div-py-2">
              <img className="continue-path-button" alt="Continue path button" src="/img/continuepathbutton.png" />
              <div className="h-ls-tight">
                <div className="overlap-group-2">
                  <img
                    className="want-to-learn-more-2"
                    alt="Want to learn more"
                    src="/img/want-to-learn-more-check-the-website.png"
                  />
                  <a className="check-the-website" href="newgame.me" rel="noopener noreferrer" target="_blank">
                    <div className="text-wrapper-9">Check The Website</div>
                  </a>
                  <div className="text-wrapper-10">Studio Sign Up</div>
                </div>
              </div>
              <div className="studio-sign-up-form">
                <div className="STUDIO-NAME-wrapper">
                  <input className="input-2" />
                </div>
                <div className="FLAGSHIP-TITLE-wrapper">
                  <input className="input-2" />
                </div>
                <div className="input-wrapper">
                  <input className="input-2" />
                </div>
                <div className="x-handle-wrapper">
                  <input className="input-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
