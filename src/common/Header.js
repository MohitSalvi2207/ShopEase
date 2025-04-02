import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../features/LoginSlice";

export default function Header() {
  let [search, setsearch] = useState();
  let [cat, setCat] = useState([]);
  let [filter, setFilter] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useSelector((state) => state.Login);
  console.log(login);
  
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((cat) => setCat(cat));
  }, []);

  function handleChange(e) {
    const search = e.target.value;
    setsearch(search);

    const filteredCategories = cat.filter((category) =>
      search
        ? category.name.toLowerCase().includes(search.toLowerCase())
        : setFilter()
    );
    setFilter(filteredCategories);
  }

  return (
    <header className="bg-light shadow-sm">
      <div className="container">
        <div className="row align-items-center py-3">
          {/* Centered Logo */}
          <div className="col-12 text-center">
            <h1 className="logo-w3layouts fw-bold">
              <Link
                className="navbar-brand text-dark"
                to="/"
                style={{ fontSize: "0.9em" }}
              >
                🛍️ ShopInfinity
              </Link>
            </h1>
          </div>
        </div>

        <div className="row align-items-center py-3">
          {/* Navigation Centered */}
          <div className="col-md-6 d-flex justify-content-center">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container d-flex justify-content-center">
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav mx-auto text-center">
                    <li className="nav-item">
                      <Link className="nav-link fw-semibold text-dark" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link fw-semibold text-dark"
                        to="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link fw-semibold text-dark"
                        to="/shop"
                      >
                        Shop
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link fw-semibold text-dark"
                        to="/contact"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          {/* Search & Buttons on the Right */}
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <div className="position-relative">
              <input
                type="search"
                className="form-control me-2"
                placeholder="Search ..."
                style={{ width: "140px" }}
                onChange={(e) => handleChange(e)}
              />
              {filter.length > 0 && (
                <ul
                  className="position-absolute bg-white shadow-sm p-2 "
                  style={{
                    listStyle: "none",
                    top: "100%",
                    left: 0,
                    width: "100%",
                    maxHeight: "150px",
                    overflowY: "auto",
                    zIndex: 1,
                  }}
                >
                  {filter.map((value) => (
                    <li key={value.name}>
                      <Link
                        to={`/product/${value.name}`}
                        className="text-dark d-block p-2"
                      >
                        {value.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link className="btn btn-outline-dark mx-2 px-3 py-2" to="/cart">
              🛒
            </Link>

            {login.user != null &&<Link
              className="btn btn-outline-primary mx-2 px-4 py-2"
              to="/profile"
              style={{ borderRadius: "8px" }}
            >
              👤 Profile
            </Link>}

            {login.user === null ? (
              <Link
                className="btn btn-primary px-4 py-2"
                to="/login"
                style={{
                  backgroundColor: "#ff4e00",
                  borderRadius: "8px",
                  transition: "0.3s ease-in-out",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#cc3c00")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#ff4e00")
                }
              >
                🔑 Login
              </Link>
            ) : (
              <Link
                className="btn btn-primary px-4 py-2"
                onClick={() => {
                  dispatch(userLogout()); 
                  navigate("/"); 
                }}
                style={{
                  backgroundColor: "#ff4e00",
                  borderRadius: "8px",
                  transition: "0.3s ease-in-out",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#cc3c00")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#ff4e00")
                }
              >
                🔑 Logout
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
