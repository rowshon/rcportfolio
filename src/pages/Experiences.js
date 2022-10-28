import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import WorkIcon from 'react-vertical-timeline-component'
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import SchoolIcon from '@mui/icons-material/School';

import Footer from './Footer';
export default function Experiance() {

 const expData = [
  {
   "code": 1,
   "companyName": "Decor Interior Ltd.",
   "designation": "Lead Developer",
   "joiningDate": "march 2019",
   "endDate": "continue",
   "jobResponsibility": "debelopment"
  }, {
   "code": 2,
   "companyName": "Decor Interior Ltd.",
   "designation": "Lead Developer",
   "joiningDate": "march 2019",
   "endDate": "continue",
   "jobResponsibility": "debelopment"
  }, {
   "code": 3,
   "companyName": "Decor Interior Ltd.",
   "designation": "Lead Developer",
   "joiningDate": "march 2019",
   "endDate": "continue",
   "jobResponsibility": "debelopment"
  }, {
   "code": 4,
   "companyName": "Decor Interior Ltd.",
   "designation": "Lead Developer",
   "joiningDate": "march 2019",
   "endDate": "continue",
   "jobResponsibility": "debelopment"
  }, {
   "code": 5,
   "companyName": "Decor Interior Ltd.",
   "designation": "Lead Developer",
   "joiningDate": "march 2019",
   "endDate": "continue",
   "jobResponsibility": "debelopment"
  }
 ]
 const education = [
  {
   "exp": [{
    "code": 1,
    "companyName": "Decor Interior Ltd.",
    "designation": "Lead Developer",
    "joiningDate": "march 2019",
    "endDate": "continue",
    "jobResponsibility": "Business analysis, design & development.Client management.Responsible for the deployment process.and assisting the team"
   }, {
    "code": 2,
    "companyName": "IBCS-PRIMAX Software Ltd.",
    "designation": "Senior Programmer",
    "joiningDate": "July 2017",
    "endDate": "February 2019",
    "jobResponsibility": "Lead a small project, module woner, development"
   }, {
    "code": 3,
    "companyName": "IBCS-PRIMAX Software Ltd.",
    "designation": "Programmer",
    "joiningDate": "January 2017",
    "endDate": "June 2017",
    "jobResponsibility": "Module owner and debelopment"
   }, {
    "code": 4,
    "companyName": "IBCS-PRIMAX Software Ltd.",
    "designation": "Junior Programmer",
    "joiningDate": "December 2016",
    "endDate": "June 2015",
    "jobResponsibility": "Debelopment"
   }, {
    "code": 5,
    "companyName": "Bella Tech System",
    "designation": "Trainee Programmer",
    "joiningDate": "January 2015",
    "endDate": "May 2015",
    "jobResponsibility": "Debelopment"
   }],
   "edu": [{
    "code": 1,
    "title": "PGD in CSE.",
    "inistitute": "BIM",
    "result": "3.58",
    "duration": "1 year",
    "passingYear": "2022"
   }, {
    "code": 2,
    "title": "Dipploma in J2EE",
    "inistitute": "DIIT",
    "result": "A",
    "duration": "1 year",
    "passingYear": "2014"
   }, {
    "code": 3,
    "title": "MSS in Economics.",
    "inistitute": "Eden Mahila COllege",
    "result": "1st Class",
    "duration": "1 year",
    "passingYear": "2009(held in 2011)"
   }, {
    "code": 4,
    "title": "BSS in Economics.",
    "inistitute": "Eden Mahila College",
    "result": "2nd Class",
    "duration": "4 years",
    "passingYear": "2008(held in 2010)"
   }, {
    "code": 5,
    "title": "HSC.",
    "inistitute": "Holy Cross College",
    "result": "2nd Division",
    "duration": "2 years",
    "passingYear": "2002"
   }, {
    "code": 5,
    "title": "SSC.",
    "inistitute": "Jhitka Pilot Girls Heigh School",
    "result": "1is Division",
    "duration": "2 years",
    "passingYear": "2000"
   }]
  }
 ]
 return (
  <div className='container-experiences'>
   <div className='experiences-section-container'>
    <div className='experiences-section-container-body'>
     <div className='experiences-section-1'>
      <div className='experiences-section-contain'>
       <div className='experiences-section-contain-title'>
        <p className='experiences-section-title center-text'>Work experience & Education</p>
        <p className='experiences-section-sub-title center-text'>My previous jobs and my qualifications.</p>
       </div>
       <div className='experiences-section-contain-body'>
        <VerticalTimeline>
         {education.map((row, index) => {
          return (
           <div>
            {row.exp.map((key, i) => {
             return (
              <>
               <VerticalTimelineElement
                className="vertical-timeline-element--work text-color-white"
                contentStyle={{ background: 'rgb(256, 256, 256)', color: '#99f' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(256, 256, 256)' }}
                date={key.joiningDate + "-" + key.endDate}
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<AddHomeWorkIcon />}
               >
                <h3 className="vertical-timeline-element-title">{key.companyName}</h3>
                <h4 className="vertical-timeline-element-subtitle">{key.designation}</h4>
                <h5 className="vertical-timeline-element-subtitle">{key.joiningDate} - {key.endDate}</h5>
                <p className='vertical-timeline-element-p'>
                 {key.jobResponsibility}
                </p>
               </VerticalTimelineElement>
              </>
             )
            })}
            {row.edu.map((key, i) => {
             return (
              <>
               <VerticalTimelineElement
                className="vertical-timeline-element--work text-color-white"
                contentStyle={{ background: 'rgb(256, 256, 256)', color: '#99f' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(256, 256, 256)' }}
                date={key.passingYear}
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
               >
                <h3 className="vertical-timeline-element-title">{key.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{key.inistitute}</h4>
                <h5 className="vertical-timeline-element-subtitle">{key.result}</h5>
                <h5 className="vertical-timeline-element-subtitle">{key.passingYear}</h5>
                <p className='vertical-timeline-element-p'>
                 {key.duration}
                </p>
               </VerticalTimelineElement>
              </>
             )
            })}
           </div>
          )
         })}
        </VerticalTimeline>
       </div>
       <div className='about-section-contain-footer'></div>
      </div>
     </div>
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
 )
}
