import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Stonepedia. All rights reserved.</p>
      <div>
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Use</a>
      </div>
    </footer>
  );
};

export default Footer;