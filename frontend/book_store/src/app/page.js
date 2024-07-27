'use client'
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import HomePage from './pages/home';
import TopMenu from "./components/pages/topMenu"
import Options from './components/pages/options';
import MainPanel from './components/pages/homepage/mainPanel';
import Features from './components/pages/homepage/features';
import BestSeller from './components/pages/homepage/bestSeller';
import LastIncome from './components/pages/homepage/lastIncome';
import Footer from './components/pages/homepage/footer';
import Info from './components/pages/homepage/info';
import Login from './components/pages/authentication/login';
import Register from './components/pages/authentication/register';
import Product from './components/pages/product/product';
import ListingMain from './components/pages/listing/listingMain';
import AdminProducts from './components/admin/adminProducts';
import MainProduct from './components/admin/mainProduct';

import ListingPage from './books/page';
import LoginPage from './login/page';
import { AuthProvider } from './login/authContext';
export default function Home() {
  const [page,setPage]=useState(false)
  const [footer,setFooter]=useState(true)
  return (
    
    <AuthProvider>
    <main className={styles.main}>
        
        <HomePage></HomePage>
      </main>
      </AuthProvider>
     
      
  );
}
