import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getSingleProduct } from "./apis";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../features/LoginSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const navigate = useNavigate();
     const dispatch = useDispatch()

     const {data} = useQuery({
      queryKey : ["categoriesdata"],
      queryFn : getSingleProduct,
    });
    console.log(data);

    const handleSubmit  = (e) => {
      e.preventDefault();
      console.log(email, password);

      const isUser = data.find((user) => user.email === email && user.password === password);
      console.log(isUser);
      
      if(isUser){
        navigate("/");
        dispatch(userLogin(isUser))
        console.log("User Found");
        toast.success(" Logged In Successfully");
      }else{
        console.log("User Not Found");
        toast.error("Email and password is incorrect");
      }
    }
  return (
    <div>
      <div className="banner-top container-fluid" id="home">
        {/* <!-- banner --> */}
        <div className="banner_inner">
          <div className="services-breadcrumb">
            <div className="inner_breadcrumb">
              <ul className="short">
                <li>
                  <a href="index.html">Home</a>
                  <i>|</i>
                </li>
                <li> Login </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!--//banner --> */}
      </div>

      <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
        <div className="container">
          {/* <!---728x90---> */}

          <h3 className="tittle-w3layouts text-center my-lg-4 my-4">
            {" "}
             Login{" "}
          </h3>
          {/* <!---728x90---> */}
          <div className="inner_sec">
            {/* <p className="sub text-center mb-lg-5 mb-3">We love to discuss your idea</p> */}
            {/* <div className="address row">

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
				</div> */}
            <div className="contact_grid_right">
              <form onSubmit={handleSubmit}>
                <div className="row contact_left_grid">
                  <div className="col-md-6 con-left">
                    <div className="form-group">
                      {/* <label className="my-2">Name</label> */}
                      {/* <input
                        className="form-control"
                        type="text"
                        name="Name"
                        placeholder=""
                        required=""
                      /> */}
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        className="form-control"
                        type="email"
                        name="Email"
                        placeholder=""
                        required=""
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="my-2">password</label>
                      <input
                        className="form-control"
                        type="text"
                        name="Subject"
                        placeholder=""
                        required=""
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      class="btn btn"
                      style={{
                        backgroundColor: "#ff4e00", // Bootstrap Primary Blue
                        color: "#fff", // White text
                        padding: "10px 20px",
                        fontSize: "16px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition: "background 0.3s ease",
                      }}
                      onClick={() =>{
                        
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
