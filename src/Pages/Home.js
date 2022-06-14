import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Helmet from 'react-helmet';

const Home = (props) => {
  useEffect(() => {
    props.setPage("home");
    window.scrollTo(0, 0)
  }, []);
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Helmet>
        <title>Welcome to Leo Transport | Home</title>
      </Helmet>
      <div class="quick-step-services flex fl-center">
        <div class="content-widthfix quick-step-services-content flex fl-space-between">
          <ul class="flex fl-space-between">
            <li class="flex fl-center fl-col">
              <img src="http://ebaytemplate.com/thesoft/website/trucking/assets/img/team.png"/>
              <h2>Dedicated team</h2>
              <p>Quisque pretium a tellus sit amet aliquam. Integer vel augue ac diam cursus eleifend vel id arcu.</p>
              <a class="btn-general primary-color small-button">Learn More</a>
            </li>
            <li class="flex fl-center fl-col">
              <img src="http://ebaytemplate.com/thesoft/website/trucking/assets/img/experience.png"/>
              <h2>Transportation</h2>
              <p>Quisque pretium a tellus sit amet aliquam. Integer vel augue ac diam cursus eleifend vel id arcu.</p>
              <a class="btn-general primary-color small-button">Learn More</a>
            </li>
            <li class="flex fl-center fl-col">
              <img src="http://ebaytemplate.com/thesoft/website/trucking/assets/img/reputation.png"/>
              <h2>Spotless Reputation</h2>
              <p>Quisque pretium a tellus sit amet aliquam. Integer vel augue ac diam cursus eleifend vel id arcu.</p>
              <a class="btn-general primary-color small-button">Learn More</a>
            </li>
          </ul>
        </div>
      </div>
      <section class="about-us-container flex fl-center">
        <div class="content-widthfix about-us-services-content flex fl-col fl-center">
          <div class="header-title-content flex fl-col fl-center">
            <span class="primary-color">SERVE OVER 4+ YEARS</span>
            <h1>About Us</h1>
          </div>
          <div class="about-text-and-images flex fl-space-between fl-center">
            <div class="text-and-list">
              <p>Leo transport company happily services all of Manitoba, but we know no bounds! If you need something hauled in Saskatchewan, Alberta or across the borders we have you covered. We have the most proficient and enthusiastic team of professional drivers on the roads. With the cohesion of operatives with a combined involvement of over fifty years in this field. Our operators are our most high regarded worth and the reason for our expansion and accomplishment.</p>
              <ul class="list-of-service-about flex">
                <li><i class="bi bi-check-all"></i>Best Teams</li>
                <li><i class="bi bi-check-all"></i>Excellent Reputation</li>
                <li><i class="bi bi-check-all"></i>Negotiation</li>
                <li><i class="bi bi-check-all"></i>Market Knowledge</li>
                <li><i class="bi bi-check-all"></i>Flexibility</li>
                <li><i class="bi bi-check-all"></i>Years Of Experience</li>
              </ul>
              <a class="btn-general primary-btn small-button">Read More</a>
            </div>
            <img src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" alt="" srcset="" width="500"/>
          </div>
        </div>
      </section>
      <section class="services-container flex fl-center">
        <div class="content-widthfix about-us-services-content flex fl-col fl-center">
          <div class="header-title-content flex fl-col fl-center">
            <span class="primary-color">Our Servicex</span>
            <h1>We Offer Best Services</h1>
          </div>
          <ul class="services-list flex fl-center">
            <li class="flex fl-col fl-center">
              <img src="http://ebaytemplate.com/thesoft/website/trucking/assets/img/services/service-1.png"/>
              <h2>Competitive Pay</h2>
              <p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod. </p>
            </li>
            <li class="flex fl-col fl-center">
              <img src="http://ebaytemplate.com/thesoft/website/trucking/assets/img/services/service-2.png"/>
              <h2>Flexible Hours</h2>
              <p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod</p>
            </li>
            <li class="flex fl-col fl-center">
              <img src="http://ebaytemplate.com/thesoft/website/trucking/assets/img/services/service-3.png"/>
              <h2>24/7 services</h2>
              <p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod</p>
            </li>
          </ul>
        </div>
      </section>
    </motion.div>
  )
}

export default Home;