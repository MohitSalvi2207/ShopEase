import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Addtocart } from "../features/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Single() {
  let [pro, setPro] = useState([]);
  const navigate = useNavigate();
  const login = useSelector((state) => state.Login?.user);

  let id = useLocation().pathname.split("/")[2];
  let test = useLocation();
  const dispatch = useDispatch();
  console.log(test);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((pro) => {
        setPro(pro);
        console.log(pro);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (!login) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please login first!",
        allowOutsideClick: false,
      });
      navigate("/login");
    } else {
      dispatch(
        Addtocart({
          id: pro.id,
          thumbnail: pro.thumbnail,
          title: pro.title,
          price: pro.price,
          quantity: 1,
          total: pro.price,
        })
      );

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Product added to cart!",
        timer: 1500,
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/cart");
        }
      });
    }
  };
  return (
    <>
      <div
        class="right-sidebar-panel-content animated fadeInRight"
        tabindex="5003"
        style={{ overflow: " hidden; outline: none" }}
      ></div>
      <div class="banner-top container-fluid" id="home">
        {/* <!-- banner --> */}
        <div class="banner_inner">
          <div class="services-breadcrumb">
            <div class="inner_breadcrumb">
              <ul class="short">
                <li>
                  <Link to="/">Home</Link>
                  <i>|</i>
                </li>
                <li>Single Page </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!--//banner --> */}
      {/* <!--/shop--> */}
      <section class="banner-bottom-wthreelayouts py-lg-5 py-3">
        <div class="container">
          {/* <!---728x90---> */}
          <div class="inner-sec-shop pt-lg-4 pt-3">
            <div class="row">
              <div class="col-lg-4 single-right-left ">
                <div class="grid images_3_of_2">
                  <div class="flexslider1">
                    <ul className="slides d-flex gap-3 p-3">
                      <li
                        data-thumb="images/d2.jpg"
                        style={{ listStyle: "none" }}
                        className="border rounded shadow-sm overflow-hidden"
                      >
                        <div className="thumb-image position-relative">
                          <img
                            src={pro.thumbnail}
                            data-imagezoom={true}
                            className="img-fluid w-100 rounded transition"
                            alt="Product"
                            style={{
                              transition: "transform 0.3s ease-in-out",
                            }}
                            onMouseOver={(e) =>
                              (e.currentTarget.style.transform = "scale(1.05)")
                            }
                            onMouseOut={(e) =>
                              (e.currentTarget.style.transform = "scale(1)")
                            }
                          />
                        </div>
                      </li>
                    </ul>

                    {/* <ul style={{ display: "flex", gap: "10px", marginTop: "10px" ,padding:"10px"}}>
													<li data-thumb="images/d2.jpg" style={{ border: "1px solid grey", listStyle: "none" }}>
														<div class="thumb-image" style={{ width: "35%" }}> <img src={pro.images} data-imagezoom="true" class="img-fluid" alt=" " /> </div>
													</li>
													<li data-thumb="images/d1.jpg" style={{ border: "1px solid grey", listStyle: "none" }}>
														<div class="thumb-image" style={{ width: "35%" }}> <img src={pro.images} data-imagezoom="true" class="img-fluid" alt=" " /> </div>
													</li>
													<li data-thumb="images/d3.jpg" style={{ border: "1px solid grey", listStyle: "none" }}>
														<div class="thumb-image" style={{ width: "35%" }}> <img src={pro.images} data-imagezoom="true" class="img-fluid" alt=" " /> </div>
													</li>
												</ul> */}

                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 single-right-left simpleCart_shelfItem">
                <h3>{pro.title}</h3>
                <p>
                  <span class="item_price">{pro.price}</span>
                  <del>$1,199</del>
                </p>
                <div class="rating1">
                  <ul class="stars">
                    <li>
                      <a href="#">
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-star-half-o" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="description">
                  <h5>
                    Check delivery, payment options and charges at your location
                  </h5>
                  {/* <form action="#" method="post">
                    <input
                      class="form-control"
                      type="text"
                      name="Email"
                      placeholder="Please enter..."
                      required=""
                    />
                    <input type="submit" value="Check" />
                  </form> */}
                </div>
                <div class="color-quality">
                  {/* <div class="color-quality-right">
                    <h5>Quality :</h5>
                    <select
                      id="country1"
                      onchange="change_country(this.value)"
                      class="frm-field required sect"
                    >
                      <option value="null">5 Qty</option>
                      <option value="null">6 Qty</option>
                      <option value="null">7 Qty</option>
                      <option value="null">10 Qty</option>
                    </select>
                  </div> */}
                  <button
                    class="btn btn mt-3 p-2 "
                    style={{ backgroundColor: "#ff7629" }}
                  >
                    <Link
                      onClick={() => handleAddToCart()}
                      style={{ color: "black" }}
                    >
                      🛒 Add to Cart
                    </Link>
                  </button>
                </div>
                {/* <div class="occasional">
                  <h5>Types :</h5>
                  <div class="colr ert">
                    <label class="radio">
                      <input type="radio" name="radio" checked="" />
                      <i></i> Irayz Butterfly(Black)
                    </label>
                  </div>
                  <div class="colr">
                    <label class="radio">
                      <input type="radio" name="radio" />
                      <i></i> Irayz Butterfly (Grey)
                    </label>
                  </div>
                  <div class="colr">
                    <label class="radio">
                      <input type="radio" name="radio" />
                      <i></i> Irayz Butterfly (white)
                    </label>
                  </div>
                  <div class="clearfix"> </div>
                </div> */}
                <div class="occasion-cart">
                  <div class="googles single-item singlepage">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" value="_cart" />
                      <input type="hidden" name="add" value="1" />
                      <input
                        type="hidden"
                        name="googles_item"
                        value="Farenheit"
                      />
                      <input type="hidden" name="amount" value="575.00" />
                      {/* <button type="submit" class="googles-cart pgoogles-cart">
												Add to Cart
											</button> */}
                    </form>
                  </div>
                </div>
                <ul class="footer-social text-left mt-lg-4 mt-3">
                  <li>Share On : </li>
                  <li class="mx-2">
                    <Link to="#">
                      <span class="fab fa-facebook-f"></span>
                    </Link>
                  </li>
                  <li class="mx-2">
                    <Link to="#">
                      <span class="fab fa-twitter"></span>
                    </Link>
                  </li>
                  <li class="mx-2">
                    <Link to="#">
                      <span class="fab fa-google-plus-g"></span>
                    </Link>
                  </li>
                  <li class="mx-2">
                    <Link to="#">
                      <span class="fab fa-linkedin-in"></span>
                    </Link>
                  </li>
                  <li class="mx-2">
                    <Link to="#">
                      <span class="fas fa-rss"></span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="clearfix"> </div>
              {/* <!--/tabs--> */}
              <div class="responsive_tabs">
                <div id="horizontalTab">
                  {/* <ul class="resp-tabs-list">
										<li>Description</li>
										<li>Reviews</li>
										<li>Information</li>
									</ul> */}
                  <div class="resp-tabs-container">
                    {/* <!--/tab_one--> */}
                    <div class="tab1">
                      {/* <div class="single_page">
												<h6>Lorem ipsum dolor sit amet</h6>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
													blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
													ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
													magna aliqua.</p>
												<p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
													blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
													ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
													magna aliqua.</p>
											</div> */}
                    </div>
                    {/* <!--//tab_one--> */}
                    <div class="tab2">
                      {/* <div class="single_page">
												<div class="bootstrap-tab-text-grids">
													<div class="bootstrap-tab-text-grid">
														<div class="bootstrap-tab-text-grid-left">
															<img src="images/team1.jpg" alt=" " class="img-fluid" />
														</div>
														<div class="bootstrap-tab-text-grid-right">
															<ul>
																<li><a href="#">Admin</a></li>
																<li><a href="#"><i class="fa fa-reply-all" aria-hidden="true"></i> Reply</a></li>
															</ul>
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget.Ut enim ad minima veniam,
																quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
																autem vel eum iure reprehenderit.</p>
														</div>
														<div class="clearfix"> </div>
													</div>
													<div class="add-review">
														<h4>add a review</h4>
														<form action="#" method="post">
															<input class="form-control" type="text" name="Name" placeholder="Enter your email..." required="" />
															<input class="form-control" type="email" name="Email" placeholder="Enter your email..." required="" />
															<textarea name="Message" required=""></textarea>
															<input type="submit" value="SEND" />
														</form>
													</div>
												</div>
											</div> */}
                    </div>
                    {/* <div class="tab3">
											<div class="single_page">
												<h6>Irayz Butterfly Sunglasses  (Black)</h6>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
													blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
													ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
													magna aliqua.</p>
												<p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie
													blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt
													ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore
													magna aliqua.</p>
											</div>
										</div> */}
                  </div>
                </div>
              </div>
              {/* <!--//tabs--> */}
            </div>
          </div>
        </div>
        {/* <!---728x90---> */}
        <div class="container-fluid">
          {/* <!--/slide--> */}
          <div class="slider-img mid-sec mt-lg-5 mt-2 px-lg-5 px-3">
            {/* <!--//banner-sec--> */}
            {/* <h3 class="tittle-w3layouts text-left my-lg-4 my-3">Featured Products</h3> */}
            {/* <div class="mid-slider">
							<div class="owl-carousel owl-theme row">
								<div class="item">
									<div class="gd-box-info text-center">
										<div class="product-men women_two bot-gd">
											<div class="product-googles-info slide-img googles">
												<div class="men-pro-item">
													<div class="men-thumb-item">
														<img src="images/s5.jpg" class="img-fluid" alt="" />
														<div class="men-cart-pro">
															<div class="inner-men-cart-pro">
																<Link to="single" class="link-product-add-cart">Quick View</Link>
															</div>
														</div>
														<span class="product-new-top">New</span>
													</div>
													<div class="item-info-product">
														<div class="info-product-price">
															<div class="grid_meta">
																<div class="product_price">
																	<h4>
																		<Link to="single">Fastrack Aviator </Link>
																	</h4>
																	<div class="grid-price mt-2">
																		<span class="money ">$325.00</span>
																	</div>
																</div>
																<ul class="stars">
																	<li>
																		<Link to="#">
																			<i class="fa fa-star" aria-hidden="true"></i>
																		</Link>
																	</li>
																	<li>
																		<Link to="#">
																			<i class="fa fa-star" aria-hidden="true"></i>
																		</Link>
																	</li>
																	<li>
																		<Link to="#">
																			<i class="fa fa-star" aria-hidden="true"></i>
																		</Link>
																	</li>
																	<li>
																		<Link to="#">
																			<i class="fa fa-star-half-o" aria-hidden="true"></i>
																		</Link>
																	</li>
																	<li>
																		<Link to="#">
																			<i class="fa fa-star-o" aria-hidden="true"></i>
																		</Link>
																	</li>
																</ul>
															</div>
															<div class="googles single-item hvr-outline-out">
																<form action="#" method="post">
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="googles_item" value="Fastrack Aviator" />
																	<input type="hidden" name="amount" value="325.00" />
																	<button type="submit" class="googles-cart pgoogles-cart">
																		<i class="fas fa-cart-plus"></i>
																	</button>
																</form>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="item">
									<div class="gd-box-info text-center">
										<div class="product-men women_two bot-gd">
											<div class="product-googles-info slide-img googles">
												<div class="men-pro-item">
													<div class="men-thumb-item">
														<img src="images/s6.jpg" class="img-fluid" alt="" />
														<div class="men-cart-pro">
															<div class="inner-men-cart-pro">
																<a href="single.html" class="link-product-add-cart">Quick View</a>
															</div>
														</div>
														<span class="product-new-top">New</span>
													</div>
													<div class="item-info-product">

														<div class="info-product-price">
															<div class="grid_meta">
																<div class="product_price">
																	<h4>
																		<a href="single.html">MARTIN Aviator </a>
																	</h4>
																	<div class="grid-price mt-2">
																		<span class="money ">$425.00</span>
																	</div>
																</div>
																<ul class="stars">
																	<li>
																		<a href="#">
																			<i class="fa fa-star" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star-half-o" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star-o" aria-hidden="true"></i>
																		</a>
																	</li>
																</ul>
															</div>
															<div class="googles single-item hvr-outline-out">
																<form action="#" method="post">
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="googles_item" value="MARTIN Aviator" />
																	<input type="hidden" name="amount" value="425.00" />
																	<button type="submit" class="googles-cart pgoogles-cart">
																		<i class="fas fa-cart-plus"></i>
																	</button>
																</form>

															</div>
														</div>

													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="item">
									<div class="gd-box-info text-center">
										<div class="product-men women_two bot-gd">
											<div class="product-googles-info slide-img googles">
												<div class="men-pro-item">
													<div class="men-thumb-item">
														<img src="images/s7.jpg" class="img-fluid" alt="" />
														<div class="men-cart-pro">
															<div class="inner-men-cart-pro">
																<a href="single.html" class="link-product-add-cart">Quick View</a>
															</div>
														</div>
														<span class="product-new-top">New</span>
													</div>
													<div class="item-info-product">

														<div class="info-product-price">
															<div class="grid_meta">
																<div class="product_price">
																	<h4>
																		<a href="single.html">Royal Son Aviator </a>
																	</h4>
																	<div class="grid-price mt-2">
																		<span class="money ">$425.00</span>
																	</div>
																</div>
																<ul class="stars">
																	<li>
																		<a href="#">
																			<i class="fa fa-star" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star-half-o" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star-o" aria-hidden="true"></i>
																		</a>
																	</li>
																</ul>
															</div>
															<div class="googles single-item hvr-outline-out">
																<form action="#" method="post">
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="googles_item" value="Royal Son Aviator" />
																	<input type="hidden" name="amount" value="425.00" />
																	<button type="submit" class="googles-cart pgoogles-cart">
																		<i class="fas fa-cart-plus"></i>
																	</button>
																</form>

															</div>
														</div>

													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="item">
									<div class="gd-box-info text-center">
										<div class="product-men women_two bot-gd">
											<div class="product-googles-info slide-img googles">
												<div class="men-pro-item">
													<div class="men-thumb-item">
														<img src="images/s8.jpg" class="img-fluid" alt="" />
														<div class="men-cart-pro">
															<div class="inner-men-cart-pro">
																<a href="single.html" class="link-product-add-cart">Quick View</a>
															</div>
														</div>
														<span class="product-new-top">New</span>
													</div>
													<div class="item-info-product">

														<div class="info-product-price">
															<div class="grid_meta">
																<div class="product_price">
																	<h4>
																		<a href="single.html">Irayz Butterfly </a>
																	</h4>
																	<div class="grid-price mt-2">
																		<span class="money ">$281.00</span>
																	</div>
																</div>
																<ul class="stars">
																	<li>
																		<a href="#">
																			<i class="fa fa-star" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star-half-o" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star-o" aria-hidden="true"></i>
																		</a>
																	</li>
																</ul>
															</div>
															<div class="googles single-item hvr-outline-out">
																<form action="#" method="post">
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="googles_item" value="Irayz Butterfly" />
																	<input type="hidden" name="amount" value="281.00" />
																	<button type="submit" class="googles-cart pgoogles-cart">
																		<i class="fas fa-cart-plus"></i>
																	</button>
																</form>

															</div>
														</div>

													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="item">
									<div class="gd-box-info text-center">
										<div class="product-men women_two bot-gd">
											<div class="product-googles-info slide-img googles">
												<div class="men-pro-item">
													<div class="men-thumb-item">
														<img src="images/s9.jpg" class="img-fluid" alt="" />
														<div class="men-cart-pro">
															<div class="inner-men-cart-pro">
																<a href="single.html" class="link-product-add-cart">Quick View</a>
															</div>
														</div>
														<span class="product-new-top">New</span>
													</div>
													<div class="item-info-product">

														<div class="info-product-price">
															<div class="grid_meta">
																<div class="product_price">
																	<h4>
																		<a href="single.html">Jerry Rectangular </a>
																	</h4>
																	<div class="grid-price mt-2">
																		<span class="money ">$525.00</span>
																	</div>
																</div>
																<ul class="stars">
																	<li>
																		<a href="#">
																			<i class="fa fa-star" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star-half-o" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star-o" aria-hidden="true"></i>
																		</a>
																	</li>
																</ul>
															</div>
															<div class="googles single-item hvr-outline-out">
																<form action="#" method="post">
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="googles_item" value="Jerry Rectangular " />
																	<input type="hidden" name="amount" value="525.00" />
																	<button type="submit" class="googles-cart pgoogles-cart">
																		<i class="fas fa-cart-plus"></i>
																	</button>
																</form>

															</div>
														</div>

													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="item">
									<div class="gd-box-info text-center">
										<div class="product-men women_two bot-gd">
											<div class="product-googles-info slide-img googles">
												<div class="men-pro-item">
													<div class="men-thumb-item">
														<img src="images/s10.jpg" class="img-fluid" alt="" />
														<div class="men-cart-pro">
															<div class="inner-men-cart-pro">
																<a href="single.html" class="link-product-add-cart">Quick View</a>
															</div>
														</div>
														<span class="product-new-top">New</span>
													</div>
													<div class="item-info-product">

														<div class="info-product-price">
															<div class="grid_meta">
																<div class="product_price">
																	<h4>
																		<a href="single.html">Herdy Wayfarer </a>
																	</h4>
																	<div class="grid-price mt-2">
																		<span class="money ">$325.00</span>
																	</div>
																</div>
																<ul class="stars">
																	<li>
																		<a href="#">
																			<i class="fa fa-star" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star-half-o" aria-hidden="true"></i>
																		</a>
																	</li>
																	<li>
																		<a href="#">
																			<i class="fa fa-star-o" aria-hidden="true"></i>
																		</a>
																	</li>
																</ul>
															</div>
															<div class="googles single-item hvr-outline-out">
																<form action="#" method="post">
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="googles_item" value="Royal Son Aviator" />
																	<input type="hidden" name="amount" value="425.00" />
																	<button type="submit" class="googles-cart pgoogles-cart">
																		<i class="fas fa-cart-plus"></i>
																	</button>


																</form>

															</div>
														</div>

													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> */}
          </div>
          {/* <!--//slider--> */}
        </div>
      </section>
    </>
  );
}
