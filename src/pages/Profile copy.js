import { React, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Icon } from '@mui/material/Icon';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DeleteIcon from '@mui/icons-material/Delete';
import './../fallingSnow.css'

export default function Profile() {


 return (
  <>
   Profile
   <div className='snow11' style={{ width: "300px", height: "300px", border: "1px solid", margin: "10px", padding: "10px" }}>
    <div className='snow snow1'>
     {/* <p>* * * * * * * * * * * * * * * </p>
     <p>* * * * * * * * * * * * * * *</p>
     <p>* * * * * * * * * * * * * * *</p>
     <p>* * * * * * * * * * * * * * *</p>
     <p >* * * * * * * * * * * * * * *</p> */}
    </div>
    <div className='snow snow2'>
     {/* <p >* * * * * * * * * * * * * * * </p>
     <p>* * * * * * * * * * * * * * *</p>
     <p >* * * * * * * * * * * * * * *</p>
     <p>* * * * * * * * * * * * * * *</p>
     <p>* * * * * * * * * * * * * * *</p> */}
    </div>
    <div className='snow snow3'>
     {/* <p >* * * * * * * * * * * * * * * </p>
     <p>* * * * * * * * * * * * * * *</p>
     <p >* * * * * * * * * * * * * * *</p>
     <p>* * * * * * * * * * * * * * *</p>
     <p>* * * * * * * * * * * * * * *</p> */}
    </div>
    {/* <AcUnitIcon className='fallingSnow' /> */}
    {/* <svg data-testid="DeleteIcon"></svg> */}
   </div>
  </>
 )
}
