import React, { Component } from "react";

class FooterComponent extends Component {
  render() {
    return (
      <>
        <div class="site-wrap style-css">
          <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <div className="block-7">
                    <h3 className="footer-heading mb-4">About Us</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eius quae reiciendis distinctio voluptates sed dolorum
                      excepturi iure eaque, aut unde.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 mx-auto mb-5 mb-lg-0">
                  <h3 className="footer-heading mb-4">Quick Links</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">Supplements</a>
                    </li>
                    <li>
                      <a href="/">Vitamins</a>
                    </li>
                    <li>
                      <a href="/">Diet &amp; Nutrition</a>
                    </li>
                    <li>
                      <a href="/">Tea &amp; Coffee</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="block-5 mb-5">
                    <h3 className="footer-heading mb-4">Contact Info</h3>
                    <ul className="list-unstyled">
                      <li className="address">
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </li>
                      <li className="phone">
                        <a href="tel://23923929210">+2 392 3929 210</a>
                      </li>
                      <li className="email">emailaddress@domain.com</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row pt-5 mt-5 text-center">
                <div className="col-md-12">
                  <p>
                    Copyright © All rights reserved | This template is made with
                    <i className="icon-heart" aria-hidden="true" /> by
                    <a href="/" target="_blank" className="text-primary">
                      Colorlib
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default FooterComponent;
