import { React, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './../fallingSnow.css'
import img from "../image/546465.jpg"
import { height } from '@mui/system'
import { Icon } from '@mui/material/Icon';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function Home() {
 const [snowFlex, setSnowFlex] = useState([{}])
 // setInterval(createSnowFlake, 50);
 // function createSnowFlake() {
 //  const snow_flake = document.createElement("p")
 //  // snow_flake.innerHTML = "*"
 //  // snow_flake.classList.add("fallingSnow")
 //  // console.log(snow_flake)
 //  // snow_flake.style.left = Math.random() * window.innerWidth + 'px';
 //  // snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
 //  // snow_flake.style.opacity = Math.random();
 //  // snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';

 //  document.body.appendChild(snow_flake);
 //  setTimeout(() => {
 //   // snow_flake.remove();
 //  }, 5000)
 // }

 // useEffect(() => {
 //  createSnowFlake()
 //  setInterval(() => {
 //   /*
 //       Run a function or set any state here
 //   */
 //   // createSnowFlake()
 //  }, 50);
 // }, []);
 const snow_flex = document.createElement("p")
 // setInterval(createSnowFlex, 100);
 function createSnowFlex(params) {
  snow_flex.innerHTML = "*"
  snow_flex.classList.add("fallingSnow")
  snow_flex.style.left = Math.random() * window.innerWidth + "px";
  // document.body.appendChild(snow_flex)
  document.getElementById('sn').append(snow_flex)
 }

 useEffect(() => {
  // createSnowFlex()

  console.log(snow_flex)
 }, []);

 return (
  <>
   <div id='hm' className=''>Home</div>
   <p className='fallingSnow' style={{ display: "none" }}>*</p>
   <div id='sn'></div>
   {/* <AcUnitIcon className='fallingSnow' /> */}
   <img src={img} alt='no image' style={{ height: "300px", width: "300px" }} />
  </>
 )
}