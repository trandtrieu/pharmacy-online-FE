import React, { Component } from "react";

class WishListComponent extends Component {
  render() {
    return (
      <>
        <div class="site-wrap">
          <div class="bg-light py-3">
            <div class="container">
              <div class="row">
                <div class="col-md-12 mb-0">
                  <a href="index.html">Home</a> <span class="mx-2 mb-0">/</span>
                  <strong class="text-black">WishList</strong>
                </div>
              </div>
            </div>
          </div>

          <div class="site-section">
            <div class="container">
              <div class="row mb-5">
                <form class="col-md-12" method="post">
                  <div class="site-blocks-table">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th class="product-thumbnail">Image</th>
                          <th class="product-name">Product</th>
                          <th class="product-price">Price</th>
                          <th class="product-total">Total</th>
                          <th class="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="product-thumbnail">
                            <img
                              src="assets/images/product_02.png"
                              alt=""
                              class="img-fluid"
                            />
                          </td>
                          <td class="product-name">
                            <h2 class="h5 text-black">Ibuprofen</h2>
                          </td>
                          <td>$55.00</td>
                          ``
                          <td>$49.00</td>
                          <td>
                            <a
                              href="/"
                              class="btn btn-primary height-auto btn-sm"
                            >
                              X
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <hr className="container" />
        </div>
      </>
    );
  }
}

export default WishListComponent;
