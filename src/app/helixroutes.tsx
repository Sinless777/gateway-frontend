import {Route, Routes} from "react-router-dom";
import { HelixHome } from "./helix/Home/main";
import PageNotFound from "../app/shared/errors/page-not-found";
import React from "react";
import Header from './shared/layout/helixHeader/header'
import Footer from "./shared/layout/helixFooter/footer";
import { Card } from 'reactstrap'

export const HelixRoutes = () => {
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
                            <Route index element={<HelixHome />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                        <Footer />
                    </Card>
                </div>

                <Footer />
            </div>
        </div>
    )
}