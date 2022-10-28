import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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

 return (
  // <div style={{ 'backgroundColor': "#e7edeced", }}>
  <div className='body-bg' style={{ 'backgroundColor': "#e7edeced", }}>
   <p> Work experience & Education</p>
   <p>My previous jobs and my qualifications.</p>
   <VerticalTimeline>
    {expData.map((row, index) => {
     return (
      <VerticalTimelineElement
       className="vertical-timeline-element--work"
       contentStyle={{ background: 'rgb(256, 256, 256)', color: '#99f' }}
       contentArrowStyle={{ borderRight: '7px solid  rgb(256, 256, 256)' }}
       date={row.joiningDate}
       iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      // icon={<WorkIcon />}
      >
       <h3 className="vertical-timeline-element-title">{row.companyName}</h3>
       <h4 className="vertical-timeline-element-subtitle">{row.designation}</h4>
       <h5 className="vertical-timeline-element-subtitle">{row.joiningDate} - {row.endDate}</h5>
       <p>
        {row.jobResponsibility}
       </p>
      </VerticalTimelineElement>
      // <VerticalTimelineElement
      //  className="vertical-timeline-element--work"
      //  contentStyle={{ background: 'rgb(33, 150, 243)', color: 'green' }}
      //  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      //  date="2011 - present"
      //  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      // >
      //  <h3 className="vertical-timeline-element-title">Creative Director</h3>
      //  <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      //  <p>
      //   Creative Direction, User Experience, Visual Design, Project Management, Team Leading
      //  </p>
      // </VerticalTimelineElement>
     )
    })}

    {/* <VerticalTimelineElement
     className="vertical-timeline-element--work"
     date="2010 - 2011"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    >
     <h3 className="vertical-timeline-element-title">Art Director</h3>
     <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
     <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
     </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
     className="vertical-timeline-element--work"
     date="2008 - 2010"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    >
     <h3 className="vertical-timeline-element-title">Web Designer</h3>
     <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
     <p>
      User Experience, Visual Design
     </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
     className="vertical-timeline-element--work"
     date="2006 - 2008"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    >
     <h3 className="vertical-timeline-element-title">Web Designer</h3>
     <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
     <p>
      User Experience, Visual Design
     </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
     className="vertical-timeline-element--education"
     date="April 2013"
     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    >
     <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
     <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
     <p>
      Strategy, Social Media
     </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
     className="vertical-timeline-element--education"
     date="November 2012"
     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    >
     <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
     <h4 className="vertical-timeline-element-subtitle">Certification</h4>
     <p>
      Creative Direction, User Experience, Visual Design
     </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
     className="vertical-timeline-element--education"
     date="2002 - 2006"
     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    >
     <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
     <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
     <p>
      Creative Direction, Visual Design
     </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
     iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    /> */}
   </VerticalTimeline>

  </div>
  // <>
  //  <div className='body-bg' style={{ 'backgroundColor': "#e7edeced", }}>
  //   <p> Work experience & Education</p>
  //   <p>My previous jobs and my qualifications.</p>
  //   {expData.map((row, index) => {
  //    return (
  //     <div style={{ "paddingLeft": "10%" }}>
  //      <VerticalTimeline >
  //       {
  //        index % 2 == 0 ? <VerticalTimelineElement
  //         className="vertical-timeline-element--work"
  //         contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  //         contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
  //         date={row.joiningDate}
  //         iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  //        // icon={<WorkIcon />}
  //        >
  //         <h3 className="vertical-timeline-element-title">{row.companyName}</h3>
  //         <h4 className="vertical-timeline-element-subtitle">{row.designation}</h4>
  //         <h5 className="vertical-timeline-element-subtitle">{row.joiningDate} - {row.endDate}</h5>
  //         <p>
  //          {row.jobResponsibility}
  //         </p>
  //        </VerticalTimelineElement> : <VerticalTimelineElement
  //         className="vertical-timeline-element--work"
  //         contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  //         contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
  //         date={row.joiningDate}
  //         iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  //        // icon={<WorkIcon />}
  //        >
  //         <h3 className="vertical-timeline-element-title">{row.companyName}</h3>
  //         <h4 className="vertical-timeline-element-subtitle">{row.designation}</h4>
  //         <h5 className="vertical-timeline-element-subtitle">{row.joiningDate} - {row.endDate}</h5>
  //         <p>
  //          {row.jobResponsibility}
  //         </p>
  //        </VerticalTimelineElement>
  //       }

  //      </VerticalTimeline>
  //     </div>
  //    )
  //   })}

  //  </div>
  // </>
 )
}
