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


const App = () => {
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3500);
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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutPage />}/>
      </Routes>
    </Wrapper>
    </BrowserRouter>
   )}
    </>
  )
}

export default App
