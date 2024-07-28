import React from "react";
import Logo from "../assets/images/Logo.svg";

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div>
          <h1>Doormat Navigation</h1>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#reservations">Reservations</a>
            </li>
            <li>
              <a href="#order-online">Order Online</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h1>Contact</h1>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <h1>Social Media Links</h1>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
