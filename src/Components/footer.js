import React from 'react'
import "../App.css";
const Footer = () => {
  return (
    <>
    
      <footer class="flex fl-center">
        <div class="content-widthfix footer-content flex fl-space-between">
          <div class="about-footer flex fl-col">
            <h2>ABOUT US</h2>
            <p>We have great pay and variety of shifts. No problem we will train the right applicants and have a tuition reimbursement program. We are busy and fast-Paced, and we are growing! We need your help!</p>
            <p>We offer a great a benefit package Insurance policy paid by Leo transport company to insure your package and move it safely to uour destination. We appreciate our workers efforts and reward them for going extra miles with unexpected bonuses.</p>
          </div>
          <div class="about-footer flex fl-col">
            <h2>OUR SERVIES</h2>
            <ul class="services-list-footer fles">
              <li><a>Domestic</a></li>
              <li><a>Logistic</a></li>
              <li><a>Delivery</a></li>  
            </ul>
          </div>
          <div class="about-footer flex fl-col">
            <h2 class="primary-color">Office: Winnipeg</h2>
            <ul class="services-list-footer">
              <li><i class="bi bi-envelope-fill"></i> dispatch@leotransportgroup.com</li>
              <li><i class="bi bi-telephone-fill"></i> +1 (204)-671-3536</li>
              <li><i class="bi bi-geo-alt-fill"></i> 11 Vervain Drive #4, Rosser, MB R0H 1E0</li>
            </ul>
          </div>
        </div>
      </footer>
      <div class="copyright flex fl-center">
        <div class="content-widthfix copy-content flex fl-space-between">
          <p>&copy; Copyright 2020. All Rights Reserved.</p>
          <ul class="social-logo-footer flex fl-space-between">
            <li><a href="#"><i class="bi bi-twitter"></i></a></li>
            <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
            <li><a href="#"><i class="bi bi-facebook"></i></a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer;