import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductServices from "../services/ProductServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { toast } from "react-toastify";

class ShopComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    ProductServices.getProducts().then((res) => {
      this.setState({ products: res.data });
    });
  }
  addWishListProduct(product_id) {
    const accountId = 3; // Replace with the actual account ID
    ProductServices.addToWishlist(accountId, product_id)
      .then((response) => {
        console.log("Product added to wishlist:", response.data);
        toast.success("Product added to wishlist successfully!");
      })
      .catch((error) => {
        console.error("Error adding product to wishlist:", error);
      });
  }
  viewProduct(productId) {
    this.props.history.push(`/single-product/${productId}`);
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
                  <strong className="text-black">Store</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section">
            <div className="container">
              <hr />
              <ReactTooltip id="my-tooltip" type="error" place="left" />
              <ReactTooltip id="my-tooltip-2" type="error" place="right" />

              <div className="row">
                {this.state.products.map((product) => (
                  <div
                    className="col-sm-3 col-lg-3 text-center item mb-4"
                    key={product.productId}
                  >
                    <span className="tag">{product.brand}</span>
                    <a href="shop-single.html">
                      {product.imageUrls.length > 0 && (
                        <img
                          src={`assets/images/${product.imageUrls[0]}`}
                          alt={`Imagee 0`}
                        />
                      )}
                    </a>
                    <h3
                      className="text-dark "
                      style={{ backgroundColor: "transparent" }}
                    >
                      <button
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                        onClick={() => this.viewProduct(product.productId)}
                      >
                        {product.name}
                      </button>
                    </h3>
                    <h4 className="price">${product.price}</h4>
                    <h4 className="price">Category: {product.category_name}</h4>
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
                    >
                      <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                  </div>
                ))}
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
        </div>
      </>
    );
  }
}

export default ShopComponent;
