import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faEnvelope,
  faHeart,
  faHouse,
  faList,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import CategoryServices from "../services/CategoryServices";

// const accountId = 3;

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    CategoryServices.getCategoryType()
      .then((res) => {
        this.setState({
          categories: res.data,
        });
        console.log(this.state.categories);
      })
      .catch((error) => {
        console.error("Lỗi khi tải sản phẩm:", error);
      });
  }

  viewProduct(category_id) {
    this.props.history.push(`/category/${category_id}`);
  }
  render() {
    return (
      <>
        <div className="site-wrap">
          <div className="site-navbar py-2">
            <div className="search-wrap">
              <div className="container">
                <a href="/" className="search-close js-search-close">
                  <span className="icon-close2"></span>
                </a>
                <form action="#" method="post">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search keyword and hit enter..."
                  />
                </form>
              </div>
            </div>

            <div className="container">
              <div className="d-flex align-items-center justify-content-between">
                <div className="logo">
                  <div className="site-logo px">
                    <Link to="home" className="js-logo-clone">
                      Pharma
                    </Link>
                  </div>
                </div>
                <div className="main-nav d-none d-lg-block">
                  <nav
                    className="site-navigation text-right text-md-center"
                    role="navigation"
                  >
                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                      <li className="">
                        <FontAwesomeIcon icon={faHouse} />
                        <Link to="/home">Home</Link>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faStore} />
                        <Link to="/shop">Store</Link>
                      </li>

                      <li class="has-children">
                        <FontAwesomeIcon icon={faList} />

                        <a href="/">Dropdown</a>
                        <ul class="dropdown">
                          {this.state.categories.map((category) => (
                            <li key={category.category_id}>
                              <button
                                onClick={() =>
                                  this.viewProduct(category.category_id)
                                }
                              >
                                {category.category_name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCircleInfo} />
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="icons">
                  <Link
                    to="/cart"
                    className="icons-btn d-inline-block js-search-open"
                  >
                    <span className="icon-search"></span>
                  </Link>
                  <Link to="/wishlist" className="icons-btn d-inline-block bag">
                    <span>
                      <FontAwesomeIcon icon={faHeart} />
                    </span>
                    <span className="number">3</span>
                  </Link>
                  <Link to="/cart" className="icons-btn d-inline-block bag">
                    <span className="icon-shopping-bag"></span>
                    <span className="number">2</span>
                  </Link>
                  &nbsp;
                  <Link to="/cart" className="icons-btn d-inline-block bag">
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                  &nbsp;
                  <a
                    href="/"
                    className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
                  >
                    <span className="icon-menu"></span>
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

export default HeaderComponent;
