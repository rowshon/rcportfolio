import { React, useEffect, useState } from 'react'
import { Box, TextField, MenuItem, Button, Checkbox, RadioGroup, Radio, FormControl, FormControlLabel, FormLabel, Stack, Select, Grid } from '@mui/material'

import './../css/style.css'
import Footer from './Footer'
// import Icon from '@mui/material/Icon';
export default function Home() {
 return (
  <>
   {/* <Box
    sx={{
     display: 'grid',
     gridTemplateColumns: { sm: '1fr' },
     gap: 8, paddingLeft: '0%'
    }}
    noValidate
    autoComplete="off"
   > */}
   <div className="section1">
    <div className="section11">
     <div className="p-info">
      <p className='designtion'>Full Stack Web Developer</p>
      <h1 className='myName'>I'm Rowshon <br></br>Chowdhoury</h1>
      <div className='bnt'>
       <div className='about-me-btn'>
        <a href='././file/CV_RowshonChowdhoury.pdf' target={'_blank'}>More About Me -></a>
       </div> &nbsp;
       <div className='hire-btn'>
        <a href='mailto:suraya.rowshon@gmail.com'>Hire Me  -></a>
       </div>
      </div>
     </div>
     <div className="copyright-style">
      <Footer />
     </div>
    </div>
    <div className="section12">
     <div style={{ 'display': 'flex', 'paddingTop': '8vh' }}>
      <img src="././img/ss1.png" className='img-size-g' alt='image not found'></img>
      <img src="././img/ss2.png" className='img-size-g' alt='image not found'></img>
      <img src="././img/ss3.png" className='img-size-g' alt='image not found'></img>
     </div>
     <div style={{ 'display': 'flex', 'paddingTop': '0vh' }}>
      <img src="././img/ss4.png" className='img-size-g' alt='image not found'></img>
      <img src="././img/ss5.png" className='img-size-g' alt='image not found'></img>
      <img src="././img/ss6.png" className='img-size-g' alt='image not found'></img>
     </div>
     <div style={{ 'display': 'flex', 'paddingTop': '0vh' }}>
      <img src="././img/ss7.png" className='img-size-g' alt='image not found'></img>
      <img src="././img/ss8.png" className='img-size-g' alt='image not found'></img>
      <img src="././img/ss9.png" className='img-size-g' alt='image not found'></img>
     </div>
     <div className="snow">
      <div className="test">

      </div>
     </div>
    </div>
   </div>
   {/* </Box> */}
  </>
 )
}