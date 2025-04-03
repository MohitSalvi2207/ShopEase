import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
// import { Link, useLocation } from 'react-router-dom'
import { useParams, Link, data } from "react-router-dom";
import { getcategories, getProductCategory } from "./apis";
import { NavDropdown } from "react-bootstrap";

export default function Product() {
  let [cat, setCat] = useState([]);
  // let [shop, setShop] = useState([]);
  // let name = useLocation().pathname.split("/")[2];
  // console.log(name);
  let { name } = useParams();

  const {
   data:categoriesdata,
   isLoading,
   error,
  } = useQuery({
    queryKey: ["categoriesdata", name], 
    queryFn: () => getProductCategory(name), 
  });

  console.log(categoriesdata);

    const categories = useQuery({
      queryKey: ["categoriesdata"],
      queryFn: getcategories,
      refetchInterval: 50000,
    });
  
//   useEffect(() => {
//       fetch(`https://dummyjson.com/products/category/${name}`).then((response) => {
//           return response.json();
//       }).then((shop) => {
//           setShop(shop[
//               "products"
//           ]);
//           console.log(shop.products);
//       });
//   }, [name]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => {
        return response.json();
      })
      .then((cat) => {
        setCat(cat);
        console.log(cat);
      });
  }, []);

  return (
    <>
      <div class="inner-sec-shop px-lg-4 px-3">
        <h3 class="tittle-w3layouts my-lg-4 mt-3">New Arrivals for you </h3>
        {/* <!---728x90---> */}
        <div class="row">
          {/* <!-- product left --> */}
          <div class="side-bar col-lg-3">
            {/* <div class="search-hotel">
              <h3 class="agileits-sear-head">Search Here..</h3>
              <form action="#" method="post">
                <input
                  class="form-control"
                  type="search"
                  name="search"
                  placeholder="Search here..."
                  required=""
                />
                <button class="btn1">
                  <i class="fas fa-search"></i>
                </button>
                <div class="clearfix"> </div>
              </form>
            </div> */}
            {/* <!-- price range --> */}
            <div class="range">
              <h3 class="agileits-sear-head">Price range</h3>
              <ul class="dropdown-menu6">
                <li>
                  <div id="slider-range"></div>
                  <input
                    type="text"
                    id="amount"
                    style={{
                      border: "0",
                      color: "#ffffff",
                      fontWeight: "normal",
                    }}
                  />
                </li>
              </ul>
            </div>
            {/* <!-- //price range --> */}
            {/* <!--preference --> */}
            <div class="left-side">
                  <h3 class="agileits-sear-head">Deal Offer On</h3>
                  <NavDropdown
                    title="Product"
                    id="nav-dropdown"
                    style={{ listStyle: "none" }}
                  >
                    <ul style={{ padding: "10px" }}>
                      {categories.isPending ? (
                        <h1>Loading...</h1>
                      ) : (
                        categories.data.map((value) => {
                          return (
                            <>
                              <li>
                                <Link
                                  to={`/product/${value.name}`}
                                  style={{ color: "black" }}
                                >
                                  {value.name}
                                </Link>
                              </li>
                            </>
                          );
                        })
                      )}
                    </ul>
                  </NavDropdown>
                </div>
            {/* <!-- // preference --> */}
            {/* <!-- discounts --> */}
              {/* <div class="left-side">
                <h3 class="agileits-sear-head">Discount</h3>
                <ul>
                  <li>
                    <input type="checkbox" class="checked" />
                    <span class="span">5% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" class="checked" />
                    <span class="span">10% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" class="checked" />
                    <span class="span">20% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" class="checked" />
                    <span class="span">30% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" class="checked" />
                    <span class="span">50% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" class="checked" />
                    <span class="span">60% or More</span>
                  </li>
                </ul>
              </div> */}
            {/* <!-- //discounts --> */}
            {/* <!-- reviews --> */}
            <div class="customer-rev left-side">
              <h3 class="agileits-sear-head">Customer Review</h3>
              <ul>
                <li>
                  <Link to="#">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <span>5.0</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    <span>4.0</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    <span>3.5</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    <span>3.0</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    <span>2.5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="left-ads-display col-lg-9">
            <div class="row">
              {/* <!-- /womens --> */}
              {isLoading ? (<h3>Loading...</h3>) : (
              categoriesdata.map((value) => {
                return (
                  <>
                    <div class="col-md-3 product-men women_two shop-gd">
                      <div class="product-googles-info googles">
                        <div class="men-pro-item">
                          <div class="men-thumb-item">
                            <img
                              src={value.thumbnail}
                              class="img-fluid"
                              alt=""
                            />
                            <div class="men-cart-pro">
                              <div class="inner-men-cart-pro">
                                <Link
                                  to={`../single/${value.id}`}
                                  class="link-product-add-cart"
                                >
                                  Quick View
                                </Link>
                              </div>
                            </div>
                            <span class="product-new-top">New</span>
                          </div>
                          <div class="item-info-product">
                            <div class="info-product-price">
                              <div class="grid_meta">
                                <div class="product_price">
                                  <h4>{value.category}</h4>
                                  <div class="grid-price mt-2">
                                    <span class="money ">{value.price}</span>
                                  </div>
                                </div>
                                <ul class="stars">
                                  <li>
                                    <a href="#">
                                      <i
                                        class="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i
                                        class="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i
                                        class="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i
                                        class="fa fa-star-half-o"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i
                                        class="fa fa-star-o"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="googles single-item hvr-outline-out">
                                <form action="#" method="post">
                                  <input
                                    type="hidden"
                                    name="cmd"
                                    value="_cart"
                                  />
                                  <input type="hidden" name="add" value="1" />
                                  <input
                                    type="hidden"
                                    name="googles_item"
                                    value="Opium (Grey)"
                                  />
                                  <input
                                    type="hidden"
                                    name="amount"
                                    value="325.00"
                                  />
                                  <button
                                    type="submit"
                                    class="googles-cart pgoogles-cart"
                                  >
                                    <i class="fas fa-cart-plus"></i>
                                  </button>
                                </form>
                              </div>
                            </div>
                            <div class="clearfix"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
