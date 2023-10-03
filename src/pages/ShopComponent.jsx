import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductServices from '../services/ProductServices'

class ShopComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }

  }

  componentDidMount() {
    ProductServices.getProducts().then((res) => {
      this.setState({ products: res.data });
    });
  }

  render() {
    return (
      <>
        <div className="site-wrap">
          <div className="bg-light py-3">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-0">
                  <Link to="/home">Home</Link>{" "}
                  <span className="mx-2 mb-0">/</span>
                  <strong className="text-black">Store</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">
                    Filter by Price
                  </h3>
                  <div id="slider-range" className="border-primary"></div>
                  <input
                    type="text"
                    name="text"
                    id="amount"
                    className="form-control border-0 pl-0 bg-white"
                    disabled=""
                  />
                </div>
                <div className="col-lg-6">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">
                    Filter by Reference
                  </h3>
                  <button
                    type="button"
                    className="btn btn-secondary btn-md dropdown-toggle px-4"
                    id="dropdownMenuReference"
                    data-toggle="dropdown"
                  >
                    Reference
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuReference"
                  >
                    <a className="dropdown-item" href="/">
                      Relevance
                    </a>
                    <a className="dropdown-item" href="/">
                      Name, A to Z
                    </a>
                    <a className="dropdown-item" href="/">
                      Name, Z to A
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">
                      Price, low to high
                    </a>
                    <a className="dropdown-item" href="/">
                      Price, high to low
                    </a>
                  </div>
                </div>
              </div>

              <div className="row">
                {
                  this.state.products.map(
                    product =>
                      <div className="col-sm-6 col-lg-3 text-center item mb-4" key={product.product_id}>
                        <span className="tag">{product.p_brand}</span>
                        <a href="shop-single.html">
                          {" "}
                          <img src="assets/images/product_01.png" alt="" />
                        </a>
                        <h3 className="text-dark">
                          <a href="shop-single.html">{product.p_name}</a>
                        </h3>
                        <p className="price">
                          <del> $55.00</del> &mdash; ${product.p_price}
                        </p>
                      </div>
                  )

                }

              </div>
              <div className="row mt-5">
                <div className="col-md-12 text-center">
                  <div className="site-block-27">
                    <ul>
                      <li>
                        <a href="/">&lt;</a>
                      </li>
                      <li className="active">
                        <span>1</span>
                      </li>
                      <li>
                        <a href="/">2</a>
                      </li>
                      <li>
                        <a href="/">3</a>
                      </li>
                      <li>
                        <a href="/">4</a>
                      </li>
                      <li>
                        <a href="/">5</a>
                      </li>
                      <li>
                        <a href="/">&gt;</a>
                      </li>
                    </ul>
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

export default ShopComponent;
