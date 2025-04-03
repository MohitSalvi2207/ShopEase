import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../features/LoginSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector((state) => state.Login);
  console.log(login);

  const handleLogout = () => {
    dispatch(userLogout());
    navigate("/");
  };

  return (
    <>
      <section className="d-flex align-items-center py-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-10 col-lg-6">
              <div
                className="card shadow-lg p-3 p-md-4"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                  margin: "10px 0px",
                }}
              >
                <div className="card-body text-center">
                  {/* Profile Image */}
                  <div className="mt-2 mt-md-3 mb-3 mb-md-4">
                    <img
                      src={login.user.image}
                      className="rounded-circle img-fluid border shadow"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                      alt="Profile"
                    />
                  </div>

                  {/* User Name */}
                  <h4 className="fw-bold text-dark mb-1">
                    {login.user.firstName} {login.user.lastName}
                  </h4>
                  <p className="text-muted small mb-3">
                    {login.user.maidenName}
                  </p>

                  {/* User Details Section - Stacked on mobile */}
                  <div className="row text-center mt-3 mb-3">
                    <div className="col-12 col-sm-4 mb-3 mb-sm-0">
                      <i className="fas fa-user-circle text-secondary"></i>
                      <p className="mb-1 text-dark fw-semibold small">
                        {login.user.gender}
                      </p>
                      <p className="text-muted small">{login.age} years old</p>
                    </div>
                    <div className="col-12 col-sm-4 mb-3 mb-sm-0">
                      <i className="fas fa-envelope text-secondary"></i>
                      <p className="mb-1 text-dark fw-semibold small text-truncate">
                        {login.user.email}
                      </p>
                      <p className="text-muted small">
                        Password: {login.password}
                      </p>
                    </div>
                    <div className="col-12 col-sm-4">
                      <i className="fas fa-map-marker-alt text-secondary"></i>
                      <p className="mb-1 text-dark fw-semibold small">
                        {login.user.role}
                      </p>
                      <p className="text-muted small text-truncate">
                        {login.user.address.address}
                      </p>
                    </div>
                  </div>

                  {/* Logout Button - Full width on mobile */}
                  <div className="d-grid gap-2 mt-4">
                    <button
                      className="btn btn-primary px-4 py-2"
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
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
