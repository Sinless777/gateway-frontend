import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MainHome from '../app/modules/home/home'
import MainAbout from '../app/modules/about/about'
import MainTainted from '../app/modules/tainted/tainted'
import MainContact from '../app/modules/contact/contact'
import MainServices from '../app/modules/services/services'

import { Card } from 'reactstrap'

import PageNotFound from '../app/shared/errors/page-not-found'
import Header from "../app/shared/layout/header/header";
import Footer from "../app/shared/layout/footer/footer";

export const AppRoutes = () => {
    return (
        <div className="view-routes">
            <div className="main">
                <Header />

                <div
                    className="container-fluid view-container"
                    id="app-view-container"
                >
                    <Card className="jh-card card">
                        <br />
                        <br />
                        <br />
                        <br />
                        <Routes>
                            <Route index element={<MainHome />} />
                            <Route path="about-us" element={<MainAbout />} />
                            <Route path="tainted-kingdoms" element={<MainTainted />} />
                            <Route path="contact-us" element={<MainContact />} />
                            <Route path="services" element={<MainServices />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </Card>
                </div>

                <Footer />
            </div>
        </div>
    )
}


