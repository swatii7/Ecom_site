import React, { Children } from 'react'
import Footer from '../Component/Footer/Footer'
import TopNav from '../Component/Header/TopNav'
import Navbar from '../Component/Header/NavBar'

function Layout({Children}) {
    return (
        <div>
            <TopNav />
            <Navbar />
            <main>{Children}</main>
            <Footer />
        </div>
    )
}

export default Layout
