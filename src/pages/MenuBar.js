// import React from 'react'
import * as React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import Icon from '@mui/material/Icon';
export default function MenuBar() {
 return (
  <>
   <nav className="nav" >
    <ul>
     <CustomLink to="/"><OtherHousesIcon style={{ 'fontSize': '30px' }} /></CustomLink>
    </ul>
    <ul>
     {/* <CustomLink to="/profile">Profile</CustomLink> */}
     <CustomLink to="/about">About</CustomLink>
     <CustomLink to="/portfolio">Works</CustomLink>
     <CustomLink to="/experiance">Experiences</CustomLink>
     {/* <CustomLink to="/snow">Snow</CustomLink> */}
     {/* <CustomLink to="/qr">QR</CustomLink> */}
    </ul>
   </nav>

  </>
 )
}

function CustomLink({ to, children, ...props }) {
 const resolvedPath = useResolvedPath(to)
 const isActive = useMatch({ path: resolvedPath.pathname, end: true })

 return (
  <li className={isActive ? "active" : "inActive"}>
   <Link to={to} {...props}>
    {children}
   </Link>
  </li>
 )
}
