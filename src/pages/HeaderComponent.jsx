import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderComponent extends Component {
  render() {
    return (
      <>
        <div class="site-wrap style-css">
          <div class="site-navbar py-2">
            <div class="search-wrap">
              <div class="container">
                <a href="/" class="search-close js-search-close">
                  <span class="icon-close2"></span>
                </a>
                <form action="#" method="post">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search keyword and hit enter..."
                  />
                </form>
              </div>
            </div>

            <div class="container">
              <div class="d-flex align-items-center justify-content-between">
                <div class="logo">
                  <div class="site-logo px">
                    <Link to="home" class="js-logo-clone">
                      Pharma
                    </Link>
                  </div>
                </div>
                <div class="main-nav d-none d-lg-block">
                  <nav
                    class="site-navigation text-right text-md-center"
                    role="navigation"
                  >
                    <ul class="site-menu js-clone-nav d-none d-lg-block">
                      <li class="active">
                        <Link to="/home">Home</Link>
                      </li>
                      <li>
                        <Link to="/shop">Store</Link>
                      </li>
                      <li class="has-children">
                        <a href="/">Dropdown</a>
                        <ul class="dropdown">
                          <li>
                            <a href="/">Supplements</a>
                          </li>
                          <li class="has-children">
                            <a href="/">Vitamins</a>
                            <ul class="dropdown">
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
                          </li>
                          <li>
                            <a href="/">Diet &amp; Nutrition</a>
                          </li>
                          <li>
                            <a href="/">Tea &amp; Coffee</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="icons">
                  <Link
                    to="/cart"
                    class="icons-btn d-inline-block js-search-open"
                  >
                    <span class="icon-search"></span>
                  </Link>
                  <Link to="/cart" class="icons-btn d-inline-block bag">
                    <span class="icon-shopping-bag"></span>
                    <span class="number">2</span>
                  </Link>
                  <a
                    href="/"
                    class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
                  >
                    <span class="icon-menu"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HeaderComponent;
