import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../features/LoginSlice";

export default function Header() {
  let [search, setsearch] = useState();
  let [cat, setCat] = useState([]);
  let [filter, setFilter] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useSelector((state) => state.Login);
  
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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-light shadow-sm">
      <div className="container">
        {/* Logo */}
        <div className="row align-items-center py-3">
          <div className="col-12 text-center">
            <h1 className="logo-w3layouts fw-bold">
              <Link className="navbar-brand text-dark" to="/" style={{ fontSize: '0.9em' }}>
                🛍️ ShopInfinity
              </Link>
            </h1>
          </div>
        </div>

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            {/* Toggler Button */}
            <button
              className="navbar-toggler ms-auto"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links */}
            <div 
              className={`collapse navbar-collapse justify-content-center ${isMenuOpen ? 'show' : ''}`} 
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link 
                    className="nav-link fw-semibold text-dark" 
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className="nav-link fw-semibold text-dark" 
                    to="/about"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className="nav-link fw-semibold text-dark" 
                    to="/shop"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className="nav-link fw-semibold text-dark" 
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Search & Buttons */}
            <div className="d-flex align-items-center">
              <div className="position-relative me-2">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search ..."
                  style={{ width: '140px' }}
                  onChange={(e) => handleChange(e)}
                />
                {filter.length > 0 && (
                  <ul
                    className="position-absolute bg-white shadow-sm p-2"
                    style={{
                      listStyle: 'none',
                      top: '100%',
                      left: 0,
                      width: '100%',
                      maxHeight: '150px',
                      overflowY: 'auto',
                      zIndex: 1,
                    }}
                  >
                    {filter.map((value) => (
                      <li key={value.name}>
                        <Link to={`/product/${value.name}`} className="text-dark d-block p-2">
                          {value.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Link 
                className="btn btn-outline-dark mx-2 px-3 py-2" 
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
              >
                🛒
              </Link>

              
              {login.user === null ? (
                <Link
                className="btn btn-primary px-3 px-sm-4 py-2 d-flex align-items-center justify-content-center gap-2"
                to="/login"
                style={{
                  backgroundColor: '#ff4e00',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease-in-out',
                  minWidth: '100px',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#cc3c00';
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#ff4e00';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
                onMouseDown={(e) => {
                  e.target.style.transform = 'translateY(1px)';
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {/* User icon that changes based on login state */}
                {login.user ? (
                  <img 
                    src={login.user.image} 
                    alt="User" 
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '1px solid white'
                    }}
                  />
                ) : (
                  <span style={{ fontSize: '1.1rem' }}>🔑</span>
                )}
                <span>{login.user ? 'Profile' : 'Login'}</span>
              </Link>
              ) : (
                <Link
                  className="btn btn-outline-primary mx-2 px-4 py-2"
                  to="/profile"
                  style={{ borderRadius: '8px' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  👤 
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}