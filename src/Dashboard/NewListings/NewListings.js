import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { firebase } from '../../Util/Firebase';
export const NewListings = (props) => {
  const [trucks, setTrucks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const cityRef = firebase.firestore().collection("TruckPost");
      cityRef.onSnapshot((querySnapShot) => {
        const items = [];
        querySnapShot.forEach((doc) => {
          let info = doc.data();
          let id = doc.id;
          items.push({...info, id});  
        });
        setTrucks(items)
        setLoading(false);
      });
    }
    
    fetch();
  }, [])
  
  return (
    <div className='header-content-right-page'>
      <div className='content-sizing-db wrapper-db-content'>
        <div className='header-and-create-button'>
          <h3>My New Listings</h3>
          <Link to="/dashboard/trucks/add" className="btn-general primary-btn">Create <i class="bi bi-plus-lg"></i> </Link>
        </div>
        <table className='activity-table'>
          <thead>
            <th>Status</th>
            <th>Email</th>
            <th>Type</th>
            <th>Make</th>
            <th>Year</th>
            <th></th>
          </thead>
          <tbody>
            {!loading && (trucks && trucks.map((item, index) => (
              <tr key={index}>
                <td>
                  <div>new</div>
                </td>
                <td><span>{item.ContactName}</span>{item.ContactEmail}</td>
                <td>{item.TruckType}</td>
                <td>{item.TruckMake}</td>
                <td>{item.Year}</td>
                <td><Link className="btn-danger delete-button-table" to="/"><i class="bi bi-trash3"></i> Delete</Link><Link className=" edit-button" to="/"><i class="bi bi-pencil"></i> Edit</Link></td>
              </tr>
            )))}
          </tbody>
          {!loading && trucks != undefined && trucks.length <= 0 && 
          <div className='centering-messages mt-5'>
            <h4>No Items Found</h4>
            <p>It seems we don't have any inventory in the system</p>
            <Link className="btn-general primary-btn mt-3" to="/">Add Product</Link>
          </div>
          }

          {loading && <div className='centering-messages mt-5'><div class="spinner-border" role="status"></div><p>Please Wait</p></div>}
        </table>
      </div>
    </div>
  )
}

export default NewListings