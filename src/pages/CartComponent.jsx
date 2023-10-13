import React, { Component } from "react";
import CartServices from "../services/CartServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { toast } from "react-toastify";
const accountId = 4;
class CartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [],
    };
  }

  componentDidMount() {
    CartServices.getListCartByAccountId(accountId)
      .then((res) => {
        this.setState({ carts: res.data });
      })
      .catch((error) => {
        console.error("Lỗi khi tải giỏ hàng:", error);
      });
  }
  viewProduct(productId) {
    this.props.history.push(`/single-product/${productId}`);
  }

  calculateTotalPrice() {
    const { carts } = this.state;
    let total = 0;
    for (const cartItem of carts) {
      total += cartItem.productDetail.price * cartItem.quantity;
    }
    return total;
  }

  handleRemoveFromCart = (cartId) => {
    CartServices.removeFromCart(cartId)
      .then(() => {
        const updatedCarts = this.state.carts.filter(
          (cartItem) => cartItem.cartId !== cartId
        );
        this.setState({ carts: updatedCarts });
        toast.success("Delete product cart successfully!");
      })
      .catch((error) => {
        console.error("Lỗi xóa sản phẩm khỏi giỏ hàng:", error);
      });
  };

  handleQuantityChange = (cartId, newQuantity) => {
    // Find the cart item to update in the state
    const updatedCarts = this.state.carts.map((cartItem) => {
      if (cartItem.cartId === cartId) {
        // Update the quantity for the specified cart item
        return {
          ...cartItem,
          quantity: newQuantity,
        };
      }
      return cartItem;
    });

    // Update the state with the new cart items
    this.setState({ carts: updatedCarts });
  };

  // Function to update the cart in the database
  handleUpdateCart = () => {
    const updatedCartData = this.state.carts.map((cartItem) => {
      return {
        cartId: cartItem.cartId,
        quantity: cartItem.quantity,
      };
    });

    // Send a request to update the cart in the database
    CartServices.updateCart(updatedCartData)
      .then(() => {
        toast.success("Cart updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating cart:", error);
      });
  };
  render() {
    const { carts } = this.state;

    return (
      <>
        <div class="site-wrap">
          <div className="bg-light py-3">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-0">
                  <Link to="/home">Home</Link>
                  <span className="mx-2 mb-0">/</span>
                  <Link to="/shop">Cart</Link>
                </div>
              </div>
            </div>
          </div>
          <section class="section-content padding-y mt-2">
            <div class="container">
              <div class="row">
                <main class="col-md-9">
                  <div class="card">
                    {carts.length === 0 ? (
                      <div class="card-body text-center">
                        <h3>Your cart is empty.</h3>
                      </div>
                    ) : (
                      <table class="table table-borderless table-shopping-cart">
                        <thead class="text-muted">
                          <tr class="small text-uppercase">
                            <th scope="col">Product</th>
                            <th scope="col" width="120">
                              Quantity
                            </th>
                            <th scope="col" width="120">
                              Price
                            </th>
                            <th scope="col" width="120">
                              Total
                            </th>
                            <th scope="col" class="text-left" width="120">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.carts.map((cartItem) => (
                            <tr key={cartItem.productId}>
                              <td>
                                <div
                                  class="media"
                                  onClick={() =>
                                    this.viewProduct(
                                      cartItem.productDetail.productId
                                    )
                                  }
                                >
                                  <img
                                    src={`../assets/images/${cartItem.productDetail.imageUrls[0]}`}
                                    class="img-sm"
                                    alt=""
                                  />
                                  <div class="media-body ml-2">
                                    <h5 class="title">
                                      {cartItem.productDetail.name}
                                    </h5>
                                    <h6 class="small text-muted">
                                      {cartItem.productDetail.brand}
                                    </h6>
                                    <p class="small text-muted">
                                      {cartItem.productDetail.category_name}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <input
                                  type="number"
                                  className="form-control"
                                  value={cartItem.quantity}
                                  onChange={(e) =>
                                    this.handleQuantityChange(
                                      cartItem.cartId,
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <div class="price-wrap pt-2">
                                  <var class="price ">
                                    $ {cartItem.productDetail.price}
                                  </var>
                                  <br />
                                </div>
                              </td>
                              <td>
                                <div class="price-wrap pt-2">
                                  <var class="price ">
                                    $
                                    {cartItem.productDetail.price *
                                      cartItem.quantity}
                                  </var>
                                  <br />
                                </div>
                              </td>
                              <td class="text-left">
                                <button
                                  title=""
                                  href="/"
                                  class="btn btn-light "
                                >
                                  <FontAwesomeIcon icon={faHeart} />
                                </button>
                                &nbsp;
                                <button
                                  href="/"
                                  class="btn btn-light btn-round"
                                  onClick={() =>
                                    this.handleRemoveFromCart(cartItem.cartId)
                                  }
                                >
                                  <FontAwesomeIcon icon={faTrash} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                    <div class="card-body border-top">
                      <button
                        onClick={this.handleUpdateCart} // Call the update function when the button is clicked
                        className="btn btn-primary float-md-right"
                        style={{ backgroundColor: "#0072bc" }}
                      >
                        Update Cart
                      </button>
                      <Link to="/shop" className="btn btn-light">
                        <i className="fa fa-chevron-left"></i> Continue shopping
                      </Link>
                    </div>
                  </div>

                  <div
                    class="alert mt-3"
                    style={{ backgroundColor: "#0072bc" }}
                  >
                    <p class="icontext text-white">
                      <i class="icon text-success fa fa-truck"></i> Free
                      Delivery within 1-2 weeks
                    </p>
                  </div>
                </main>
                <aside class="col-md-3">
                  <div class="card mb-3">
                    <div class="card-body">
                      <form>
                        <div class="form-group">
                          <label>Have coupon?</label>
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              name=""
                              placeholder="Coupon code"
                            />
                            <span class="input-group-append">
                              <button
                                class="btn btn-primary"
                                style={{ backgroundColor: "#0072bc" }}
                              >
                                Apply
                              </button>
                            </span>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <dl class="dlist-align">
                        <dt>Total price:</dt>
                        <dd class="text-right">
                          <p>$ {this.calculateTotalPrice()}</p>
                        </dd>
                      </dl>
                      <dl class="dlist-align">
                        <dt>Discount:</dt>
                        <dd class="text-right">$ 658</dd>
                      </dl>
                      <dl class="dlist-align">
                        <dt>Total:</dt>
                        <dd class="text-right  h5">
                          <strong>${this.calculateTotalPrice()}</strong>
                        </dd>
                      </dl>
                      <hr />
                      <p class="text-center mb-3">
                        <img src="assets/images/momo.png" height="25" alt="" />
                        &nbsp;
                        <img src="assets/images/vnpay.png" height="25" alt="" />
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </div>
        <hr />
      </>
    );
  }
}

export default CartComponent;
