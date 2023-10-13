import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductServices from "../services/ProductServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

class BannerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    ProductServices.getProducts()
      .then((res) => {
        this.setState({ products: res.data });
      })
      .catch((error) => {
        console.error("Lỗi khi tải sản phẩm:", error);
      });
  }
  viewProduct(productId) {
    this.props.history.push(`/single-product/${productId}`);
  }
  render() {
    return (
      <>
        <div className="site-wrap">
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
                {this.state.products.map((product) => (
                  <div
                    className="col-sm-6 col-lg-3 text-center item mb-4"
                    key={product.productId}
                  >
                    <div onClick={() => this.viewProduct(product.productId)}>
                      {product.isSale === 1 ? (
                        <span className="tag">Sale</span>
                      ) : null}{" "}
                      {product.imageUrls.length > 0 && (
                        <img
                          src={`assets/images/${product.imageUrls[0]}`}
                          alt={`Imagee 0`}
                        />
                      )}
                      <h3 className="text-dark">
                        <a href="shop-single.html">{product.name}</a>
                      </h3>
                      <p className="price">
                        <del>${product.price}</del> — ${product.price}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn btn-secondary btn-md px-4 "
                      style={{ backgroundColor: "#51eaea", border: "none" }}
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Add to wishlist!"
                      onClick={() => this.addWishListProduct(product.productId)}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-secondary btn-md px-4 btn-custom"
                      style={{ backgroundColor: "#51eaea", border: "none" }}
                      data-tooltip-id="my-tooltip-2"
                      data-tooltip-content="Add to cart!"
                      onClick={() => this.addProductToCart(product.productId)}
                    >
                      <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="row mt-5">
                <div className="col-12 text-center">
                  <Link to="/shop" className="btn btn-primary px-4 py-3">
                    View All Products
                  </Link>
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
