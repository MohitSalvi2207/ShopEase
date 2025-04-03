import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <>
            {/* <div className="pull-right toggle-right-sidebar">
                <span className="fa title-open-right-sidebar tooltipstered fa-angle-double-right"></span>
            </div> */}

            <div id="right-sidebar" className="right-sidebar-notifcations nav-collapse">
                {/* <div className="bs-example bs-example-tabs right-sidebar-tab-notification" data-example-id="togglable-tabs"> */}

                    {/* <div id="w3lDemoBar" className="w3l-demo-bar"> */}
                        {/* <div className="demo-btns">
                            <a href="https://w3layouts.com/?p=42933">
                                <span className="w3l-icon -back">
                                    <span className="fa fa-arrow-left"></span>
                                </span>
                                <span className="w3l-text">Back</span>
                            </a>
                            <a href="https://w3layouts.com/?p=42933">
                                <span className="w3l-icon -download">
                                    <span className="fa fa-download"></span>
                                </span>
                                <span className="w3l-text">Download</span>
                            </a>
                            <a href="https://w3layouts.com/checkout/?add-to-cart=42933" className="no-margin-bottom-mobile">
                                <span className="w3l-icon -buy">
                                    <span className="fa fa-shopping-cart"></span>
                                </span>
                                <span className="w3l-text">Buy</span>
                            </a>
                        </div> */}
                        {/* <!---<div className="responsive-icons">
                            <a href="#url" className="desktop-mode">
                                <span className="w3l-icon -desktop">
                                    <span className="fa fa-desktop"></span>
                                </span>
                            </a>
                            <a href="#url" className="tablet-mode">
                                <span className="w3l-icon -tablet">
                                    <span className="fa fa-tablet"></span>
                                </span>
                            </a>
                            <a href="#url" className="mobile-mode no-margin-bottom">
                                <span className="w3l-icon -mobile">
                                    <span className="fa fa-mobile"></span>
                                </span>
                            </a>
                        </div>-->
                    </div> */}
                    <div className="right-sidebar-panel-content animated fadeInRight" tabindex="5003"
                        style={{overflow: "hidden; outline: none"}}>
                    </div>
                </div>
            {/* </div> */}
        {/* </div > */}

	<div className="banner-top container-fluid" id="home">
		{/* <!-- banner --> */}
		<div className="banner_inner">
			<div className="services-breadcrumb">
				<div className="inner_breadcrumb">

					<ul className="short">
						<li>
							<Link to="/">Home</Link>
							<i>|</i>
						</li>
						<li>About Us</li>
					</ul>
				</div>
			</div>

		</div>
		{/* <!--//banner --> */}
	</div>
	{/* <!--// header_top --> */}
	{/* < !--top Products-- > */}
        <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
            <div className="container-fluid">
                {/* <!---728x90---> */}

                <div className="inner-sec-shop px-lg-4 px-3">
                    <div className="about-content py-lg-5 py-3">
                        <div className="row">

                            <div className="col-lg-6 p-0">
                                <img src="images/banner1.jpg" alt="Goggles" className="img-fluid"/>
                            </div>
                            <div className="col-lg-6 about-info">
                                <h3 className="tittle-w3layouts text-left mb-lg-5 mb-3">About Us</h3>
                                <p className="my-xl-4 my-lg-3 my-md-4 my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.
                                </p>

                                <a href="shop.html" className="btn btn-sm animated-button gibson-three mt-4">Shop Now</a>

                            </div>
                        </div>
                    </div>
                    <h3 className="tittle-w3layouts text-center my-lg-4 my-4">Partners</h3>
                    <div className="partners-info">
                        <div className="row mt-lg-5 mt-3">
                            <div className="col-md-3 team-main-gd">
                                <div className="team-grid text-center">
                                    <div className="team-img">
                                        <img className="img-fluid rounded" src="images/team1.jpg" alt=""/>
                                    </div>
                                    <div className="team-info">
                                        <h4>Partner 1</h4>
                                        <span>Description </span>
                                        <ul className="d-flex justify-content-center py-3 social-icons">
                                            <li>
                                                <a href="/">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li className="mx-3">
                                                <a href="/">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="fab fa-google-plus-g"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 team-main-gd">
                                <div className="team-grid text-center">
                                    <div className="team-img">
                                        <img className="img-fluid rounded" src="images/team2.jpg" alt=""/>
                                    </div>
                                    <div className="team-info">
                                        <h4>Partner 2</h4>
                                        <span>Description </span>
                                        <ul className="d-flex justify-content-center py-3 social-icons">
                                            <li>
                                                <a href="/">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li className="mx-3">
                                                <a href="/">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="fab fa-google-plus-g"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 team-main-gd">
                                <div className="team-grid text-center">
                                    <div className="team-img">
                                        <img className="img-fluid rounded" src="images/team3.jpg" alt=""/>
                                    </div>
                                    <div className="team-info">
                                        <h4>Partner 3</h4>
                                        <span>Description </span>
                                        <ul className="d-flex justify-content-center py-3 social-icons">
                                            <li>
                                                <a href="/">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li className="mx-3">
                                                <a href="/">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="fab fa-google-plus-g"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 team-main-gd">
                                <div className="team-grid text-center">
                                    <div className="team-img">
                                        <img className="img-fluid rounded" src="images/team4.jpg" alt=""/>
                                    </div>
                                    <div className="team-info">
                                        <h4>Partner 4</h4>
                                        <span>Description </span>
                                        <ul className="d-flex justify-content-center py-3 social-icons">
                                            <li>
                                                <a href="/">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li className="mx-3">
                                                <a href="/">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="fab fa-google-plus-g"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /grids --> */}
                    <div className="bottom-sub-grid-content py-lg-5 py-3">
                        <div className="row">
                            <div className="col-lg-4 bottom-sub-grid text-center">
                                <div className="bt-icon">

                                    <span className="far fa-hand-paper"></span>
                                </div>

                                <h4 className="sub-tittle-w3layouts my-lg-4 my-3">Satisfaction Guaranteed</h4>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                                <p>
                                    <a href="shop.html" className="btn btn-sm animated-button gibson-three mt-4">Shop Now</a>
                                </p>
                            </div>
                            {/* <!-- /.col-lg-4 --> */}
                            <div className="col-lg-4 bottom-sub-grid text-center">
                                <div className="bt-icon">
                                    <span className="fas fa-rocket"></span>
                                </div>

                                <h4 className="sub-tittle-w3layouts my-lg-4 my-3">Fast Shipping</h4>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                                <p>
                                    <a href="shop.html" className="btn btn-sm animated-button gibson-three mt-4">Shop Now</a>
                                </p>
                            </div>
                            {/* <!-- /.col-lg-4 --> */}
                            <div className="col-lg-4 bottom-sub-grid text-center">
                                <div className="bt-icon">
                                    <span className="far fa-sun"></span>
                                </div>

                                <h4 className="sub-tittle-w3layouts my-lg-4 my-3">UV Protection</h4>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                                <p>
                                    <a href="shop.html" className="btn btn-sm animated-button gibson-three mt-4">Shop Now</a>
                                </p>
                            </div>
                            {/* <!-- /.col-lg-4 --> */}
                        </div>
                    </div>
                    {/* <!-- //grids --> */}
                    {/* <!--/meddle--> */}
                    {/* <div className="row">
                        <div className="col-md-12 middle-slider my-4">
                            <div className="middle-text-info ">

                                <h3 className="tittle-w3layouts two text-center my-lg-4 mt-3">Summer Flash sale</h3>
                                <div className="simply-countdown-custom" id="simply-countdown-custom"></div>

                            </div>
                        </div>
                    </div> */}
                    {/* <!--//meddle--> */}

                    {/* <!-- /testimonials --> */}
                    {/* <div className="testimonials py-lg-4 py-3 mt-4">
                        <div className="testimonials-inner py-lg-4 py-3">
                            <h3 className="tittle-w3layouts text-center my-lg-4 my-4">Tesimonials</h3>
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <div className="testimonials_grid text-center">
                                            <h3>Anamaria
                                                <span>Customer</span>
                                            </h3>
                                            <label>United States</label>
                                            <p>Maecenas interdum, metus vitae tincidunt porttitor, magna quam egestas sem, ac scelerisque nisl nibh vel lacus.
                                                Proin eget gravida odio. Donec ullamcorper est eu accumsan cursus.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="testimonials_grid text-center">
                                            <h3>Esmeralda
                                                <span>Customer</span>
                                            </h3>
                                            <label>United States</label>
                                            <p>Maecenas interdum, metus vitae tincidunt porttitor, magna quam egestas sem, ac scelerisque nisl nibh vel lacus.
                                                Proin eget gravida odio. Donec ullamcorper est eu accumsan cursus.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="testimonials_grid text-center">
                                            <h3>Gretchen
                                                <span>Customer</span>
                                            </h3>
                                            <label>United States</label>
                                            <p>Maecenas interdum, metus vitae tincidunt porttitor, magna quam egestas sem, ac scelerisque nisl nibh vel lacus.
                                                Proin eget gravida odio. Donec ullamcorper est eu accumsan cursus.</p>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev test" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="fas fa-long-arrow-alt-left"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next test" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="fas fa-long-arrow-alt-right" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <!-- //testimonials --> */}
                    {/* <div className="row galsses-grids pt-lg-5 pt-3">
                        <div className="col-lg-6 galsses-grid-left">
                            <figure className="effect-lexi">
                                <img src="images/banner4.jpg" alt="" className="img-fluid"/>
                                    <figcaption>
                                        <h3>Editor's
                                            <span>Pick</span>
                                        </h3>
                                        <p> Express your style now.</p>
                                    </figcaption>
                            </figure>
                        </div>
                        <div className="col-lg-6 galsses-grid-left">
                            <figure className="effect-lexi">
                                <img src="images/banner1.jpg" alt="" className="img-fluid"/>
                                    <figcaption>
                                        <h3>Editor's
                                            <span>Pick</span>
                                        </h3>
                                        <p>Express your style now.</p>
                                    </figcaption>
                            </figure>
                        </div>
                    </div> */}

                    {/* <!-- /clients-sec --> */}
                    {/* <div className="testimonials p-lg-5 p-3 mt-4">
                        <div className="row last-section">
                            <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                                <div className="mail-grid-icon text-center">
                                    <i className="fas fa-gift"></i>
                                </div>
                                <div className="mail-grid-text-info">
                                    <h3>Genuine Product</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>
                            <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                                <div className="mail-grid-icon text-center">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <div className="mail-grid-text-info">
                                    <h3>Secure Products</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>
                            <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                                <div className="mail-grid-icon text-center">
                                    <i className="fas fa-dollar-sign"></i>
                                </div>
                                <div className="mail-grid-text-info">
                                    <h3>Cash on Delivery</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>
                            <div className="col-lg-3 footer-top-w3layouts-grid-sec">
                                <div className="mail-grid-icon text-center">
                                    <i className="fas fa-truck"></i>
                                </div>
                                <div className="mail-grid-text-info">
                                    <h3>Easy Delivery</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <!-- //clients-sec --> */}

                </div>
            </div>
            {/* <!---728x90---> */}
        </section> 
    </>
  )
}
