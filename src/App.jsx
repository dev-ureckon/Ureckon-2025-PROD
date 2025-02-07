import React from 'react'
import { useEffect, useLayoutEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Loader from './components/Loader';
import Home from './pages/Homepage/Page';
import AboutPage from './pages/AboutUs/Page';
import Team from './components/Team2pg/Team';
import TeamPage from './pages/Teampage/Page';
import EventPage from './pages/Events/Event1/Page';
import ContactUsPage from './pages/ContactUs/Page';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EventDetails from './pages/Events/EventDetails';
import EventsPage2 from './pages/Events/Event2/Page';
import Partners from './pages/Partners/Partners';
import PacBorderWrapper from './components/PacBorder';


const App = () => {
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return (
    <>
      {screenLoading ? (<Loader />) : (
        <BrowserRouter>
          <Wrapper>
            <Navbar />
            {/* <PacBorderWrapper> */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about-us' element={<AboutPage />} />
              <Route path='/team2' element={<Team />} />
              <Route path='/team' element={<TeamPage />} />
              <Route path='/partners' element={<Partners />} />
              <Route path='/contact-us' element={<ContactUsPage />} />
              <Route path='/events' element={<EventPage />}/>
              <Route path="/event/:eventId" element={<EventDetails />} />
              <Route path='/events/details' element={<EventsPage2/>} />
            </Routes>
            {/* </PacBorderWrapper> */}
            <Footer />
          </Wrapper>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
