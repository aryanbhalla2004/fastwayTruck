import React, { useEffect } from 'react';
import { PageTitle } from '../Components/page-header';
import { motion } from 'framer-motion';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

const Trucks = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Helmet>
        <title>Trucks | Fastway Trucking</title>
      </Helmet>
      <PageTitle name="Trucks"/>
      <div className=" trucks-container flex fl-center services-container">
        <div className="content-widthfix flex">
          <div className='filter-left flex'>
            <input className="form-control filter-inputs-fields form-control-md form-control-dark" id="name" name="name" type="text" placeholder="What are you looking for?" required=""/>
            <select className="form-control filter-inputs-fields form-control-md form-control-dark" id="type" name="type" required="" >
              <option value="">Vehicle Type</option>
              <option value="1">DAYCAB</option>
              <option value="2">HIGHWAY</option>
              <option value="3">DUMP TRUCK</option>
            </select>
            <select className="form-control filter-inputs-fields  form-control-md form-control-dark" id="make" name="make" required="">
              <option value="">Truck brand and model</option>
              <option value="1">FORD</option>
              <option value="2">FREIGHTLINER</option>
              <option value="3">HINO</option>
              <option value="4">INTERNATIONAL</option>
              <option value="5">KENWORTH</option>
              <option value="6">MACK</option>
              <option value="7">OTTAWA</option>
              <option value="8">PETERBILT</option>
              <option value="9">STERLING</option>
              <option value="10">VOLVO</option>
              <option value="11">WESTERN STAR</option>
              <option value="12">WHITE</option>
            </select>
            <div className='selection-filter-single'>
              <h2>Years</h2>
              <div className='flex fl-center year-max fl-space-between'>
                <input className="form-control form-control-md form-control-dark" id="name" name="name" type="number" placeholder="From" required=""/>
                <h3><i className="bi bi-dash-lg"></i></h3>
                <input className="form-control form-control-md form-control-dark" id="name" name="name" type="number" placeholder="To" required=""/>
              </div>
            </div>
            <div className='selection-filter-single'>
              <h2>Transmission</h2>
              <ul className="tags-nav">
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      AUTO
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      I-SHIFT
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      10 SPEED
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      13 SPEED
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      18 SPEED
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <a className='search-button-filter btn-general primary-btn'><i className="bi bi-search"></i> Search</a>
            <a className='reset-filter'><i className="bi bi-arrow-clockwise"></i> Reset Filter</a>
          </div>
          <div className='shop-items'>
            <div className='item-filter-top flex fl-center fl-space-between'>
              <i className="bi bi-arrow-return-left"></i>
              <span>Showing <b>4</b> results</span>
              <i className="bi bi-arrow-return-right"></i>
            </div>
            <ul className='listing-of-items flex fl-center fl-space-between'>
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
      </div>
    </motion.div>
  )
}

export default Trucks;