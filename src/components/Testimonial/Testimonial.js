import React from "react";
import "./Testimonial.css";

const Testimonial = ({ quote }) => {
  return <div className="testimonial">"{quote}"</div>;
};

export default Testimonial;