import React from 'react'
import {Link} from "react-router-dom";
import "../App.css";
import { motion } from 'framer-motion';

const Header = (props) => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className={props.page === "home" ? "main-wrapper flex" : "flex"}>
        <header class="flex fl-center">
          <div class="content-widthfix header-content flex fl-space-between">
            <img src="./images/logo.png" alt="Leo Transport Logo" class="company-logo"/>
            <nav class="nav-bar flex fl-center">
              <ul class="flex">
                <li><Link to="home" class="link link--metis" onClick={e => props.setPage("home") || props.setLoading(true)}><span class="primary-color">01.</span> Home</Link></li>
                <li><Link to="about-us" class="link link--metis" onClick={e => props.setPage("about-us") || props.setLoading(true)}><span class="primary-color">02.</span> About us</Link></li>
                <li><Link to="services" class="link link--metis" onClick={e => props.setPage("services") || props.setLoading(true)}><span class="primary-color">03.</span> Services</Link></li>
                <li><Link to="contact-us" class="link link--metis" onClick={e => props.setPage("contact-us") || props.setLoading(true)}><span class="primary-color">04.</span> Contact</Link></li>
              </ul>
              <div class="flex fl-center contact-header-info">
                <i class="bi bi-telephone primary-color"></i>
                <aside>
                  <h3>Call Us:</h3>
                  <h1 class="phone-number">+1 (204)-671-3536</h1>
                </aside>
              </div>
            </nav>
          </div>
        </header>
        {props.page === "home" && 
        <div class="slider flex fl-center">
          <div class="content-widthfix slider-content flex fl-col">
            <h2 class="light-weight">Welcome to our site</h2>
            <h1 class="hevy-weight primary-color">Transportation</h1>
            <h1 class="hevy-weight">Trucking and</h1>
            <h1 class="hevy-weight">Logistics</h1>
            <p class="intro-slide-text">Leo transport company happily services all of Manitoba, but we know no bounds! If you need something hauled in Saskatchewan, Alberta or across the borders we have you covered.</p>
            <a class="btn-general primary-btn">Get In Touch <i class="bi bi-arrow-right"></i></a>
          </div>
        </div> }
      </div>
    </motion.div>
  )
}

export default Header