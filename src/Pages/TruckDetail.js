import React, { useState } from 'react';
import { PageTitle } from '../Components/page-header';
import { motion } from 'framer-motion';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

const TruckDetail = () => {
  const [currentPage, setCurrentPage] = useState("profile");
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [fieldError, setFieldError] = useState({
    email: false,
    name: false,
    message: false,
  });

  const [inquire, setInquire] = useState({
    name: '',
    email: '',
    productId: 'ASD8123HASD89123',
    subject: '',
    message: ''
  });

  const updateUserInput = (e) => {
    setFieldError(prevInput => ({
      ...prevInput, [e.target.name]: false
    }));

    setInquire(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(inquire.name != "" && inquire.email != "" && inquire.message != "") {
      try {
        //await emailjs.send("service_7bhb3hf", "template_zolsttk", truckDetail, 'O4nqrVM4jnHS9WBVF');
        //await firebase.firestore().collection("inquire").doc().set(inquire);
      } catch (e) {

      }
    } else {
      if(inquire.name === "") {
        setFieldError(prevInput => ({
          ...prevInput, name: true
        }));
      }

      if (inquire.email === "") {
        setFieldError(prevInput => ({
          ...prevInput, email: true
        }));
      }

      if(inquire.message === "") {
        setFieldError(prevInput => ({
          ...prevInput, message: true
        }));
      }
    }
  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Helmet>
        <title>Trucks | Fastway Trucking</title>
      </Helmet>
    <PageTitle name="KENWORTH - T800 - DUMP TRUCK"/>
    <div className="flex fl-center detail-page-header">  
      <div className='content-widthfix flex fl-center'>
        <a className={currentPage === "profile" && "active-single-detail-header-btn"} onClick={() => setCurrentPage("profile")}>Profile</a>
        <a className={currentPage === "inquire" && "active-single-detail-header-btn"} onClick={() => setCurrentPage("inquire")}>Inquire</a>
      </div>
    </div>

    {currentPage === "profile" && <motion.div className="flex fl-center detail-page">  
      <div className='content-widthfix details-boxes flex fl-center fl-space-between'>
        <div className='single-row'>
          <div className='single-box gallery-container'>
            <div className='single-box-header'>
              <h2><i className="bi bi-image"></i> Gallery</h2>
            </div>
            <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" width="500"></img>
          </div>
          
          <div className='single-box'>
            <div className='single-box-header'>
              <h2><i className="bi bi-grid-3x2-gap-fill"></i> Amenities</h2>
            </div>
            <ul className='flex list-of-amenities'>
              <li><i class="bi bi-fan"></i> Air conditioner</li>
              <li><i class="bi bi-usb-symbol"></i> USB Ports</li>
              <li><i class="bi bi-geo"></i> GPS</li>
              <li><i class="bi bi-speedometer2"></i> Cruise</li>
              <li><i class="bi bi-broadcast"></i> Radio Equipment</li>
            </ul>
          </div>  
        </div>
        <div className='single-row'>
          <div className='single-box description'>
            <div className='single-box-header'>
              <h2><i className="bi bi-justify"></i> Description</h2>
            </div>
            <p>The all-new Volvo XC60 is a terrific luxury compact SUV. It's been fully redesigned for 2017 and features improvements across the board. These changes bump the vehicle from its previous midpack standing; it now resides with some of the best in the class. Some of the most notable improvements include a state-of-the-art infotainment system, more legroom for rear-seat riders, and peppy engine choices.</p>
          </div>
          <div className='single-box'>
            <div className='single-box-header'>
              <h2><i className="bi bi-card-checklist"></i> Technical Specifications</h2>
            </div>
            <ul className='techincal-list flex fl-col'>
              <li>Manufacturing Year <span>2017</span></li>
              <li>Number of doors <span>5</span></li>
              <li>Max passengers <span>5</span></li>
              <li>Fuel <span>Diesel</span></li>
              <li>Fuel usage per 100km <span>2017</span></li>
              <li>Mileage <span>23650 km</span></li>
              <li>Color <span>Silver</span></li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>}

    {currentPage === "inquire" && <motion.div className="flex fl-center detail-page">  
      <div className='content-widthfix details-boxes flex fl-center'>
        <form className='inquireForm' onSubmit={onSubmit}>
          <label>Your Name (required)</label>
          {fieldError.name && <div id="validationServer03Feedback" class="invalid-feedback mt-0 mb-0">Please select a valid Name.</div>}
          <input className="form-control filter-inputs-fields form-control-md form-control-dark" id="name" name="name" value={inquire.name} onChange={updateUserInput} type="name" required=""/>
          <label>Your Email (required)</label>
          {fieldError.email && <div id="validationServer03Feedback" class="invalid-feedback mt-0 mb-0">Please select a valid Email.</div>}
          <input className="form-control filter-inputs-fields form-control-md form-control-dark" id="name" name="email" value={inquire.email} onChange={updateUserInput} type="email" required=""/>
          <label>Product Idenitifier</label>
          <input className="form-control filter-inputs-fields form-control-md form-control-dark" id="name" name="productId" value={inquire.productId} onChange={updateUserInput} type="text" disabled/>
          <label>Subject</label>
          <input className="form-control filter-inputs-fields form-control-md form-control-dark" id="name" name="subject" value={inquire.subject} onChange={updateUserInput} type="text" required=""/>
          <label>Message</label>
          {fieldError.message && <div id="validationServer03Feedback" class="invalid-feedback mt-0 mb-0">Please select a valid Message.</div>}
          <textarea className="form-control filter-inputs-fields form-control-md form-control-dark" name="message" value={inquire.message} onChange={updateUserInput}></textarea>
          <button className='search-button-filter btn-general primary-btn' type='submit'> Send</button>
        </form>
      </div>
    </motion.div>}


    <div className="logo-companies recommened-items-single-details flex fl-center">
        <div className="content-widthfix logos-home-wrapper flex fl-center fl-col">
          <h2>Recommended Products</h2>
          <h1>Items you might like</h1>
          <ul className='listing-of-items recommened-pro flex fl-center fl-space-between'>
            <li className='single-item flex fl-col'>
              <div className="item-image" style={{backgroundImage: `url("https://hpmis.com/backend/uploads/9487a23de53d35604b84bf4b9a24ae74k.jpeg")`}}>
                <span className='new-item'>New</span>
              </div>
              <div className='single-item-info flex fl-col'>
                <span className='stock-num'>Stock #517 | <b>Year: 2022</b></span>
                <h2>KENWORTH - T800 - DUMP TRUCK</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit officia nobis, labore quo minus iusto nostrum voluptates delectus.</p>
                <ul className='flex'>
                  <li><i className="bi bi-speedometer"></i> 568158 KMs</li>
                  <li><i className="bi bi-gear-wide"></i> 18 Speed</li>
                </ul>
              </div>
              <Link to={`/truck-detail/2323`} className='view-truck-button flex fl-space-between'>View Details <i className="bi bi-arrow-right"></i></Link>
            </li>
            <li className='single-item flex fl-col'>
              <div className="item-image" style={{backgroundImage: `url("https://hpmis.com/backend/uploads/9487a23de53d35604b84bf4b9a24ae74k.jpeg")`}}>
                <span className='new-item'>New</span>
              </div>
              <div className='single-item-info flex fl-col'>
                <span className='stock-num'>Stock #517 | <b>Year: 2022</b></span>
                <h2>KENWORTH - T800 - DUMP TRUCK</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit officia nobis, labore quo minus iusto nostrum voluptates delectus.</p>
                <ul className='flex'>
                  <li><i className="bi bi-speedometer"></i> 568158 KMs</li>
                  <li><i className="bi bi-gear-wide"></i> 18 Speed</li>
                </ul>
              </div>
              <Link to={`/truck-detail/2323`} className='view-truck-button flex fl-space-between'>View Details <i className="bi bi-arrow-right"></i></Link>
            </li>
            
            <li className='single-item flex fl-col'>
              <div className="item-image" style={{backgroundImage: `url("https://hpmis.com/backend/uploads/9487a23de53d35604b84bf4b9a24ae74k.jpeg")`}}>
                <span className='new-item'>New</span>
              </div>
              <div className='single-item-info flex fl-col'>
                <span className='stock-num'>Stock #517 | <b>Year: 2022</b></span>
                <h2>KENWORTH - T800 - DUMP TRUCK</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit officia nobis, labore quo minus iusto nostrum voluptates delectus.</p>
                <ul className='flex'>
                  <li><i className="bi bi-speedometer"></i> 568158 KMs</li>
                  <li><i className="bi bi-gear-wide"></i> 18 Speed</li>
                </ul>
              </div>
              <Link to={`/truck-detail/2323`} className='view-truck-button flex fl-space-between'>View Details <i className="bi bi-arrow-right"></i></Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default TruckDetail;