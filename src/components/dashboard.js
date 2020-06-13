import React from 'react';
import Navbar from './navbar';
import ProductList from './productsList';
import Footer from './footer';
import '../styles/dashboard.css';

const dashboard = ()=>(
    <div className='dashboard'>
        <Navbar />
        <ProductList />
        <div className='pageBody'>
        </div>
        
        <div className='pageFooter'>
            <Footer />
        </div>
    </div>
);

export default dashboard;
