import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { firebase } from '../../Util/Firebase';

export const Inquires = () => {
  const [trailers, setTrailers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const cityRef = firebase.firestore().collection("Inquires");
      cityRef.onSnapshot((querySnapShot) => {
        const items = [];
        querySnapShot.forEach((doc) => {
          let info = doc.data();
          let id = doc.id;
          items.push({...info, id});  
        });
        setTrailers(items)
        setLoading(false);
      });
    }
    
    fetch();
  }, [])

  return (
    <div className='header-content-right-page'>
      <div className='content-sizing-db wrapper-db-content'>
        <div className='header-and-create-button'>
          <h3>My Inquires</h3>
          <Link to="/dashboard/trucks/add" className="btn-general primary-btn">Clear All <i class="bi bi-dash-lg"></i> </Link>
        </div>
        <table className='activity-table'>
          <thead>
            <th>Stocks #</th>
            <th>Title</th>
            <th>Year</th>
            <th>Created Date</th>
            <th>Quantity</th>
            <th></th>
          </thead>
          <tbody>
            {!loading && (trailers && trailers.map((item, index) => (
              <tr key={index}>
                <td>{item.stockNum}</td>
                <td>{item.title}</td>
                <td>{item.year}</td>
                <td>{item.createdDate}</td>
                <td>{item.quantity}</td>
                <td><Link className="btn-danger delete-button-table" to="/"><i class="bi bi-trash3"></i> Delete</Link><Link className=" edit-button" to="/"><i class="bi bi-pencil"></i> Edit</Link></td>
              </tr>
            )))}
          </tbody>
          {!loading && trailers != undefined && trailers.length <= 0 && 
          <div className='centering-messages mt-5'>
            <h4>No Items Found</h4>
            <p>It seems we don't have any inventory for product Inquires</p>
            <Link className="btn-general primary-btn mt-3" to="/">Back Home</Link>
          </div>
          }

          {loading && <div className='centering-messages mt-5'><div class="spinner-border" role="status"></div><p>Please Wait</p></div>}
      
        </table>
      </div>
    </div>
  )
}

export default Inquires