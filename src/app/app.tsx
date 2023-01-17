import 'react-toastify/dist/ReactToastify.css'
import './app.scss'
import '../app/config/dayjs.ts'


import { BrowserRouter } from 'react-router-dom'
import {getApp} from "./utils/helpers";
import React from "react";

export const App = () => {
    const Current_App = getApp()
    console.log(Current_App)
    return (
        <BrowserRouter>
            <Current_App/>
        </BrowserRouter>
    )
}
