import React from 'react'
import { Link } from 'react-router-dom'
const TruckAdd = () => {
  return (
    <div className='header-content-right-page'>
      <div className='content-sizing-db wrapper-db-content'>
        <div className='header-and-create-button'>
          <h3>Create New Truck</h3>
          <Link to="/dashboard/trucks" className="btn-general primary-btn"><i class="bi bi-arrow-left"></i> Back</Link>
        </div>
        <section className="card card-light card-body border-0 shadow-sm p-4 mt-5" id="basic-info">
          //? Code here
        </section>
      </div>
    </div>
  )
}


export default TruckAdd