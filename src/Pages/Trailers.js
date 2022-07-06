import React, { useEffect } from 'react';
import { PageTitle } from '../Components/page-header';
import { motion } from 'framer-motion';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';


export const Trailers = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Helmet>
        <title>Trailers | Fastway Trucking</title>
      </Helmet>
      <PageTitle name="Trailers"/>
      <div className=" trucks-container flex fl-center services-container">
        <div className="content-widthfix flex">
          <div className='filter-left flex'>
            <input className="form-control filter-inputs-fields form-control-md form-control-dark" id="name" name="name" type="text" placeholder="What are you looking for?" required=""/>
            <select className="form-control filter-inputs-fields form-control-md form-control-dark" id="type" name="type" required="" >
              <option value="">Trailer Make</option>
              <option value="1">DAYCAB</option>
              <option value="2">HIGHWAY</option>
              <option value="3">DUMP TRUCK</option>
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
              <h2>Types of Trailers</h2>
              <ul className="tags-nav">
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      B-Train
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Bulk
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Car Carrier
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Cargo Trailer
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Containers/Storage
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Curtain Side
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Dolley trailer
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Drop Deck
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Dry Van
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Dump
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Enclosed
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Flat
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Floats
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Goose neck
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Grain
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Heavy Equipment
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Highboy
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Hopper
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Horse
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Live Floor
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Living Quarters
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Live Stock
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Logging & Forestry
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Lowboy
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      OTHER Specialty Trailer
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Reefer
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Roll-off
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Tag Trailer
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Tandem Axle
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Tanker Trailer
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Tiltbed
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Heater
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Tri-Axle
                    </label>
                  </div>
                </li>
                <li>
                  <div class='checkboxes'>
                    <label class='checkbox'>
                      <input type='checkbox' />
                      <span class='indicator'></span>
                      Quad-Axle
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
              <span>Showing <b>1</b> results</span>
              <i className="bi bi-arrow-return-right"></i>
            </div>
            <ul className='listing-of-items flex fl-center fl-space-between'>
              <li className='single-item flex fl-col'>
                <div className="item-image" style={{backgroundImage: `url("https://hpmis.com/backend/uploads/9487a23de53d35604b84bf4b9a24ae74k.jpeg")`}}>
                  <span className='new-item'>New</span>
                </div>
                <div className='single-item-info flex fl-col'>
                  <span className='stock-num'>Stock #517 | <b>Year: 2022</b></span>
                  <h2>CARRIER - 8500 VECTOR - REEFER</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit officia nobis, labore quo minus iusto nostrum voluptates delectus.</p>
                  <ul className='flex'>
                    <li><i className="bi bi-paint-bucket"></i> White</li>
                    <li><i className="bi bi-basket2"></i> Used</li>
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

export default Trailers;