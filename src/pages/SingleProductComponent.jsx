import React, { Component } from "react";
import ProductServices from "../services/ProductServices";
import { Link } from "react-router-dom/cjs/react-router-dom";
import CartServices from "../services/CartServices";
import { toast } from "react-toastify";

class SingleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: this.props.match.params.productId,
      product: {},
      imageUrls: [],
    };
  }

  componentDidMount() {
    ProductServices.getProductById(this.state.productId).then((res) => {
      const productData = res.data;
      const imageUrls = productData.imageUrls || []; // Replace 'imageUrls' with the correct field from your API data
      this.setState({ product: productData, imageUrls });
    });
  }
  addProductToCart(product_id) {
    const accountId = 4; // Replace with the actual account ID
    CartServices.addToCart(accountId, product_id, 1)
      .then((response) => {
        console.log("Product added to cart:", response.data);
        toast.success("Product added to cart successfully!");
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
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
                  <Link to="/home">Home</Link>
                  <span className="mx-2 mb-0">/</span>
                  <Link to="/shop">Store</Link>
                  <span className="mx-2 mb-0">/</span>
                  <span className="text-black">
                    {this.state.product.category_name} /
                  </span>
                  <strong className="text-black">
                    &nbsp;
                    {this.state.product.name}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section">
            <div className="container">
              <div className="row">
                <div
                  id="demo"
                  className="carousel slide col-md-5 mr-auto"
                  data-bs-ride="carousel"
                  data-interval="1000"
                >
                  <div className="carousel-indicators">
                    {this.state.imageUrls.map((imageUrls, index) => (
                      <button
                        key={index}
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide-to={index}
                        className={
                          index === 0 ? "active img-fluid" : "img-fluid"
                        }
                        style={{ backgroundColor: "black" }}
                      ></button>
                    ))}
                  </div>

                  <div className="carousel-inner">
                    {this.state.imageUrls.map((imageUrls, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <img
                          src={`../assets/images/${imageUrls}`}
                          alt={`Imagee ${index + 1} ${imageUrls + 1}`}
                          className="d-block img-fluid w-100"
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      style={{ backgroundColor: "black" }}
                    ></span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      style={{ backgroundColor: "black" }}
                    ></span>
                  </button>
                </div>
                <div className="col-md-6">
                  <h2 className="text-black">{this.state.product.name}</h2>
                  <p>{this.state.product.instruction}</p>

                  <p>
                    <del>$95.00</del>
                    <strong className="text-primary h4">$55.00</strong>
                  </p>

                  <div className="mb-5">
                    <div
                      className="input-group mb-3"
                      style={{ maxWidth: "220px" }}
                    >
                      <div className="input-group-prepend">
                        <button
                          className="btn btn-outline-primary js-btn-minus"
                          type="button"
                        >
                          &minus;
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control text-center"
                        value="1"
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-outline-primary js-btn-plus"
                          type="button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <p>
                    <button
                      href="cart.html"
                      className="buy-now btn btn-sm height-auto px-4 py-2 btn-primary"
                      onClick={() =>
                        this.addProductToCart(this.state.product.productId)
                      }
                    >
                      Add To Cart
                    </button>
                  </p>

                  <div className="mt-5">
                    <ul
                      className="nav nav-pills mb-3 custom-pill"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="pills-home-tab"
                          data-toggle="pill"
                          href="#pills-home"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Describe
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-profile-tab"
                          data-toggle="pill"
                          href="#pills-profile"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Product Information
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        <table className="table custom-table">
                          {/* <thead>
                            <th>Material</th>
                            <th>Description</th>
                          </thead> */}
                          <tbody>
                            <tr>
                              <th scope="row">Object</th>
                              <td>{this.state.product.object}</td>
                            </tr>
                            <tr>
                              <th scope="row">Guide</th>
                              <td>{this.state.product.guide}</td>
                            </tr>
                            <tr>
                              <th scope="row">Store</th>
                              <td>{this.state.product.store}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        <table className="table custom-table">
                          <tbody>
                            <tr>
                              <th scope="row">Store</th>
                              <td>{this.state.product.store}</td>
                            </tr>
                            <tr>
                              <th scope="row">Vitue</th>
                              <td>{this.state.product.virtue}</td>
                            </tr>
                            <tr>
                              <th scope="row">Made in</th>
                              <td>{this.state.product.madeIn}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="site-section bg-secondary bg-image"
            style={{ backgroundImage: `url('assets/images/bg_2.jpg')` }}
          >
            <div className="container">
              <div className="row align-items-stretch">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <a
                    href="/"
                    className="banner-1 h-100 d-flex"
                    style={{ backgroundImage: `url('assets/images/bg_1.jpg')` }}
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
                    style={{ backgroundImage: `url('assets/images/bg_2.jpg')` }}
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

export default SingleComponent;
