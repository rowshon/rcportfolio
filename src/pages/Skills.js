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
    { "code": 1, "skill-name": "Grails" }, { "code": 2, "skill-name": "Spring Boot" }, { "code": 3, "skill-name": "i-report integration" }, { "code": 4, "skill-name": "Rest API" }, { "code": 5, "skill-name": "React js" }, { "code": 6, "skill-name": "javascript" }, { "code": 7, "skill-name": "jquery" }, { "code": 8, "skill-name": "HTML 5" }
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
  <Box sx={{ minWidth: 255, alignContent: "center" }}>

   <div >
    <Box sx={{
     display: 'grid',
     gridTemplateColumns: { sm: '1fr 1fr 1fr' },
     gap: 8, paddingLeft: '0%'
    }}>
     {skillList.map((row, index) => {
      return (
       <div className='bg-color skill-level'>
        <Card variant="outlined card-shadow" className=' '>
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
    </Box>
   </div>
  </Box >
 )
}
