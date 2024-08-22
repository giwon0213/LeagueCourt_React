import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from "./Footer"
import style from "./Layout.module.css"


const Layout = () => {





    return (
        <>

            <div className={style.layout}>

                <Header />
                <main>
                    <Outlet />
                </main>
                
                <Footer />
                

            </div>

        </>
    );
};

export default Layout;