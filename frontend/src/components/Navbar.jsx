import React from "react";

function Navbar() {
  return (
    <header className="d-flex justify-content-between w-100 px-5 py-2">
      <a href="/" className="text-dark mx-3 text-decoration-none"><h1 className="text-primary">
       FocusLearn</h1> </a>
      <nav>
        <a href="/bionic-reading" className="text-dark mx-3 text-decoration-none">
          Read
        </a>
        <a href="/community" className="text-dark mx-3 text-decoration-none">
          Community
        </a>
        <a href="/login" className="text-dark mx-3 text-decoration-none">
          Login
        </a>
        <a href="/signup" className="text-dark mx-3 text-decoration-none">
          Signup
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
