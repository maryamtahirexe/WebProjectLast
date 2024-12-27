import React from "react";
import {Link} from "react-router-dom";

const OneCommunity = () => {
  const testimonials = [
    { text: "This community has given me the confidence to pursue my dreams!", author: "Jane Doe" },
    { text: "The support and camaraderie here are unparalleled.", author: "John Smith" },
    { text: "Being part of this group has been a life-changing experience.", author: "Emily White" },
  ];

  return (
    <div>
      {/* First Section */}
      <section className="py-5 text-center text-white" style={{ backgroundColor: "#0382E4" }}>
        <div className="container">
          <h1 className="mb-3">Welcome to the Community</h1>
          <p className="lead mb-4">Join us and be a part of something amazing!</p>
          <button className="btn btn-light btn-lg">
            <Link to="/joinNow">  Become a Member</Link>
          </button>
        </div>
      </section>

      {/* Second Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Who We Are</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card border-0 shadow-sm p-4">
                <div className="card-body">
                  <i className="bi bi-people fs-1 mb-3 text-primary"></i>
                  <blockquote className="blockquote mb-0">
                    <p>"Alone, we can do so little; together, we can do so much."</p>
                    <footer className="blockquote-footer">Helen Keller</footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card border-0 shadow-sm p-4">
                <div className="card-body">
                  <i className="bi bi-lightbulb fs-1 mb-3 text-warning"></i>
                  <blockquote className="blockquote mb-0">
                    <p>"The strength of the team is each individual member."</p>
                    <footer className="blockquote-footer">Phil Jackson</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="py-5" style={{ backgroundColor: "#0382E4" }}>
        <div className="container text-center">
          <h2 className="mb-4">What Our Members Say</h2>
          <div className="row">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <p className="card-text">"{testimonial.text}"</p>
                    <h5 className="card-title">- {testimonial.author}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneCommunity;
