import React from 'react';
import Header from "@/components/Header";
import FooterDown from "@/components/FooterDown";

const Layout = ({children}) => {
    return (
        <div className=''>
            <Header/>
            {children}
            <FooterDown/>
        </div>
    );
};

export default Layout;