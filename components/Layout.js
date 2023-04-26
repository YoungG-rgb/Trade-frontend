import React from 'react';
import Header from "@/components/Header";
import FooterDown from "@/components/FooterDown";
import dashboard from "@/pages/admin-panel/dashboard";
import about from "@/pages/admin-panel/aboutus";
import products from "@/pages/products";
import slides from "@/pages/admin-panel/slides";
import users from "@/pages/admin-panel/users";

const Layout = ({children}) => {
    switch (children.className) {
        case dashboard.className:
        case about.className:
        case products.className:
        case slides.className:
        case users.className:
            return (
                <>
                    {children}
                </>
            )
        default:
            return (
                <div className=''>
                    <Header/>
                    {children}
                    <FooterDown/>
                </div>
            );
    }
};

export default Layout;