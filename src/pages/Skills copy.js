import React from 'react'
import Box from '@mui/material/Box';
import { Card, Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
export default function Skills() {


 const skillList = [
  {
   "level-code": 1, "skill-level": "Basic Level",
   "list": [{ "code": 1, "skill-name": "Vue js" }, { "code": 2, "skill-name": "Adobe Photoshop" }, { "code": 3, "skill-name": "Figma" }, { "code": 4, "skill-name": "XD" }]
  },
  {
   "level-code": 2, "skill-level": "Intermediate Level",
   "list": [{ "code": 1, "skill-name": "SQL & PL/SQL" }, { "code": 2, "skill-name": "Bootstrap" }, { "code": 3, "skill-name": "Material ui" }, { "code": 4, "skill-name": "CSS 3" }, { "code": 5, "skill-name": "Adobe Illastrator" }]
  },
  {
   "level-code": 3, "skill-level": "Advance Level",
   "list": [
    { "code": 1, "skill-name": "Grails" }, { "code": 2, "skill-name": "Spring Boot" }, { "code": 3, "skill-name": "i-report integration with grails & spring boot" }, { "code": 4, "skill-name": "Rest API" }, { "code": 5, "skill-name": "React js" }, { "code": 6, "skill-name": "javascript" }, { "code": 7, "skill-name": "jquery" }, { "code": 8, "skill-name": "HTML 5" }
   ]
  }

 ]
 // const card = (
 //  skillList.map((row, index) => {
 //   return (
 //    <div>
 //     <p style={{ "color": "black" }}>{index + 1}</p>
 //     <CardContent>
 //      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
 //       {row['skill-level']}
 //      </Typography>
 //      <Typography variant="body2">
 //       <br />
 //       {row.list.map((title, id) => {
 //        return (<li>{title['skill-name']}</li>)
 //       })}
 //      </Typography>
 //     </CardContent>
 //    </div>
 //   )
 //  })
 // );

 return (
  <div className='card-style'>
   <p className="text-center-align">SKILLS</p>
   <h2 className='skill-title text-center-align'>MY SKILLS</h2>
   <div className='about-sec-2-body'>
    <Box sx={{ minWidth: 275, alignContent: "center" }}>
     <div className=' skill-level'>
      {/* <Card variant="outlined">{card}</Card> */}
      {skillList.map((row, index) => {
       return (
        <div className='bg-color'>
         <Card variant="outlined card-shadow">
          <CardContent className='skill-text-style'>
           <Typography sx={{ fontSize: 20, fontWeight: 600 }} gutterBottom className='skill-level-center'>
            {row['skill-level']}
           </Typography>
           <Typography variant="body2" sx={{ fontSize: 16, fontWeight: 400 }}>
            <br />
            {row.list.map((title, id) => {
             return (<ul><li>{title['skill-name']}</li></ul>)
            })}
           </Typography>
          </CardContent>
         </Card>
        </div>
       )
      })
      }
     </div>
    </Box>
   </div>
  </div>
 )
}
