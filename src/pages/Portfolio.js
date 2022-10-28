import React from 'react'
import Box from '@mui/material/Box';
import { Button, Card, Grid, Modal } from '@mui/material';
// import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Footer from './Footer';
import CustModal from './Modal';
export default function Portfolio() {

 const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'rgb(241, 210, 9)',
  ...theme.typography.body2,
  padding: theme.spacing(.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  // height: '50vh',
  // width: '100%'
 }));
 const projectList = [
  {
   "project-code": 1,
   "project-title": "Process Automation System For BEPZA ",
   "client": ",Apache tomcat,TortoiseSVN",
   "description": "The Bangladesh Export Processing Zones Authority is an agency of the Government of Bangladesh.Its objective is to manage the various export processing zones in Bangladesh.So, the Management body decided to develop an integrated system that can manage various process like Company Permission, Plot and SFB allotment, Billing and Collection, Export Permit, Import Permit, Sample Permit, Repair Permit, Local Purchase, Sub- Contract Permit, Garbage & Wastage Permit, Dyeing Certificate, Visa Recommendation, Work Permit and rest process are coming time to time.This also integrated with self and other government organization.This will, no doubt, go a long way in ensuring accountability, transparency, and fair justice for huge workforce",
   "tools-technologies": "Grails, REST API, MS Sql server 14, i-report, Apache tomcat, git"
  },
  {
   "project-code": 2, "project-title": "Schedule E-mail Notification For BEPZA ",
   "description": "The main moto of this application is to inform the stakeholder, about the daily approved applications in short detail.",
   "tools-technologies": "Spring boot, Quartz, REST API, react js, MS Sql server 14, Tomcat",
  },
  {
   "project-code": 3, "project-title": "QUIZE APPLICATION ",
   "client": "Local Client",
   "description": "It is a small and simple web project. It includes an admin panel and a quiz page and I did only the quiz part.",
   "tools-technologies": "Spring boot, REST API, react js, MySQL, git",
  },
  {
   "project-code": 4, "project-title": "SERVEY APPLICATION ",
   "client": "Local client",
   "description": "It is an academic project. in this project, my task was to integrate with jasper report.",
   "tools-technologies": "Spring boot, REST API, react js, MySQL, git",
  },
  {
   "project-code": 5, "project-title": "NARI",
   "client": "Bangladesh Export Processing Zones Authority (BEPZA)",
   "description": "Northern Areas Reduction of Poverty Initiative (NARI) provide professional training and job for northern areas poor women",
   "tools-technologies": "Grails, MS Sql server 14, i-report, Apache tomcat, TortoiseSVN"
  },
  {
   "project-code": 6, "project-title": "NIPORT",
   "client": "National Institute of Population Research and Training (NIPORT)",
   "description": "Training management system of National Institute of Population Research and Training(NIPORT).Save The Children was the supervisor of the project",
   "tools-technologies": "Grails, MS Sql server 14, i-report, Apache tomcat, TortoiseSVN"
  },
  {
   "project-code": 7, "project-title": "E-MART",
   "client": "Electro-mart Group",
   "description": "Inventory Management System",
   "tools-technologies": "Grails, MS Sql server 14, i-report, Apache tomcat, TortoiseSVN"
  },
  // {
  //  "project-code": 8, "project-title": "Process Automation System ",
  //  "tools-technologies": "Grails, MS Sql server 14, i-report",
  //  "description": ""
  // }

 ]
 const [description, setDescription] = React.useState([""]);
 const [open, setOpen] = React.useState(false);
 // const handleOpen = () => setOpen(true);

 const handleOpen = (e) => {
  let description = e.target.value
  setDescription(description);
  setOpen(true);
 };

 const handleClose = () => setOpen(false);
 const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '120vh',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  textAlign: 'center',
  p: 4,
 }
 const card = (
  projectList.map((row, index) => {
   return (
    <Grid item xs={4}>
     <Item><br></br>
      {/* <p style={{ "color": "black" }}>{index + 1}</p> */}
      <Typography sx={{ fontSize: 18, fontFamily: 'cursive', fontWeight: 'bold' }} color="text.secondary" gutterBottom>
       {row['project-title']}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       <p>{row['tools-technologies']}</p>
      </Typography>
      <Typography variant="body2">
       {/* <br /> */}
       <Button onClick={handleOpen} value={row['description']}>View Detail</Button>
       {/* <a href={<Modal jodDesc={row['description']} />}>View Detail</a> */}
       {/* {row['description']} */}

      </Typography>
      <br></br>
     </Item>
    </Grid>
   )
  })
 );

 return (
  <div className='container-portfolio'>
   <div className='portfolio-section-container'>
    <div className='portfolio-section-container-body'>
     <div className='portfolio-section-1'>
      <div className='portfolio-section-contain'>
       <div className='portfolio-section-contain-title'>
        <p className='portfolio-section-title'>Projects & developments</p>
        <p className='portfolio-section-sub-title'>Showcase of my works, projects and developments.</p>
       </div>
       <div className='portfolio-section-contain-body'>
        <Grid container spacing={2}>
         {card}
        </Grid>
       </div>
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
   <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
   >
    <Box sx={style}>
     <div style={{ 'marginLeft': '115vh', 'fontSize': '16px', 'cursor': 'pointer', 'color': 'red' }} sx={{ mt: 0 }}><span onClick={handleClose} >X</span></div>
     <Typography variant="h6" sx={{ mt: 0 }}>
      <div><span>Project Details</span></div>
     </Typography>
     <Typography id="modal-modal-description" sx={{ mt: 1 }}>
      {description}
     </Typography>
     <Typography variant="h6" sx={{ mt: 3 }}></Typography>
    </Box>

    {/* <CustModal jodDesc={description} /> */}
   </Modal>
  </div>
 )
}


//
//  <h2>5,000</h2>
//  <p>Happy Clients</p>
// </Item>
// </Grid >