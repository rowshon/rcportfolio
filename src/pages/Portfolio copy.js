import React from 'react'
import Box from '@mui/material/Box';
import { Card, Grid } from '@mui/material';
// import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
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
   "project-code": 1, "project-title": "Process Automation System ",
   "tools-technologies": "Grails,MS Sql server 14,i-report",
   "description": ""
  },
  {
   "project-code": 2, "project-title": "Process Automation System ",
   "tools-technologies": "Grails,MS Sql server 14,i-report",
   "description": ""
  },
  {
   "project-code": 4, "project-title": "Process Automation System ",
   "tools-technologies": "Grails,MS Sql server 14,i-report",
   "description": ""
  },
  {
   "project-code": 5, "project-title": "Process Automation System ",
   "tools-technologies": "Grails,MS Sql server 14,i-report",
   "description": ""
  },
  {
   "project-code": 6, "project-title": "Process Automation System ",
   "tools-technologies": "Grails,MS Sql server 14,i-report",
   "description": ""
  },
  {
   "project-code": 7, "project-title": "Process Automation System ",
   "tools-technologies": "Grails,MS Sql server 14,i-report",
   "description": ""
  }

 ]
 const card = (
  projectList.map((row, index) => {
   return (
    <Grid item xs={4}>
     <Item>
      <p style={{ "color": "black" }}>{index + 1}</p>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       {row['project-title']}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       <p>{row['tools-technologies']}</p>
      </Typography>
      <Typography variant="body2">
       <br />
       {row['description']}
      </Typography>
     </Item>
    </Grid>
   )
  })
 );

 return (
  <div>
   <h2 className='skill-title text-center-align'>Portfolio</h2>
   <Grid container spacing={2} style={{ "padding": "10%" }}>
    {card}
   </Grid>
  </div>
 )
}


//
//  <h2>5,000</h2>
//  <p>Happy Clients</p>
// </Item>
// </Grid >