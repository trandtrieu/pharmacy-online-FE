import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductServices from "../services/ProductServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { toast } from "react-toastify";
import WishListServices from "../services/WishListServices";

class ShopComponent extends Component {
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
  addWishListProduct(product_id) {
    const accountId = 4; // Replace with the actual account ID
    WishListServices.addToWishlist(accountId, product_id)
      .then((response) => {
        console.log("Product added to wishlist:", response.data);
        toast.success("Product added to wishlist successfully!");
      })
      .catch((error) => {
        console.error("Error adding product to wishlist:", error);
      });
  }
  addProductToCart(product_id) {
    const accountId = 4; // Replace with the actual account ID
    ProductServices.addToCart(accountId, product_id, 1)
      .then((response) => {
        console.log("Product added to cart:", response.data);
        toast.error("Product added to cart successfully!");
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
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
              <ReactTooltip id="my-tooltip" type="error" place="left" />
              <ReactTooltip id="my-tooltip-2" type="error" place="right" />

              <div className="row">
                {this.state.products.map((product) => (
                  <div
                    className="col-sm-3 col-lg-3 col-md-3 text-center mb-3 item product-shop"
                    key={product.productId}
                  >
                    <div onClick={() => this.viewProduct(product.productId)}>
                      {product.isSale === 1 ? (
                        <span className="tag">Sale</span>
                      ) : null}
                      <div className="product-img">
                        {product.imageUrls.length > 0 && (
                          <img
                            src={`assets/images/${product.imageUrls[0]}`}
                            alt={`Imagee 0`}
                          />
                        )}
                      </div>
                      <h5 className="">
                        <button className="bg-transparent border-0">
                          {product.name}
                        </button>
                      </h5>
                      <h6 className="price">${product.price}</h6>
                    </div>
                    <button
                      type="button"
                      className="btn btn-secondary btn-md border-0 "
                      style={{ backgroundColor: "#51eaea" }}
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Add to wishlist!"
                      onClick={() => this.addWishListProduct(product.productId)}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-secondary btn-md btn-custom"
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
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShopComponent;
