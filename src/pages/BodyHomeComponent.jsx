import React, { Component } from "react";
import { Link } from "react-router-dom";

class BannerComponent extends Component {
  render() {
    return (
      <>
        <div class="site-wrap">
          <div
            className="site-blocks-cover"
            style={{ backgroundImage: 'url("assets/images/hero_1.jpg")' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mx-auto order-lg-2 align-self-center">
                  <div className="site-block-cover-content text-center">
                    <h2 className="sub-title">
                      Effective Medicine, New Medicine Everyday
                    </h2>
                    <h1>Welcome To Pharma</h1>
                    <p>
                      <a href="/" className="btn btn-primary px-5 py-3">
                        Shop Now
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section">
            <div className="container">
              <div className="row align-items-stretch section-overlap">
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <div className="banner-wrap bg-primary h-100">
                    <a href="/" className="h-100">
                      <h5>
                        Free <br /> Shipping
                      </h5>
                      <p>
                        Amet sit amet dolor
                        <strong>
                          Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </strong>
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <div className="banner-wrap h-100">
                    <a href="/" className="h-100">
                      <h5>
                        Season <br /> Sale 50% Off
                      </h5>
                      <p>
                        Amet sit amet dolor
                        <strong>
                          Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </strong>
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <div className="banner-wrap bg-warning h-100">
                    <a href="/" className="h-100">
                      <h5>
                        Buy <br /> A Gift Card
                      </h5>
                      <p>
                        Amet sit amet dolor
                        <strong>
                          Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </strong>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="title-section text-center col-12">
                  <h2 className="text-uppercase">Popular Products</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-lg-3 text-center item mb-4">
                  <span className="tag">Sale</span>
                  <a href="shop-single.html">
                    <img
                      src="assets/images/product_01.png"
                      alt=""
                      style={{ width: "250px", height: "270px" }}
                    />
                  </a>
                  <h3 className="text-dark">
                    <a href="shop-single.html">Bioderma</a>
                  </h3>
                  <p className="price">
                    <del>95.00</del> — $55.00
                  </p>
                </div>

                <div className="col-sm-6 col-lg-3 text-center item mb-4">
                  <a href="shop-single.html">
                    <img
                      src="assets/images/product_02.png"
                      alt=""
                      style={{ width: "250px", height: "270px" }}
                    />
                  </a>
                  <h3 className="text-dark">
                    <Link to="/single-product">Chanca Piedra</Link>
                  </h3>
                  <p className="price">$70.00</p>
                </div>
                <div className="col-sm-6 col-lg-3 text-center item mb-4">
                  <a href="shop-single.html">
                    <img
                      src="assets/images/product_03.png"
                      alt=""
                      style={{ width: "250px", height: "270px" }}
                    />
                  </a>
                  <h3 className="text-dark">
                    <a href="shop-single.html">Umcka Cold Care</a>
                  </h3>
                  <p className="price">$120.00</p>
                </div>
                <div className="col-sm-6 col-lg-3 text-center item mb-4">
                  <a href="shop-single.html">
                    <img
                      src="assets/images/product_04.png"
                      alt=""
                      style={{ width: "250px", height: "270px" }}
                    />
                  </a>
                  <h3 className="text-dark">
                    <a href="shop-single.html">Cetyl Pure</a>
                  </h3>
                  <p className="price">
                    <del>45.00</del> — $20.00
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12 text-center">
                  <a href="shop.html" className="btn btn-primary px-4 py-3">
                    View All Products
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section bg-light">
            <div className="container">
              <div className="row">
                <div className="title-section text-center col-12">
                  <h2 className="text-uppercase">New Products</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 block-3 products-wrap">
                  <div className="nonloop-block-3 owl-carousel">
                    <div className="text-center item mb-4">
                      <a href="shop-single.html">
                        <img src="assets/images/product_03.png" alt="" />
                      </a>
                      <h3 className="text-dark">
                        <a href="shop-single.html">Umcka Cold Care</a>
                      </h3>
                      <p className="price">$120.00</p>
                    </div>
                    <div className="text-center item mb-4">
                      <a href="shop-single.html">
                        <img src="assets/images/product_01.png" alt="" />
                      </a>
                      <h3 className="text-dark">
                        <a href="shop-single.html">Umcka Cold Care</a>
                      </h3>
                      <p className="price">$120.00</p>
                    </div>
                    <div className="text-center item mb-4">
                      <a href="shop-single.html">
                        <img src="assets/images/product_02.png" alt="" />
                      </a>
                      <h3 className="text-dark">
                        <a href="shop-single.html">Umcka Cold Care</a>
                      </h3>
                      <p className="price">$120.00</p>
                    </div>
                    <div className="text-center item mb-4">
                      <a href="shop-single.html">
                        <img src="assets/images/product_04.png" alt="" />
                      </a>
                      <h3 className="text-dark">
                        <a href="shop-single.html">Umcka Cold Care</a>
                      </h3>
                      <p className="price">$120.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="title-section text-center col-12">
                  <h2 className="text-uppercase">Testimonials</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 block-3 products-wrap">
                  <div className="nonloop-block-3 no-direction owl-carousel">
                    <div className="testimony">
                      <blockquote>
                        <img
                          src="assets/images/person_1.jpg"
                          alt=""
                          className="img-fluid w-25 mb-4 rounded-circle"
                        />
                        <p>
                          “Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Nemo omnis voluptatem consectetur quam tempore
                          obcaecati maiores voluptate aspernatur iusto eveniet,
                          placeat ab quod tenetur ducimus. Minus ratione sit
                          quaerat unde.”
                        </p>
                      </blockquote>
                      <p>— Kelly Holmes</p>
                    </div>
                    <div className="testimony">
                      <blockquote>
                        <img
                          src="assets/images/person_2.jpg"
                          alt=""
                          className="img-fluid w-25 mb-4 rounded-circle"
                        />
                        <p>
                          “Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Nemo omnis voluptatem consectetur quam tempore
                          obcaecati maiores voluptate aspernatur iusto eveniet,
                          placeat ab quod tenetur ducimus. Minus ratione sit
                          quaerat unde.”
                        </p>
                      </blockquote>
                      <p>— Rebecca Morando</p>
                    </div>
                    <div className="testimony">
                      <blockquote>
                        <img
                          src="assets/images/person_3.jpg"
                          alt=""
                          className="img-fluid w-25 mb-4 rounded-circle"
                        />
                        <p>
                          “Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Nemo omnis voluptatem consectetur quam tempore
                          obcaecati maiores voluptate aspernatur iusto eveniet,
                          placeat ab quod tenetur ducimus. Minus ratione sit
                          quaerat unde.”
                        </p>
                      </blockquote>
                      <p>— Lucas Gallone</p>
                    </div>
                    <div className="testimony">
                      <blockquote>
                        <img
                          src={`assets/images/person_4.jpg`}
                          alt=""
                          className="img-fluid w-25 mb-4 rounded-circle"
                        />
                        <p>
                          “Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Nemo omnis voluptatem consectetur quam tempore
                          obcaecati maiores voluptate aspernatur iusto eveniet,
                          placeat ab quod tenetur ducimus. Minus ratione sit
                          quaerat unde.”
                        </p>
                      </blockquote>
                      <p>— Andrew Neel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="site-section bg-secondary bg-image"
            style={{ backgroundImage: 'url("assets/images/bg_2.jpg")' }}
          >
            <div className="container">
              <div className="row align-items-stretch">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <a
                    href="/"
                    className="banner-1 h-100 d-flex"
                    style={{ backgroundImage: 'url("assets/images/bg_1.jpg")' }}
                  >
                    <div className="banner-1-inner align-self-center">
                      <h2>Pharma Products</h2>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae ex ad minus rem odio voluptatem.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <a
                    href="/"
                    className="banner-1 h-100 d-flex"
                    style={{ backgroundImage: 'url("assets/images/bg_2.jpg")' }}
                  >
                    <div className="banner-1-inner ml-auto  align-self-center">
                      <h2>Rated by Experts</h2>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae ex ad minus rem odio voluptatem.
                      </p>
                    </div>
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

export default BannerComponent;
