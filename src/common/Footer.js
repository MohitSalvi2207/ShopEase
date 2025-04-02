import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="py-lg-5 py-3">
                <div className="container-fluid px-lg-5 px-3">
                    <div className="row footer-top-w3layouts">
                        <div className="col-lg-3 footer-grid-w3ls">
                            <div className="footer-title">
                                <h3>About Us</h3>
                            </div>
                            <div className="footer-text">
                                <p>Curabitur non nulla sit amet nislinit tempus convallis quis ac lectus. lac inia eget consectetur sed, convallis at
                                    tellus. Nulla porttitor accumsana tincidunt.</p>
                                <ul className="footer-social text-left mt-lg-4 mt-3">

                                    <li className="mx-2">
                                        <a href="/">
                                            <span className="fab fa-facebook-f"></span>
                                        </a>
                                    </li>
                                    <li className="mx-2">
                                        <a href="/">
                                            <span className="fab fa-twitter"></span>
                                        </a>
                                    </li>
                                    <li className="mx-2">
                                        <a href="/">
                                            <span className="fab fa-google-plus-g"></span>
                                        </a>
                                    </li>
                                    <li className="mx-2">
                                        <a href="/">
                                            <span className="fab fa-linkedin-in"></span>
                                        </a>
                                    </li>
                                    <li className="mx-2">
                                        <a href="/">
                                            <span className="fas fa-rss"></span>
                                        </a>
                                    </li>
                                    <li className="mx-2">
                                        <a href="/">
                                            <span className="fab fa-vk"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 footer-grid-w3ls">
                            <div className="footer-title">
                                <h3>Get in touch</h3>
                            </div>
                            <div className="contact-info">
                                <h4>Location :</h4>
                                <p>0926k 4th block building, king Avenue, New York City.</p>
                                <div className="phone">
                                    <h4>Contact :</h4>
                                    <p>Phone : +121 098 8907 9987</p>
                                    <p>Email :
                                        <a href="https://p.w3layouts.com/cdn-cgi/l/email-protection#335a5d555c73564b525e435f561d505c5e"><span className="__cf_email__" data-cfemail="82ebece4edc2e7fae3eff2eee7ace1edef">[email&#160;protected]</span></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 footer-grid-w3ls">
                            <div className="footer-title">
                                <h3>Quick Links</h3>
                            </div>
                            <ul className="links">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="about">About</a>
                                </li>
                                <li>
                                    <a href="shop">shop</a>
                                </li>
                                {/* <li>
                                    <a href="shop.html">Shop</a>
                                </li> */}
                                <li>
                                    <a href="contact">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 footer-grid-w3ls">
                            <div className="footer-title">
                                <h3>Sign up for your offers</h3>
                            </div>
                            <div className="footer-text">
                                <p>By subscribing to our mailing list you will always get latest news and updates from us.</p>
                                <form action="#" method="post">
                                    <input className="form-control" type="email" name="Email" placeholder="Enter your email..." required=""/>
                                        <button className="btn1">
                                            <i className="far fa-envelope" aria-hidden="true"></i>
                                        </button>
                                        <div className="clearfix"> </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-w3layouts mt-4">
                        <p className="copy-right text-center ">&copy; 2018 Goggles. All Rights Reserved | Design by
                            <a href="https://w3layouts.com/"> W3layouts </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
