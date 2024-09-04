import React from "react";
import { AiFillEye } from "../../components/AiFillEye";
import { ArrowForwardIos } from "../../components/ArrowForwardIos";
import { ChevronRight } from "../../components/ChevronRight";
import { DividerVertical } from "../../components/DividerVertical";
import { Insights } from "../../components/Insights";
import { OutlineRefresh } from "../../components/OutlineRefresh";
import { TickCircle } from "../../components/TickCircle";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="group-wrapper">
        <div className="group">
          <div className="NG-landing-page">
            <div className="overlap">
              <div className="div-overflow-x">
                <div className="overlap-group">
                  <img className="rectangle" alt="Rectangle" src="/img/rectangle-3-1.png" />
                  <div className="main">
                    <div className="div-container" />
                    <div className="div-pt">
                      <div className="overlap-wrapper">
                        <div className="div">
                          <div className="div-row">
                            <div className="div-col-lg">
                              <div className="ls-tight">
                                <img
                                  className="marketing-campaigns"
                                  alt="Marketing campaigns"
                                  src="/img/marketing-campaigns-made-easy-1.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="div-mt">
                            <div className="div-container-2">
                              <div className="div-row-2">
                                <div className="overlap-group-wrapper">
                                  <div className="overlap-group-2">
                                    <TickCircle
                                      className="tick-circle-instance"
                                      style="outline"
                                      styleOutline="/img/tick-circle-1.png"
                                    />
                                    <p className="control-the-entire">
                                      <span className="text-wrapper">
                                        Control the entire process
                                        <br />
                                      </span>
                                      <span className="span">Keep everything in one </span>
                                      <span className="text-wrapper-2">
                                        place. From strategy creation to payment tracking, streamline your workflows and
                                        never miss a beat.
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="overlap-group-wrapper">
                                  <div className="overlap-group-2">
                                    <Insights className="insights-instance" insights="/img/insights-2.png" />
                                    <p className="impact-comprehension">
                                      <span className="text-wrapper">
                                        Impact + Comprehension
                                        <br />
                                      </span>
                                      <span className="span">Connect with the right </span>
                                      <span className="text-wrapper-2">
                                        influencers, build compelling campaigns, and turn creative ideas into tangible
                                        results.{" "}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="overlap-group-wrapper">
                                  <div className="overlap-group-2">
                                    <p className="creativity">
                                      <span className="text-wrapper">
                                        Creativity + Conversions
                                        <br />
                                      </span>
                                      <span className="span">Monitor your campaigns </span>
                                      <span className="text-wrapper-2">
                                        in real-time, optimize your strategy on the go, and generate reports once
                                        campaigns conclude.
                                      </span>
                                    </p>
                                    <OutlineRefresh />
                                  </div>
                                </div>
                              </div>
                              <div className="div-col-lg-2">
                                <div className="paragraph-text-lg">
                                  <p className="p">
                                    Leverage NG+ to streamline your campaigns, connect with top creators, and achieve
                                    measurable results.
                                  </p>
                                </div>
                                <p className="it-s-time-to-take">It&#39;s time to take action</p>
                              </div>
                            </div>
                          </div>
                          <div className="div-2">
                            <div className="div-3">
                              <img className="icon" alt="Icon" src="/img/icon-9.png" />
                              <div className="image-h-rem" />
                            </div>
                            <div className="div-4">
                              <div className="div-5">
                                <img className="img" alt="Icon" src="/img/icon-12.png" />
                                <div className="div-6">
                                  <input className="search" placeholder=" Search" type="text" />
                                  <img className="icon-2" alt="Icon" src="/img/icon-14.png" />
                                </div>
                              </div>
                              <div className="div-7">
                                <img className="div-8" alt="Div" src="/img/icon-12.png" />
                                <div className="div-9">
                                  <div className="div-10">
                                    <div className="div-wrapper">
                                      <div className="text-wrapper-3">Today</div>
                                    </div>
                                    <div className="div-11">
                                      <div className="div-12">
                                        <div className="div-13">
                                          <div className="div-14">
                                            <div className="div-15">
                                              <img className="icon-3" alt="Icon" src="/img/icon-10.png" />
                                              <div className="text-wrapper-4">Net volume</div>
                                            </div>
                                            <div className="text-wrapper-5">$3,528,198.72</div>
                                            <div className="text-wrapper-6">2:00 PM</div>
                                          </div>
                                          <div className="div-16">
                                            <div className="div-17">
                                              <img className="icon-4" alt="Icon" src="/img/icon-11.png" />
                                              <div className="text-wrapper-4">Yesterday</div>
                                            </div>
                                            <div className="text-wrapper-7">$2,931,556.34</div>
                                          </div>
                                        </div>
                                        <div className="div-18">
                                          <img className="icon-5" alt="Icon" src="/img/icon-15.png" />
                                          <div className="div-19">
                                            <div className="text-wrapper-8">12:00 AM</div>
                                            <div className="text-wrapper-9">Now, 2:00 PM</div>
                                            <div className="text-wrapper-10">11:59 PM</div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="div-20">
                                        <div className="div-21">
                                          <div className="text-wrapper-11">View</div>
                                          <div className="div-22">
                                            <div className="text-wrapper-12">Payouts</div>
                                            <div className="text-wrapper-13">$102,633.07</div>
                                            <div className="text-wrapper-14">Expected today</div>
                                          </div>
                                        </div>
                                        <div className="div-23" />
                                        <div className="div-24">
                                          <div className="text-wrapper-11">View</div>
                                          <div className="div-25">
                                            <div className="div-26">
                                              <img className="icon-6" alt="Icon" src="/img/icon-12.png" />
                                              <div className="text-wrapper-4">USD Balance</div>
                                            </div>
                                            <div className="text-wrapper-15">$553,257.51</div>
                                            <div className="text-wrapper-16">Available to pay out</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="div-27">
                                    <div className="div-28">
                                      <div className="text-wrapper-17">Updated today 7:50 AM</div>
                                      <div className="div-29">
                                        <img className="icon-7" alt="Icon" src="/img/icon-16.png" />
                                        <div className="div-30">
                                          <div className="text-wrapper-18">Apr 20</div>
                                          <div className="text-wrapper-19">Today</div>
                                        </div>
                                      </div>
                                      <div className="div-31">
                                        <div className="text-wrapper-20">$29,573.54</div>
                                        <div className="text-wrapper-21">$39,274.29</div>
                                      </div>
                                      <div className="div-32">
                                        <div className="text-wrapper-22">+32.8%</div>
                                        <div className="text-wrapper-23">Net volume from sales</div>
                                      </div>
                                    </div>
                                    <div className="div-33">
                                      <div className="text-wrapper-24">Updated today 7:50 AM</div>
                                      <div className="div-34">
                                        <img className="icon-8" alt="Icon" src="/img/icon-17.png" />
                                        <div className="div-35">
                                          <div className="text-wrapper-25">Apr 20</div>
                                          <div className="text-wrapper-26">Today</div>
                                        </div>
                                      </div>
                                      <div className="div-36">
                                        <div className="text-wrapper-27">28</div>
                                        <div className="text-wrapper-21">37</div>
                                      </div>
                                      <div className="div-37">
                                        <div className="text-wrapper-28">+32.1%</div>
                                        <div className="text-wrapper-23">New customers</div>
                                      </div>
                                    </div>
                                    <div className="div-38">
                                      <div className="text-wrapper-29">Updated today 7:50 AM</div>
                                      <div className="div-39">
                                        <div className="div-40">
                                          <div className="text-wrapper-30"> Past due</div>
                                          <div className="div-41" />
                                        </div>
                                        <div className="text-wrapper-31">$1,000.00</div>
                                      </div>
                                      <div className="div-42">
                                        <div className="div-43">
                                          <div className="text-wrapper-30"> Open</div>
                                          <div className="div-44" />
                                        </div>
                                        <div className="text-wrapper-32">$20,000.00</div>
                                      </div>
                                      <div className="div-45">
                                        <div className="div-46">
                                          <div className="text-wrapper-30"> Paid</div>
                                          <div className="div-47" />
                                        </div>
                                        <div className="text-wrapper-33">$25,000.00</div>
                                      </div>
                                      <div className="div-48">
                                        <div className="div-49" />
                                        <div className="div-50" />
                                        <div className="div-51" />
                                      </div>
                                      <div className="text-wrapper-34">Invoices</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="figure">
                            <img
                              className="div-phonegraphic"
                              alt="Div phonegraphic"
                              src="/img/div-phonegraphic-screen-mask-group-1.png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="frame-wrapper">
                        <div className="frame-wrapper-2">
                          <div className="div-52">
                            <div className="div-53">
                              <div className="div-wrapper-2">
                                <div className="text-wrapper-35">Get Started</div>
                              </div>
                              <div className="div-wrapper-3">
                                <div className="text-wrapper-36">Log In</div>
                              </div>
                            </div>
                            <div className="overlap-2">
                              <div className="div-54">
                                <div className="div-55">
                                  <div className="div-wrapper-4">
                                    <div className="text-wrapper-37">Documentation</div>
                                  </div>
                                  <div className="overlap-group-wrapper-2">
                                    <div className="overlap-group-3">
                                      <div className="borders">
                                        <div className="rectangle-2" />
                                      </div>
                                      <div className="text-wrapper-38">Dashboard</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="image-h-rem-2" />
                              </div>
                              <div className="div-wrapper-5">
                                <div className="text-wrapper-39">Services</div>
                              </div>
                              <div className="div-wrapper-6">
                                <div className="text-wrapper-40">Pricing</div>
                              </div>
                            </div>
                            <div className="text-wrapper-41">Contact</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-yui">
                    <div className="div-yui-wrapper">
                      <img
                        className="div-yui-2"
                        alt="Div yui"
                        src="/img/div-yui-3-17-2-1-1724270317458-106-mask-group-1.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="div-container-3">
                  <p className="text-wrapper-42">© Copyright 2023 Webpixels - Build like a PRO.</p>
                  <div className="list-nav">
                    <div className="text-wrapper-43"></div>
                    <div className="text-wrapper-43"></div>
                    <div className="text-wrapper-43"></div>
                    <div className="text-wrapper-43"></div>
                  </div>
                  <div className="div-col">
                    <div className="div-pe">
                      <div className="h-h">
                        <p className="let-s-talk-about">Let&#39;s talk about your project.</p>
                        <p className="text-wrapper-44">front-end, back-end, and much more at</p>
                      </div>
                      <div className="link">
                        <div className="text-wrapper-45"></div>
                        <div className="text-wrapper-46">hello@company.com</div>
                      </div>
                    </div>
                    <div className="link-btn">
                      <div className="text-wrapper-47">Get In Touch</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-wrapper">
                <div className="div-pt-wrapper">
                  <div className="div-pt-2">
                    <div className="frame-wrapper-3">
                      <div className="frame-wrapper-2">
                        <div className="div-52">
                          <div className="div-53">
                            <div className="div-wrapper-2">
                              <div className="text-wrapper-35">Get Started</div>
                            </div>
                            <div className="div-wrapper-3">
                              <div className="text-wrapper-36">Log In</div>
                            </div>
                          </div>
                          <div className="overlap-2">
                            <div className="div-54">
                              <div className="div-55">
                                <div className="div-wrapper-4">
                                  <div className="text-wrapper-37">Documentation</div>
                                </div>
                                <div className="overlap-group-wrapper-2">
                                  <div className="overlap-group-3">
                                    <div className="borders">
                                      <div className="rectangle-2" />
                                    </div>
                                    <div className="text-wrapper-38">Dashboard</div>
                                  </div>
                                </div>
                              </div>
                              <img className="image-h-rem-3" alt="Image h rem" src="/img/image-h-rem-10-2.png" />
                            </div>
                            <div className="div-wrapper-5">
                              <div className="text-wrapper-39">Services</div>
                            </div>
                            <div className="div-wrapper-6">
                              <div className="text-wrapper-40">Pricing</div>
                            </div>
                          </div>
                          <div className="text-wrapper-41">Contact</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="link-sqs-block">
                <div className="contact-us">CONTACT US</div>
              </div>
              <div className="div-py">
                <div className="overlap-3">
                  <div className="div-col-2">
                    <div className="link-hero-join">
                      <div className="overlap-group-4">
                        <div className="div-overflow-hidden">
                          <div className="div-overflow-anim">
                            <div className="text-wrapper-48">SIGN UP</div>
                          </div>
                          <ArrowForwardIos
                            arrowForwardIos="/img/arrow-forward-ios-6.png"
                            className="arrow-forward-ios-instance"
                          />
                        </div>
                        <ChevronRight
                          className="chevron-right-instance"
                          img="/img/chevron-right.png"
                          size="forty-eight"
                        />
                      </div>
                    </div>
                    <div className="link-hero-join-2">
                      <div className="overlap-group-4">
                        <div className="div-overflow-hidden">
                          <div className="div-overflow-anim">
                            <div className="text-wrapper-49">USERNAME</div>
                          </div>
                          <ArrowForwardIos
                            arrowForwardIos="/img/arrow-forward-ios-6.png"
                            className="arrow-forward-ios-instance"
                          />
                        </div>
                        <ChevronRight
                          className="chevron-right-instance"
                          img="/img/chevron-right.png"
                          size="forty-eight"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="link-hero-join-3">
                    <div className="div-overflow-hidden-2">
                      <div className="div-overflow-anim">
                        <div className="text-wrapper-49">EMAIL</div>
                      </div>
                      <ArrowForwardIos
                        arrowForwardIos="/img/arrow-forward-ios-6.png"
                        className="arrow-forward-ios-instance"
                      />
                    </div>
                    <DividerVertical className="divider-vertical-instance" />
                  </div>
                  <div className="h-ls-tight">
                    <div className="overlap-4">
                      <div className="text-wrapper-50">Sign Up</div>
                      <img
                        className="already-have-an"
                        alt="Already have an"
                        src="/img/already-have-an-account-sign-in-here-1.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="link-hero-join-4">
                  <div className="div-overflow-hidden-2">
                    <div className="div-overflow-anim">
                      <div className="text-wrapper-49">PASSWORD</div>
                    </div>
                    <ArrowForwardIos
                      arrowForwardIos="/img/arrow-forward-ios-6.png"
                      className="arrow-forward-ios-instance"
                    />
                  </div>
                  <DividerVertical className="divider-vertical-instance" />
                  <AiFillEye aiFillEye="/img/aifilleye-2.png" className="ai-fill-eye-instance" />
                </div>
                <div className="link-hero-join-5">
                  <div className="div-overflow-hidden-2">
                    <div className="div-overflow-anim">
                      <div className="text-wrapper-49">PHONE #</div>
                    </div>
                    <ArrowForwardIos
                      arrowForwardIos="/img/arrow-forward-ios-6.png"
                      className="arrow-forward-ios-instance"
                    />
                  </div>
                  <DividerVertical className="divider-vertical-instance" />
                </div>
                <div className="group-2">
                  <div className="text-wrapper-51">Forgot password?</div>
                  <div className="text-wrapper-52">Or continue with</div>
                  <div className="group-3">
                    <div className="rectangle-wrapper">
                      <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-1.png" />
                    </div>
                    <div className="image-wrapper">
                      <img className="image" alt="Image" src="/img/image-25-1.png" />
                    </div>
                    <div className="vector-wrapper">
                      <img className="vector" alt="Vector" src="/img/vector-1.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
