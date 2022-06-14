import React, { useEffect } from 'react';
import { PageTitle } from '../Components/page-header';
import { motion } from 'framer-motion';
import Helmet from 'react-helmet';

export const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Helmet>
        <title>Our Services | Leo Transport</title>
      </Helmet>
      <PageTitle name="Services"/>
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
