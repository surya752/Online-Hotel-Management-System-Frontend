import axios from 'axios';
import NavBar from '../Pages/NavBar';
import React, {useState} from 'react'

export default function Cst_Account() {
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
   <div>
     <NavBar/>
        <div className = "container"><br/>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Account No</th>
                    <th>EST_DAYS_TO_PAY </th>
                    <th>Acc State Comments </th>
                    <th>UNALLOCATED_CREDIT</th>
                    <th>TOS_CAT_TIME_STAMP</th>
                </thead>
                <tbody>
                    {
                        account.map(
                            account =>
                            <tr key = {account.A.A.ACCT_NO}> 
                                <td> {account.A.A.ACCT_NO} </td>
                                <td>{account.A.A.EST_DAYS_TO_PAY}</td>
                                <td>{account.A.A.ACCT_STAT_COMMENTS}</td>
                                <td>{account.A.A.UNALLOCATED_CREDIT}</td>
                                <td>{account.A.A.TOS_CAT_TIME_STAMP }</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
   </div>
  );
}


