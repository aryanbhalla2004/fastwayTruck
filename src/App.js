import {useEffect, useState} from 'react';
import {Routes, Route, Navigate, Link} from "react-router-dom";
import { AnimatePresence, Motion } from 'framer-motion';
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

const App = () => {
  const [page, setPage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function() {setLoading(false)}, 0);
  }, [loading])

  return (
    <>
    {!loading ?
    <AnimatePresence>
      <Header page={page} setPage={setPage} setLoading={setLoading}/>
      <Routes>
        <Route path="/" element={<Navigate to="home"/>}/>
        <Route path="home" element={<Home setPage={setPage}/>}/>
        <Route path="about" element={<About setPage={setPage}/>}/>
        <Route path="trucks" element={<Trucks setPage={setPage}/>}/>
        <Route path="trailers" element={<Trailers setPage={setPage}/>}/>
        <Route path="about-us" element={<About setPage={setPage}/>}/>
        <Route path="contact-us" element={<Contact setPage={setPage}/>}/>
        <Route path="sell-truck" element={<SellTruck setPage={setPage}/>} />
        <Route path="truck-detail/:id" element={<TruckDetail setPage={setPage}/>} />
        <Route path="trailers-detail/:id" element={<TrailerDetail setPage={setPage}/>} />
      </Routes>
      <Footer />
    </AnimatePresence> : <Loading/> }
    </>
  )
}

export default App;
