import React from "react";

function HeroSection() {
  return (
    <div
      className="hero-section text-center text-dark d-flex flex-column align-items-center justify-content-center"
      style={{
        minWidth:"100vw",
        height: "100vh",
        backgroundImage: `url('/bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="d-flex justify-content-between w-100 px-5 py-3">
        <h1 className="text-primary">FocusLearn</h1>
        <nav>
          <a href="#read" className="text-dark mx-3 text-decoration-none">
            Read
          </a>
          <a href="#community" className="text-dark mx-3 text-decoration-none">
            Community
          </a>
          <a href="#login" className="text-dark mx-3 text-decoration-none">
            Login
          </a>
        </nav>
      </header>
      <div className="hero-content mt-5">
        <h2 className="display-4 fw-bold">
          YOUR EDUCATION, <span className="text-primary">reimagined</span>
        </h2>
        <p className="mt-3">
          Say Goodbye To Sensory Overload And Hello To Intuitive, Personalized
          Learning Experiences.
        </p>
        <button className="btn btn-primary btn-lg mt-4">TRY NOW</button>
        <div className="text-muted mt-3">
          <span>Start Learning From Here</span>
        </div>
      </div>
      <div className="tags d-flex justify-content-center flex-wrap mt-5">
        <div
          className="tag bg-white shadow-sm d-flex align-items-center mx-2 p-2"
          style={{ borderRadius: "20px" }}
        >
          <i className="bi bi-bookmark-check text-primary me-2"></i>
          Bionic Reading
        </div>
        <div
          className="tag bg-white shadow-sm d-flex align-items-center mx-2 p-2"
          style={{ borderRadius: "20px" }}
        >
          <i className="bi bi-people text-primary me-2"></i>
          Community
        </div>
        <div
          className="tag bg-white shadow-sm d-flex align-items-center mx-2 p-2"
          style={{ borderRadius: "20px" }}
        >
          <i className="bi bi-person-circle text-primary me-2"></i>
          Personalized Learning
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
