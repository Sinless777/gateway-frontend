import React from 'react'

import { NavItem, NavLink, NavbarBrand } from 'reactstrap'
import { NavLink as Link } from 'react-router-dom'
import { GiWingedSword, GiCastle } from 'react-icons/gi'
import { IoIosContact } from 'react-icons/io'
import { FaMoneyBillWave, FaHome } from 'react-icons/fa'

export const BrandIcon = (props) => (
    <div {...props} className="brand-icon">
        <img src="../../../../content/images/Logo.png" alt="logo" />
    </div>
)

export const Brand = () => (
    <NavbarBrand tag={Link} to="/" className="brand-logo">
        <BrandIcon />
        <span className="brand-title"> Helix </span>
        <a href=" " className="navbar-version">
            {VERSION}
        </a>
    </NavbarBrand>
)

export const HelixHome = () => (
    <NavItem>
        <NavLink tag={Link} to="/" className="d-flex align-items-center">
            <FaHome className="navbar-icon" />
            <span className="navbar-link">Home</span>
        </NavLink>
    </NavItem>
)

