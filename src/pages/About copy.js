import React from 'react'
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Testmonial from './Testmonial';
import Footer from './Footer';
import Skills from './Skills';
import { green } from '@mui/material/colors';
// import Shape from 'react-clip-path';

export default function About() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'rgb(222, 215, 215)',
    ...theme.typography.body2,
    padding: theme.spacing(.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '20vh',
    width: '100%'
  }));

  function downloadCv(params) {
    const element = document.getElementById('download-cv');
  }
  return (
    <>
      <div className='container-about'>
        <div className='about-sec-content'>
          <div className="about-sec-1">
            section 1
            <div className='about-sec-title'>
              <h2 className='margin-bottom-23'>ABOUT ME</h2>
              <h5 className='title '>A small introduction about myself</h5>
            </div>
            <div className='about-sec-1-content'>
              <div className='about-sec-1-part1 div-height-width'>
                <div id='download-cv'>
                  <h2 className='title '>A Web Designer & Web <br></br>Developer Based in Dhaka Bangladesh</h2>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p>Name:
                    Rowshon Chowdhoury
                    Date of birth:
                    January 01, 1900
                    Address:
                    Dhaka Bangladesh
                    Zip code:
                    1212
                    Email:
                    suraya.rowshon@gmail.com
                    Phone:
                    +1-2234-5678-9-0</p>
                </div>
                <div className='download-btn'>
                  <Button variant="contained" className='btn-style' onClick={downloadCv()}>DOWNLOAD CV</Button>&nbsp;&nbsp;
                  <Button variant="contained" className='btn-style' onClick={downloadCv()}>HIRE ME</Button>
                </div>
              </div>
              <hr style={{ border: '20x', paddingLeft: '5%', display: "none" }}></hr>
              <div className='about-sec-1-part2 div-height-width'>
                <div className='clip-circle-1'>
                  <div className='clip-circle'>
                    <img src="././img/rc-1.jpg" className='img-size' alt='image not found'></img>
                    {/* <div className='ResumeAboutMeBlock Resume-profilePicture'>
                  {/* <img src="././img/rc-1.jpg" className='img-size' alt='image not found'></img> */}
                    {/* <div className='Resume-profilePicture1' style={{ "width": "500px", "height": "500px", "backgroundColor": "green" }}> */}
                    {/* <img src="././img/rc-2.jpg" style={{ "width": "300px", "height": "300px" }} className='' alt='image not found'></img> */}

                    {/* </div> */}
                    {/* </div> */}
                  </div>
                </div>
                {/* <Shape
                  name="Circle"
                  id="circle-shape-id"
                  width="300px"
                  height="300px"
                  showLabel={true}
                  showShadow={true}
                  handleClick={() => someFunction()}
                >
                  <img src="././img/rc-1.jpg" className='img-size' alt='image not found'></img>
                </Shape> */}

                {/* <Grid container spacing={3}>
              <Grid item xs={6}>
                <Item>
                  <h2>5,000</h2>
                  <p>Happy Clients</p>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <h2>1,200</h2>
                  <p>Projects Done</p></Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <h2>500</h2>
                  <p>Cups of Coffee</p></Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <h2>587</h2>
                  <p>Working Hourse</p></Item>
              </Grid>
            </Grid> */}
              </div>
            </div>
          </div>
          <div className="about-sec-2">section 2
            <Skills />
          </div>
          <div className="about-sec-3">section 3
            <Testmonial />
          </div>
          <div className="about-sec-4 skill-level-center">
            <Footer />
          </div>
        </div>
      </div>

    </>
  )
}
