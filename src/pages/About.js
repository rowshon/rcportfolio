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
  // Test - driven development(TDD)
  function downloadCv(params) {
    const element = document.getElementById('download-cv');
  }
  return (
    <>
      <div className='container-about'>
        <div className='about-section-container'>
          <div className='about-section-container-body'>
            <div className='about-section-1'>
              <div className='about-section-contain'>
                <div className='about-section-contain-title'>
                  <p className='about-section-title'>ABOUT ME</p>
                  <p className='about-section-sub-title'>A small introduction about myself</p>
                </div>
                <div className='about-section-contain-body about-section-contain-body-flex'>
                  <div className='about-sec-1-col-6'>
                    <div id='download-cv'>
                      <h2 className='title '>Rowshon Chowdhoury </h2><h5>Full-stack web developer in Dhaka</h5>
                      <p>
                        Experienced Developer. Skilled in Grails, Java (Spring boot), React JS, javascript, jquery, continuous integration, and Application Programming Interfaces.</p>

                      {/* <p> Strong engineering professional with a Licence focused in Web Development from Université Claude Bernard Lyon 1.</p> */}

                      <p> My favorite stack: Grails, Spring boot,React JS, Rest API, Javascript and Jquery.
                      </p>
                      {/* , and continuous integration on Github */}
                      {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
                      {/* <p>Name:
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
                        +1-2234-5678-9-0</p> */}
                    </div>
                    <div className='download-btn-about-section-1'>
                      <Button variant="contained" className='btn-style btn-bg-dodgerblue' >
                        <a href='././file/CV_RowshonChowdhoury.pdf' role='button' target='_blank'>DOWNLOAD CV</a>
                      </Button>&nbsp;&nbsp;
                      <Button variant="contained" className='btn-style btn-bg-coral'>
                        <a href='mailto:suraya.rowshon@gmail.com'>HIRE ME</a></Button>
                    </div>
                  </div>
                  <div className='about-sec-1-col-6'>
                    <div className='clip-circle-1'>
                      <div className='clip-circle'>
                        <img src="././img/rc-1.jpg" className='img-size' alt='image not found'></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='about-section-contain-footer'></div>
              </div>
            </div>
            <div className='about-section-2'>
              <div className='about-section-contain'>
                <div className='about-section-contain-title'>
                  <p className='about-section-title'>SKILLS</p>
                  <p className='about-section-sub-title'>MY SKILLS</p>
                </div>
                <div className='about-section-contain-body'>
                  <Skills />
                </div>
                <div className='about-section-contain-footer'></div>
              </div>
            </div>
            {/* <div className='about-section-3'>
              <div className='about-section-contain'>
                <div className='about-section-contain-title'>
                  <p className='about-section-title'>TESTIMONIAL</p>
                  <p className='about-section-sub-title'>Happy Guests</p>
                </div>
                <div className='about-section-contain-body'>
                  <Testmonial />
                </div>
                <div className='about-section-contain-footer'></div>
              </div>
            </div> */}
          </div>
        </div>
        <div className='about-section-5'>
          <div className='footer-section'>
            <div className='copyright-style'>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
