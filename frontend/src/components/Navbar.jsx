import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 py-3 shadow-sm">
      <a className="navbar-brand text-primary fw-bold" href="/">
        FocusLearn
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mx-2">
            <a className="nav-link text-dark" href="/bionic-reading">
              Read
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link text-dark" href="/community">
              Community
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link text-dark" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link text-dark" href="/signup">
              Signup
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
