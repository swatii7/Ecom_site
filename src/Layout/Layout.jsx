import React, { Children } from 'react'
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'
import TopNav from '../Component/Header/TopNav'

function Layout({Children}) {
    return (
        <div>
            <TopNav />
            <Header />
            <main>{Children}</main>
            <Footer />
        </div>
    )
}

export default Layout
