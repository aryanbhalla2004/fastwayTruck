import React, { useEffect } from 'react';
import { PageTitle } from '../Components/page-header';
import { motion } from 'framer-motion';
import Helmet from 'react-helmet';

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Helmet>
        <title>About Us | Leo Transport</title>
      </Helmet>
      <PageTitle name="About us"/>
      <div className="flex fl-center top-about-box">
        <div className="content-widthfix about-page-header-content flex fl-center fl-col">
          <h2>What we do</h2>
          <h1>What makes us different from other</h1>
          <div className='text-about flex fl-center'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, aperiam suscipit fugit eum expedita repellendus fuga, ratione voluptas vitae quae doloremque explicabo qui nihil repudiandae. Vero molestias sapiente at aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, veniam voluptatibus corporis natus eligendi ullam ratione distinctio ipsa odio ipsum aspernatur totam in eveniet temporibus sit aliquid quibusdam dicta quisquam.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non expedita, laborum at esse, pariatur quos dolore minima vel quod aliquid fugiat? Voluptate iusto labore blanditiis harum eveniet quaerat quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quos iure mollitia maxime ipsum assumenda voluptate, soluta reprehenderit in fugiat deserunt quod aut ducimus, sequi facilis perspiciatis ut vero labore.</p>
          </div>
          <a className="btn-general primary-btn"> Get in Touch <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
      <div className="flex fl-center">
        <div className="content-widthfix about-wrapper flex fl-center fl-space-between">
          <div className="images-selection">
            <img className="floating-img-again" src="./images/location.jpeg" width="250"></img>
            <img className="about-images" src='https://images.unsplash.com/photo-1531683760080-7bb28a630bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80' width="200"></img>
            <img className="floating-img" src='./images/lined-up.jpeg' width="300"></img>
          </div>
          <div className="about-us-content">
            <h4>About Us</h4>
            <h2>Welcome to our car repairing shop</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='ghost-boxes flex'>
              <div className='ghost-box flex fl-center'>
                <h1>25+</h1>
                <h4>Experience Members</h4>
              </div>
              <div className='ghost-box flex fl-center'>
                <h1>5K+</h1>
                <h4>Satisfied Clients</h4>
              </div>
            </div>
            <a className="btn-general primary-btn"> Read More <i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
