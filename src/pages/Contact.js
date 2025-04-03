import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <>
            {/* <div className="pull-right toggle-right-sidebar">
                <span className="fa title-open-right-sidebar tooltipstered fa-angle-double-right"></span>
            </div> */}

            <div id="right-sidebar" className="right-sidebar-notifcations nav-collapse">
                <div className="bs-example bs-example-tabs right-sidebar-tab-notification" data-example-id="togglable-tabs">

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
                        </div>--> */}
                    </div>
                    <div className="right-sidebar-panel-content animated fadeInRight" tabindex="5003"
                        style={{overflow: "hidden; outline: none"}}>
                    </div>
                </div>
            {/* </div> */}

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
						<li>Contact Us</li>
					</ul>
				</div>
			</div>

		</div>
		{/* <!--//banner --> */}
	</div>
	{/* <!--// header_top --> */}
	{/* < !--top Products-- > */}
	<section className="banner-bottom-wthreelayouts py-lg-5 py-3">
		<div className="container">
            {/* <!---728x90---> */}

			<h3 className="tittle-w3layouts text-center my-lg-4 my-4">Contact</h3>
            {/* <!---728x90---> */}
			<div className="inner_sec">
				<p className="sub text-center mb-lg-5 mb-3">We love to discuss your idea</p>
				<div className="address row">

					<div className="col-lg-4 address-grid">
						<div className="row address-info">
							<div className="col-md-3 address-left text-center">
								<i className="far fa-map"></i>
							</div>
							<div className="col-md-9 address-right text-left">
								<h6>Address</h6>
								<p> California, USA

								</p>
							</div>
						</div>

					</div>
					<div className="col-lg-4 address-grid">
						<div className="row address-info">
							<div className="col-md-3 address-left text-center">
								<i className="far fa-envelope"></i>
							</div>
							<div className="col-md-9 address-right text-left">
								<h6>Email</h6>
								<p>Email :
									<a href="https://p.w3layouts.com/cdn-cgi/l/email-protection#83e6fbe2eef3efe6c3e6eee2eaefade0ecee"> <span className="__cf_email__" data-cfemail="4528242c2905203d24283529206b262a28">[email&#160;protected]</span></a>

								</p>
							</div>

						</div>
					</div>
					<div className="col-lg-4 address-grid">
						<div className="row address-info">
							<div className="col-md-3 address-left text-center">
								<i className="fas fa-mobile-alt"></i>
							</div>
							<div className="col-md-9 address-right text-left">
								<h6>Phone</h6>
								<p>+1 234 567 8901</p>

							</div>

						</div>
					</div>
				</div>
				<div className="contact_grid_right">
					<form action="#" method="post">
						<div className="row contact_left_grid">
							<div className="col-md-6 con-left">
								<div className="form-group">
									<label className="my-2">Name</label>
									<input className="form-control" type="text" name="Name" placeholder="" required=""/>
								</div>
								<div className="form-group">
									<label>Email</label>
									<input className="form-control" type="email" name="Email" placeholder="" required=""/>
								</div>
								<div className="form-group">
									<label className="my-2">Subject</label>
									<input className="form-control" type="text" name="Subject" placeholder="" required=""/>
								</div>
							</div>
							<div className="col-md-6 con-right">
								<div className="form-group">
									<label>Message</label>
									<textarea id="textarea" placeholder="" required=""></textarea>
								</div>
								<input className="form-control" type="submit" value="Submit"/>

							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
    {/* <!--- 728x90-- -> */}
        <div className="contact-map">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100949.24429313939!2d-122.44206553967531!3d37.75102885910819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1472190196783"
                className="map" style={{border:"0" }}></iframe>
        </div> 
    </>
  )
}
