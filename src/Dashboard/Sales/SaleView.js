import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import {firebase} from "../../Util/Firebase";
const SaleView = () => {
  const [listing, setListing] = useState();
  const {id} = useParams();
  
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async() => {
    firebase.firestore().collection('Sales').doc(id).get()
    .then((docRef) =>  {
      setListing(docRef.data());
    });


  }
  
  return (
    <div className='header-content-right-page'>
    <div className='content-sizing-db wrapper-db-content'>
      <div className='header-and-create-button'>
        <h3>View Sale</h3>
        <div className='d-flex'>
          <Link to="/dashboard/sales/" className="btn-general primary-btn mr-3"><i class="bi bi-arrow-left"></i> Back</Link>
          <Link to="/dashboard/sales/edit/asdasdasd" className="btn-general">Edit <i class="bi bi-binoculars"></i> </Link>
        </div>
      </div>
      <section className="card card-light card-body border-0 shadow-sm p-4 mt-5" id="basic-info">
        {listing && listing.email}
      </section>
    </div>
  </div>
  )
}


export default SaleView;
