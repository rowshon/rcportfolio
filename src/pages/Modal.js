import React from 'react'
import { styled } from '@mui/material/styles';
import { TextField, Grid, Button, Box, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableFooter, TableRow, Paper, Pagination, Typography, Modal } from '@mui/material';
export default function CustModal(jodDesc) {
 console.log("bbbb " + jodDesc)
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 // // const handleOpen = (e) => {
 // //  let id = e.target.value
 // //  let question = e.target.value
 // //  setQuestionId(id);
 // //  setOpen(true);
 // // };
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
  p: 4,
 }
 return (
  <div>

   <Box sx={style}>
    {/* <div style={{ 'marginLeft': '115vh', 'fontSize': '30px' }} sx={{ mt: 0 }}><Button onClick={handleClose} >X</Button></div> */}
    <Typography variant="h6" sx={{ mt: 0 }}>
     <div><span>Add Options Here</span></div>
     {/* </div> */}
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
     {[jodDesc]}
     {/* {jodDesc} */}
    </Typography>
   </Box>
  </div>
 )
}
