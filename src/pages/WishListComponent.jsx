import React, { Component } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleInfo,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import WishListServices from "../services/WishListServices";

const accountId = 4;
class WishListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlists: [],
    };
  }

  componentDidMount() {
    WishListServices.wishlist(accountId).then((res) => {
      this.setState({ wishlists: res.data });
    });
  }

  deleteWishListProduct(accountId, productId) {
    return function (event) {
      event.preventDefault();
      WishListServices.deleteWishlistProduct(accountId, productId)
        .then((response) => {
          toast.success("Delete product succesfully");
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
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
                  <Link to="/home">Home</Link>{" "}
                  <span className="mx-2 mb-0">/</span>
                  <strong className="text-black">WishList</strong>
                </div>
              </div>
            </div>
          </div>

          <>
            <section>
              <div className="container py-5">
                {this.state.wishlists.map((wishlistItem) => (
                  <div
                    className="row justify-content-center"
                    key={wishlistItem.productId}
                  >
                    <div className="col-md-12 col-xl-10">
                      <div className="card shadow-0 border rounded-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                              <div
                                className=" hover-zoom ripple rounded ripple-surface"
                                style={{ height: "188px", width: "220px" }}
                              >
                                {wishlistItem.imageUrls.length > 0 && (
                                  <img
                                    src={`../assets/images/${wishlistItem.imageUrls[0]}`}
                                    alt=""
                                    className="w-100"
                                    style={{ height: "100%" }}
                                  />
                                )}
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-6">
                              <div className="">
                                <h5
                                  onClick={() =>
                                    this.viewProduct(wishlistItem.productId)
                                  }
                                >
                                  {wishlistItem.name}
                                </h5>

                                <div className="mt-1 mb-0 text-muted small">
                                  <span className="text-primary"> • </span>

                                  <span>{wishlistItem.brand}</span>
                                </div>

                                <p className=" mb-4 mb-md-0">
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have
                                  suffered alteration in some form, by injected
                                  humour, or randomised words which don't look
                                  even slightly believable.
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                              <div className="d-flex flex-row align-items-center mb-1">
                                <h4 className="mb-1 me-1">
                                  ${wishlistItem.price}
                                </h4>
                              </div>
                              <h6 className="text-success">Free shipping</h6>
                              <div className="d-flex flex-column mt-4">
                                <button
                                  className="btn btn-outline-primary btn-sm"
                                  type="button"
                                  onClick={() =>
                                    this.viewProduct(wishlistItem.productId)
                                  }
                                >
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </button>
                                <button
                                  className="btn btn-outline-primary btn-sm mt-2"
                                  type="button"
                                >
                                  <FontAwesomeIcon icon={faCartShopping} />
                                </button>
                                <button
                                  className="btn btn-outline-primary btn-sm mt-2"
                                  type="button"
                                  onClick={this.deleteWishListProduct(
                                    accountId,
                                    wishlistItem.productId
                                  )}
                                >
                                  <FontAwesomeIcon icon={faTrash} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>

          <hr className="container" />
        </div>
      </>
    );
  }
}

export default WishListComponent;