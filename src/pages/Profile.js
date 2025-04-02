import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
    
  const login = useSelector((state) => state.Login);
  console.log(login);

  return (
    <>
      <section class="vh-100 d-flex align-items-center">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-10 col-lg-6">
              <div
                class="card shadow-lg p-4"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                  margin: "20px 0px",
                }}
              >
                <div class="card-body text-center">
                  {/* Profile Image */}
                  <div class="mt-3 mb-4">
                    <img
                      src={login.user.image}
                      class="rounded-circle img-fluid border shadow"
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                      }}
                      alt="Profile"
                    />
                  </div>

                  {/* User Name */}
                  <h3 class="fw-bold text-dark">
                    {login.user.firstName} {login.lastName}
                  </h3>
                  <p class="text-muted">{login.user.maidenName}</p>

                  {/* Social Media Buttons */}
                  {/* <div class="d-flex justify-content-center gap-3 mb-4">
              <a href="#!" class="btn btn-outline-primary btn-sm rounded-circle"><i class="fab fa-facebook-f"></i></a>
              <a href="#!" class="btn btn-outline-info btn-sm rounded-circle"><i class="fab fa-twitter"></i></a>
              <a href="#!" class="btn btn-outline-danger btn-sm rounded-circle"><i class="fab fa-instagram"></i></a>
            </div> */}

                  {/* User Details Section */}
                  <div class="d-flex justify-content-between text-center mt-4 mb-3">
                    <div>
                      <i class="fas fa-user-circle fa-lg text-secondary"></i>
                      <p class="mb-1 text-dark fw-semibold">
                        {login.user.gender}
                      </p>
                      <p class="text-muted small">{login.age} years old</p>
                    </div>
                    <div>
                      <i class="fas fa-envelope fa-lg text-secondary"></i>
                      <p class="mb-1 text-dark fw-semibold">
                        {login.user.email}
                      </p>
                      <p class="text-muted small">Password: {login.password}</p>
                    </div>
                    <div>
                      <i class="fas fa-map-marker-alt fa-lg text-secondary"></i>
                      <p class="mb-1 text-dark fw-semibold">
                        {login.user.role}
                      </p>
                      <p class="text-muted small">
                        {login.user.address.address}
                      </p>
                    </div>
                  </div>

                  {/* Logout / Profile Edit Button */}
                  <button
                    class="btn btn-primary btn-lg px-4"
                    style={{
                      backgroundColor: "#ff4e00",
                      border: "none",
                      transition: "0.3s",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#cc3c00")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#ff4e00")
                    }
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
