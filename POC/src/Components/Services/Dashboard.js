import React, {useState } from 'react'
import {Accordion,AccordionDetails,AccordionSummary,Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../Services/style.css';
import NavBar from '../Pages/NavBar';
import axios from 'axios';

export default function ControlledAccordions() {
  const [account, setAccount] = useState([])

 
  var data = JSON.stringify({
        "collection": "test",
        "database": "ramtesting",
        "dataSource": "Sandbox01"
    });
    var config = {
            method: 'get',
            url: 'http://mongodb-intergation-demo.uk-e1.cloudhub.io/api?collection=cst_account',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Request-Headers': '*',
              'api-key': 'PjFvovRNtl5bMPzl6u4B2jaKf3hrlGXjuMFNGWRl75jiZJHRUoESijVrvepYDfEL',
            },
            data: data
        };
        axios.get(config.url)
            .then(function (response) {
             setAccount(response.data)
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            })    

  return (
    <div><NavBar/>
      <div className='row' style={{ backgroundColor: 'azure' }}>
     {account.map(account =>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
           Account Number
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{account.A.A.ACCT_NO} </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography sx={{ mb: 1.5 }} color="text.text.primary">
             EST_DAYS_TO_PAY : {account.A.A.EST_DAYS_TO_PAY}
              <br/>
             Acc State Comments : {account.A.A.ACCT_STAT_COMMENTS}
               <br />
             UNALLOCATED_CREDIT: {account.A.A.UNALLOCATED_CREDIT}
                <br/>
             TOS_CAT_TIME_STAMP : {account.A.A.TOS_CAT_TIME_STAMP }
        </Typography>
        </AccordionDetails>
      </Accordion>
     )}
    </div>
    </div> 
  );
}