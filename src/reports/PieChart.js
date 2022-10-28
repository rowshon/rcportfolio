import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Moment from 'moment'
import Axios from "axios";
import HttpCommon from '../Http-Common';
import { Box, TextField, MenuItem, Button, Checkbox, RadioGroup, Radio, FormControl, FormControlLabel, FormLabel, Stack, Select, Grid } from '@mui/material'
ChartJS.register(ArcElement, Tooltip, Legend);


export default function PieChart() {
 const [chartDataSet, setChartDataSet] = useState([""])
 const [getSearchData, setGetSearchData] = useState({
  fromDate: "",
  toDate: "",
  status: ""
 })
 const handleChangeForSaveForm = (e) => {
  e.preventDefault();
  const fieldName = e.target.getAttribute("name");
  const fieldValue = e.target.value;
  const newFormData = { ...getSearchData };
  newFormData[fieldName] = fieldValue;
  setGetSearchData(newFormData);
 }

 const handleSubmit2 = (event) => {
  let url = '/NotifiedLogForEmail/getMonthlyMailLog/'
  event.preventDefault()
  HttpCommon.get(url, {
   crossDomain: true,
   params: {
    fromDate: getSearchData.fromDate,
    toDate: getSearchData.toDate
   }
  }
  ).then(res => {
   console.log(res.data)
   setChartDataSet(res.data);
  }).catch(err => {
   console.log("Exception @@@ " + err)
  })
 }


 const getDataForLineChart = () => {
  Axios.get("/NotifiedLogForEmail/getMonthlyMailLog/", {
   crossDomain: true,
   params: {
    fromDate: getSearchData.fromDate,
    toDate: getSearchData.toDate
   }
  }).then(res => {
   setChartDataSet(res.data)
  }).catch(err => {
   console.log("Exception @@@ " + err)
  })
 };
 useEffect(() => { getDataForLineChart() }, []);

 const dataTotal = {
  labels: chartDataSet.map((data) => data.Month),
  datasets: [
   {
    label: 'Total Request',
    data: chartDataSet.map((data) => (data.Total_Mail)),
    backgroundColor: [
     'rgba(255, 99, 132, 0.2)',
     'rgba(54, 162, 235, 0.2)',
     'rgba(255, 206, 86, 0.2)',
     'rgba(75, 192, 192, 0.2)',
     'rgba(153, 102, 255, 0.2)',
     'rgba(255, 159, 64, 0.2)',
    ],
    borderColor: [
     'rgba(255, 99, 132, 1)',
     'rgba(54, 162, 235, 1)',
     'rgba(255, 206, 86, 1)',
     'rgba(75, 192, 192, 1)',
     'rgba(153, 102, 255, 1)',
     'rgba(255, 159, 64, 1)',
    ],
    borderWidth: 1,
   },
  ],
 };

 const dataSuccess = {
  labels: chartDataSet.map((data) => data.Month),
  datasets: [
   {
    label: 'Total Success',
    data: chartDataSet.map((data) => (data.Success)),
    backgroundColor: [
     'rgba(255, 99, 132, 0.2)',
     'rgba(54, 162, 235, 0.2)',
     'rgba(255, 206, 86, 0.2)',
     'rgba(75, 192, 192, 0.2)',
     'rgba(153, 102, 255, 0.2)',
     'rgba(255, 159, 64, 0.2)',
    ],
    borderColor: [
     'rgba(255, 99, 132, 1)',
     'rgba(54, 162, 235, 1)',
     'rgba(255, 206, 86, 1)',
     'rgba(75, 192, 192, 1)',
     'rgba(153, 102, 255, 1)',
     'rgba(255, 159, 64, 1)',
    ],
    borderWidth: 1,
   },
  ],
 };
 const dataFail = {
  labels: chartDataSet.map((data) => data.Month),
  datasets: [
   {
    label: 'Total Fail',
    data: chartDataSet.map((data) => (data.Fail)),
    backgroundColor: [
     'rgba(255, 99, 132, 0.2)',
     'rgba(54, 162, 235, 0.2)',
     'rgba(255, 206, 86, 0.2)',
     'rgba(75, 192, 192, 0.2)',
     'rgba(153, 102, 255, 0.2)',
     'rgba(255, 159, 64, 0.2)',
    ],
    borderColor: [
     'rgba(255, 99, 132, 1)',
     'rgba(54, 162, 235, 1)',
     'rgba(255, 206, 86, 1)',
     'rgba(75, 192, 192, 1)',
     'rgba(153, 102, 255, 1)',
     'rgba(255, 159, 64, 1)',
    ],
    borderWidth: 1,
   },
  ],
 };
 return (
  <div>
   <form onSubmit={handleSubmit2}>
    <Box
     sx={{
      display: 'grid',
      gridTemplateColumns: { sm: '1fr' },
      gap: 10, paddingLeft: '0%'
     }}
     noValidate
     autoComplete="off"
    >
     <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
      <Grid item xs={6}>
       <TextField
        fullWidth
        required
        id="date"
        label="From Date"
        name='fromDate'
        type="date"
        size="small"
        format="dd-MM-yyyy"
        placeholder='Enter From Date'
        defaultValue=""
        InputLabelProps={{
         shrink: true,
        }}
        onChange={handleChangeForSaveForm} />
      </Grid>
      <Grid item xs={6}>
       <TextField
        fullWidth
        required
        id="date"
        label="To Date"
        name='toDate'
        type="date"
        format="dd-MM-yyyy"
        size="small"
        placeholder='Enter To Date'
        defaultValue=""
        InputLabelProps={{
         shrink: true,
        }}
        onChange={handleChangeForSaveForm} />
      </Grid>
     </Grid>
    </Box>
    <br></br>
    <Button fullWidth variant="contained" type="submit">Send Request</Button>
   </form>
   <Box
    sx={{
     display: 'grid',
     gridTemplateColumns: { sm: '1fr' },
     gap: 10, paddingTop: '3%'
    }}
    noValidate
    autoComplete="off"
   >
    <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
     <Grid item xs={4}>
      <Pie fullWidth data={dataTotal} />
      <p style={{ 'textAlign': 'center', 'marginTop': '15px', 'marginBottom': '-30px', 'color': 'GrayText' }}> Total Request</p>
     </Grid>
     <Grid item xs={4}>
      <Pie fullWidth data={dataSuccess} />
      <p style={{ 'textAlign': 'center', 'marginTop': '15px', 'marginBottom': '-30px', 'color': 'GrayText' }}> Total Success Request</p>
     </Grid>

     <Grid item xs={4}>
      <Pie fullWidth data={dataFail} />
      <p style={{ 'textAlign': 'center', 'marginTop': '15px', 'marginBottom': '-30px', 'color': 'GrayText' }}> Total Failed Request</p>
     </Grid>
    </Grid >
   </Box >
  </div >
 )
}
