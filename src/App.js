import {useEffect, useState} from 'react';
import {Routes, Route, Navigate, Link} from "react-router-dom";
import { AnimatePresence, Motion } from 'framer-motion';
import "./App.css";
import "./index.css";
import Header from './Components/header';
import Footer from './Components/footer';
import Home from './Pages/Home';
import { About } from './Pages/About';
import { Services } from './Pages/Services';
import { Contact } from './Pages/Contact';
import { Loading } from './Components/loading';

const App = () => {
  const [page, setPage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function() {setLoading(false)}, 3000);
  }, [loading])

  return (
    <>
    {!loading ?
    <AnimatePresence>
      <Header page={page} setPage={setPage} setLoading={setLoading}/>
      <Routes>
        <Route path="/" element={<Navigate to="home"/>}/>
        <Route path="home" element={<Home setPage={setPage}/>}/>
        <Route path="about-us" element={<About/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="contact-us" element={<Contact/>}/>
      </Routes>
      <Footer />
    </AnimatePresence> : <Loading/> }
    </>
  )
}

export default App;
