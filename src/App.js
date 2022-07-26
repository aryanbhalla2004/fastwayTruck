import {useEffect, useState} from 'react';
import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import {firebase, auth, db} from './Util/Firebase'
import "./App.css";
import "./index.css";
import Header from './Components/header';
import Footer from './Components/footer';
import Home from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Loading } from './Components/loading';
import SellTruck from './Pages/SellTruck';
import Trucks from './Pages/Trucks';
import TruckDetail from './Pages/TruckDetail';
import Trailers from './Pages/Trailers';
import TrailerDetail from './Pages/TrailerDetail';
import Dashboard from './Dashboard/Dashboard';
import Login from './Pages/Login';
import LandingPage from './Pages/LandingPage';

import {Trucks as DashboardTruck} from './Dashboard/Trucks/Trucks';
import {Trailers as DashboardTrailers} from './Dashboard/Trailers/Trailer';
import {Inquires as DashboardInquires} from './Dashboard/ProductInquries/Inquires';
import {NewListings as DashboardListings} from './Dashboard/NewListings/NewListings';
import {Sales as DashboardSales} from './Dashboard/Sales/Sales';
import SaleView from './Dashboard/Sales/SaleView';
import SalesAdd from './Dashboard/Sales/SalesAdd';
import SalesEdit from './Dashboard/Sales/SalesEdit';
import NewListingView from './Dashboard/NewListings/NewListingView';
import InquireView from './Dashboard/ProductInquries/InquireView';
import TrailerView from './Dashboard/Trailers/TrailerView';
import TrailerAdd from './Dashboard/Trailers/TrailerAdd';
import TrailerEdit from './Dashboard/Trailers/TrailerEdit';
import TruckView from './Dashboard/Trucks/TruckView';
import TruckAdd from './Dashboard/Trucks/TruckAdd';
import TruckEdit from './Dashboard/Trucks/TruckEdit';
const App = () => {
  const history = useNavigate();
  const [currentUser, setCurrentUser] = useState();
  const [page, setPage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        setLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    setTimeout(function() {setLoading(false)}, 0);
  }, [loading]);

  const login = (email, password) => {
    console.log("login");
    return auth.signInWithEmailAndPassword(email, password);
  };

  const add = async (obj , type) => {
    try {
      await firebase.firestore().collection(type).doc().set(obj);
    } catch(e){
      return e.message
    } 
  }

  const edit = async (obj,type,id) => {
    try {
      await firebase.firestore().collection(type).doc(id).update(obj);
    } catch(e){
      return e.message
    } 
  }

  const del = async (type, id) => {
    try {
      await firebase.firestore().collection(type).doc(id).delete();
    } catch(e){
      return e.message
    } 
  }

  const getData = async (from) => {
    const cityRef = firebase.firestore().collection(from);
    cityRef.onSnapshot((querySnapShot) => {
      const items = [];
      querySnapShot.forEach((doc) => {
        let info = doc.data();
        let id = doc.id;
        items.push({...info, id});  
      });
      return items
    });
  }


  const logout = () => {
    auth.signOut().then((res) => {
        setCurrentUser(null);
        history("/login");
        return res;
      }).catch((err) => {
        return err;
      });
  };

  return (
    <>
    {!loading ?
    <AnimatePresence>
      <Routes>
        <Route path="dashboard" element={currentUser ? <Dashboard del={del} currentUser={currentUser} logout={logout}/> : <Navigate to="/login"/>}>
          //! Trucks
          <Route path="trucks" element={<DashboardTruck getData={getData}/>}/>
          <Route path="trucks/:id" element={<TruckView/>}/>
          <Route path="trucks/add" element={<TruckAdd/>}/>
          <Route path="trucks/edit/:id" element={<TruckEdit/>}/>

          //! Trailers
          <Route path="trailers" element={<DashboardTrailers/>} />
          <Route path="trailers/:id" element={<TrailerView/>}/>
          <Route path="trailers/add" element={<TrailerAdd/>}/>
          <Route path="trailers/edit/:id" element={<TrailerEdit/>}/>

          <Route path="product-inquire" element={<DashboardInquires/>} />
          <Route path="product-inquire/:id" element={<InquireView/>}/>

          <Route path="new-listings" element={<DashboardListings/>} />
          <Route path="new-listing/:id" element={<NewListingView/>}/>

          //! Bill of Sales
          <Route path="sales" element={<DashboardSales/>} />
          <Route path="sales/:id" element={<SaleView/>}/>
          <Route path="sales/add" element={<SalesAdd/>}/>
          <Route path="sales/edit/:id" element={<SalesEdit/>}/>
        </Route>

        <Route path="/" element={<LandingPage setPage={setPage} setLoading={setLoading} page={page}/>}>
          <Route index element={<Home setPage={setPage} setLoading={setLoading} page={page}/>}/>
          <Route path="about" element={<About setPage={setPage}/>}/>
          <Route path="trucks" element={<Trucks setPage={setPage}/>}/>
          <Route path="trailers" element={<Trailers setPage={setPage}/>}/>
          <Route path="about-us" element={<About setPage={setPage}/>}/>
          <Route path="contact-us" element={<Contact setPage={setPage}/>}/>
          <Route path="sell-truck" element={<SellTruck setPage={setPage} add={add}/>} />
          <Route path="truck-detail/:id" element={<TruckDetail setPage={setPage} add={add}/>} />
          <Route path="trailers-detail/:id" element={<TrailerDetail setPage={setPage}/>} />
          <Route path="login" element={currentUser ? <Navigate to="/dashboard"/> : <Login login={login}/>}/>
        </Route>
      </Routes>
      
    </AnimatePresence> : <Loading/> }
    </>
  )
}

export default App;
