import React from 'react'
import "../App.css";
const Footer = () => {
  return (
    <>
      <footer className="flex fl-center">
        <div className="content-widthfix footer-content flex fl-space-between">
          <div className="about-footer flex fl-col">
            <h2>ABOUT US</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore assumenda ad modi! Quam nobis sit eaque non rem quia corporis, in autem blanditiis dolores vel reiciendis aperiam dicta modi ab!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ullam incidunt velit vel et distinctio tempora quo ipsa molestias cupiditate, earum consectetur beatae sint sequi voluptatum esse, deleniti eligendi. Illo?</p>
          </div>
          <div className="about-footer flex fl-col">
            <h2>OUR SERVIES</h2>
            <ul className="services-list-footer fles">
              <li><a>Domestic</a></li>
              <li><a>Logistic</a></li>
              <li><a>Delivery</a></li>  
            </ul>
          </div>
          <div className="about-footer flex fl-col">
            <h2 className="primary-color">Office: Winnipeg</h2>
            <ul className="services-list-footer contact-fix">
              <li><i className="bi bi-envelope-fill"></i> info@fastwaytruck.com</li>
              <li><i className="bi bi-telephone-fill"></i> +1 (204)-615-1000</li>
              <li><i className="bi bi-geo-alt-fill"></i> 2095 Logan Ave, Winnipeg MB, Canada</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyright flex fl-center">
        <div className="content-widthfix copy-content flex fl-space-between">
          <p>&copy; Copyright 2020. All Rights Reserved.</p>
          <ul className="social-logo-footer flex fl-space-between">
            <li><a href="#"><i className="bi bi-twitter"></i></a></li>
            <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
            <li><a href="#"><i className="bi bi-facebook"></i></a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer;