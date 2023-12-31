import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/navbar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='font-poppins'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Main;
