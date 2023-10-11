import React, { Component } from "react";
import CartServices from "../services/CartServices";
const accountId = 4;
class CartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [],
    };
  }

  componentDidMount() {
    CartServices.getListCartByAccountId(accountId).then((res) => {
      this.setState({ carts: res.data });
    });
  }

  render() {
    return (
      <>
        <div class="site-wrap">
          <section class="section-pagetop bg">
            <div class="container">
              <h2 class="title-page text-center m-5">Shopping cart</h2>
            </div>
          </section>

          <section class="section-content padding-y">
            <div class="container">
              <div class="row">
                <main class="col-md-9">
                  <div class="card">
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
                          <th scope="col" class="text-right" width="200"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.carts.map((cartItem) => (
                          <tr key={cartItem.productId}>
                            <td>
                              <div class="media">
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
                              />
                            </td>
                            <td>
                              <div class="price-wrap pt-2">
                                <var class="price ">
                                  $ {cartItem.productDetail.price}
                                </var>
                                <br />
                                {/* <small class="text-muted">
                                  $ {cartItem.productDetail.price}
                                </small> */}
                              </div>
                            </td>
                            <td>
                              <div class="price-wrap pt-2">
                                <var class="price ">
                                  $ {cartItem.productDetail.price}
                                </var>
                                <br />
                              </div>
                            </td>
                            <td class="text-right">
                              <a
                                data-original-title="Save to Wishlist"
                                title=""
                                href="/"
                                class="btn btn-light mr-2"
                                data-toggle="tooltip"
                              >
                                <i class="fa fa-heart"></i>
                              </a>
                              <a href="/" class="btn btn-light btn-round">
                                Remove
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <div class="card-body border-top">
                      <a href="/" class="btn btn-primary float-md-right">
                        Make Purchase <i class="fa fa-chevron-right"></i>
                      </a>
                      <a href="/" class="btn btn-light">
                        <i class="fa fa-chevron-left"></i> Continue shopping
                      </a>
                    </div>
                  </div>

                  <div class="alert alert-success mt-3">
                    <p class="icontext">
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
                              <button class="btn btn-primary">Apply</button>
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
                        <dd class="text-right">USD 568</dd>
                      </dl>
                      <dl class="dlist-align">
                        <dt>Discount:</dt>
                        <dd class="text-right">USD 658</dd>
                      </dl>
                      <dl class="dlist-align">
                        <dt>Total:</dt>
                        <dd class="text-right  h5">
                          <strong>$1,650</strong>
                        </dd>
                      </dl>
                      <hr />
                      <p class="text-center mb-3">
                        <img
                          src="assets/images/misc/payments.png"
                          height="26"
                          alt=""
                        />
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default CartComponent;
