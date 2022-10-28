import { React, useEffect, useState } from 'react'
import Axios from "axios";
import HttpCommon from '../Http-Common';
import { Box, TextField, MenuItem, Button, Checkbox, RadioGroup, Radio, FormControl, FormControlLabel, FormLabel, Stack, Select, Grid } from '@mui/material'

import BarChartReport from '../reports/BarChart'
import LineChartReport from '../reports/LineChart';
import PieChartReport from '../reports/PieChart';

export default function Profile() {
  let currentDate = new Date();
  const [posts, setPosts] = useState([""])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageLimit] = useState(5)
  const [pageCount, setPageCount] = useState(0)

  const [getSearchData, setGetSearchData] = useState({
    fromDate: "",
    toDate: "",
    status: ""
  })
  const handleChangeForSaveForm = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    console.log("Field Name : " + fieldName)
    const fieldValue = e.target.value;
    console.log(fieldValue)
    const newFormData = { ...getSearchData };
    newFormData[fieldName] = fieldValue;
    setGetSearchData(newFormData);
    console.log("handleChangeForSaveForm")
    console.log(getSearchData)
  }
  const headers = {
    "Content-Type": "application/json",
    "access-control-allow-origin": "*",
    "access-control-allow-headers": "X-Requested-With"
    // Authorization: apiKey,
  };

  const handleSubmit2 = (event) => {
    let url = '/NotifiedLogForEmail/getDailyMailLog/' //+ `${currentPage} / ${pageLimit}`;
    // let url = `/NotifiedLogForEmail/index/${currentPage} / ${pageLimit}`;
    event.preventDefault()
    // let headers = new Headers();
    // headers.append("Access-Control-Allow-Origin", "*")
    // headers.append("Access-Control-Allow-Headers", "X-Requested-With")
    // headers.append("Access-Control-Allow-Methods", "GET")
    // headers.append("Content-Type", "application/json")
    // HttpCommon.get(url, { mode: 'cors' }, {
    // Axios.get(url, {
    HttpCommon.get(url, {
      // headers: {
      //   "access-control-allow-origin": "*",
      //   "access-control-allow-headers": "X-Requested-With",
      //   'content-type': 'application/json',
      //   'Access-Control-Allow-Methods': "GET"
      // },
      // headers: headers,
      crossDomain: true,
      params: {
        fromDate: getSearchData.fromDate,
        toDate: getSearchData.toDate,
        status: getSearchData.status
      }
    }
    ).then(res => {
      console.log(res.data)
      // res.set("access-control-allow-origin", "*");
      // res.set("access-control-allow-headers", "X-Requested-With");
      setPosts(res.data);
    }).catch(err => {
      console.log("Exception @@@ " + err)
    })
  }

  const currentDateDate = () => {
    let url = '/NotifiedLogForEmail/getSysDateMailLog/'
    HttpCommon.get(url, {
      crossDomain: true
    }
    ).then(res => {
      console.log(res.data)
      setPosts(res.data);
    }).catch(err => {
      console.log("Exception @@@ " + err)
    })
  }

  //** list operation **//
  const getData = () => {
    Axios.get(`http://localhost:8091/survey/incomeExpense/dashboard/${currentPage}/${pageLimit}`).then(res => {
      console.log(res)
      // res.setHeader("Access-Control-Allow-Origin", "*");
      let totalCount = res.data.totalElements
      setPosts(res.data.content);
      // setPageCount(Math.ceil(totalCount / pageLimit))
      setPageCount(res.data.totalPages)
      // setCurrentPage(currentPage);
      // setPageLimit(currentPage + increases);
      // let totalCount = res.headers.get('x-total-count')
    }).catch(err => {
      console.log("Exception @@@ " + err)
    })
  }
  //** call getdata function **//
  //useEffect(() => { getData() }, [currentPage])
  useEffect(() => { currentDateDate() }, [''])

  return (
    <>
      <div className="bg-color-profile">
        <div className='container'>
          <h2 style={{ 'textAlign': 'center', 'marginTop': '-20px', 'marginBottom': '30px', 'color': 'GrayText' }}>Daily Email Log</h2>
          <form onSubmit={handleSubmit2}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { sm: '1fr ' },
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
                    defaultValue={new Date()}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleChangeForSaveForm} />
                </Grid>
                {/* </Stack>
              <Stack noValidate spacing={3}> */}
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

                {/* sx={{ width: 220 }} */}
              </Grid>
              {/* <Stack noValidate spacing={4}>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">Status Total</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >      <FormControlLabel value="total" control={<Radio />} label="Total Request" name='status' onChange={handleChangeForSaveForm} />
                    <FormControlLabel value="success" control={<Radio />} label="Success Request" name='status' onChange={handleChangeForSaveForm} />
                    <FormControlLabel value="fail" control={<Radio />} label="Failed Request" name='status' onChange={handleChangeForSaveForm} />
                  </RadioGroup>
                </FormControl>
              </Stack> */}
            </Box>
            <br></br>
            <Button fullWidth variant="contained" type="submit">Send Request</Button>
          </form>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { sm: '1fr' },
              gap: 8, paddingLeft: '0%'
            }}
            noValidate
            autoComplete="off"
          >
            <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
              <Grid item xs={6}>
                <BarChartReport chartData={posts} />
              </Grid>
              <Grid item xs={6}>
                <LineChartReport chartData={posts} />
              </Grid>
            </Grid>
            {/* {posts.map((i) => {
            return (
              <>
                <p>Date => {i.Date}</p>
                <p>Total Request => {i.Total}</p>
                <p>Total Success => {i.Success}</p>
                <p>Total Fail => {i.Fail}</p>
              </>
            )
          })} */}
          </Box>
          <br></br>
          <br></br>
          <br></br>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { sm: '1fr' },
              gap: 8, paddingLeft: '0%'
            }}
            noValidate
            autoComplete="off"
          >
            <h2 style={{ 'textAlign': 'center', 'marginTop': '-5px', 'marginBottom': '-30px', 'color': 'GrayText' }}>Monthly Email Log</h2>
            <PieChartReport />
          </Box>
        </div>

      </div>
    </>
  )
}
