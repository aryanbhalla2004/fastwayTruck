import React, { useEffect } from 'react';
import { PageTitle } from '../Components/page-header';
import { motion } from 'framer-motion';
import Helmet from 'react-helmet';

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Helmet>
        <title>Contact Us | Leo Transport</title>
      </Helmet>
      <PageTitle name="Contact us"/>
      <div className="contact-col">
        <div className="content-widthfix contact-col-info">
          <div className="left-col">
            <span>LET'S TALK</span>
            <h2>Speak With Expert Engineers.</h2>
            <div className="contact-info-form-col">
              <div className="contact-icon">
                <i className="bi bi-house-door-fill"></i>
              </div>
              <div>
                <h3>Email:</h3>
                <p>info@fastwaytruck.com</p>
              </div>
            </div>
            <div className="contact-info-form-col">
              <div className="contact-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <h3>Address:</h3>
                <p>2095 Logan Ave, Winnipeg MB, Canada</p>
              </div>
            </div>
            <div className="contact-info-form-col">
              <div className="contact-icon">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div>
                <h3>Phone:</h3>
                <p>+1 (204)-615-1000</p>
              </div>
            </div>
          </div>
          <form className="form-contact">
            <span>GET IN TOUCH</span>
            <h2>Fill The Form Below</h2>
            <div className="col-2-filed">
              <input placeholder="Name" value=""/>
              <input placeholder="Email" value=""/>
            </div>
            <div className="col-2-filed">
              <input placeholder="Phone Number" value=""/>
              <input placeholder="Subject" value=""/>
            </div>
            <textarea placeholder="Your Message Here" value=""></textarea>
            <button className='btn-general primary-btn'>Send Inquiry</button>
          </form>
        </div>
      </div>
      <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2095%20Logan%20Ave,%20Winnipeg%20MB,%20Canada+(Fastway%20Trucking)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/farm-gps/">GPS Navigation</a></iframe>
    </motion.div>
  )
}
