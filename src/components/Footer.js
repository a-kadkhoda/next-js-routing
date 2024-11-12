// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-zinc-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Online Shop. All rights reserved.</p>
        <div className="mt-2">
          <a
            href="#"
            className="hover:text-yellow-300 transition-colors duration-200 mx-2"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-yellow-300 transition-colors duration-200 mx-2"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-yellow-300 transition-colors duration-200 mx-2"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
