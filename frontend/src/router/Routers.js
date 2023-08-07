import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from "../Pages/Home";
import Login from '../Pages/Login';
import Register from '../Pages/Register'
import TourDetails from '../Pages/TourDetails';
import Tour from '../Pages/Tour';
import ThankYou from '../Pages/ThankYou';
import Review from '../Pages/Review';
import Services from '../Pages/Services';
import ContactUs from '../Pages/Contact-us';

const Routers = () =>  {
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/:mainLocation' element={<Tour/>} />
            <Route path='/tour-package/:packageDetails' element={<TourDetails/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/thank-you' element={<ThankYou/>} />
            <Route path="/write-review" element={<Review />} />
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact-us" element={<ContactUs/>}/>
        </Routes>
    )
}

export default Routers;