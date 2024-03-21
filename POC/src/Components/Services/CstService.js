import axios from 'axios';
import NavBar from '../Pages/NavBar';
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function CstService() {
  const [service, setService] = useState([])

    var data = JSON.stringify({
            "collection": "testservice",
            "database": "ramtesting",
            "dataSource": "Sandbox01"
        });
        var config = {
                method: 'get',
                url: 'http://mongodb-intergation-demo.uk-e1.cloudhub.io/api?collection=cst_service',
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Request-Headers': '*',
                  'api-key': 'PjFvovRNtl5bMPzl6u4B2jaKf3hrlGXjuMFNGWRl75jiZJHRUoESijVrvepYDfEL',
                },
                data: data
            };
            axios.get(config.url)
                .then(function (response) {
                 setService(response.data)
                     console.log(JSON.stringify(response.data));
                     //console.log(service);
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
                    <th>UNIQUE_SERV_ID</th>
                    <th>SERV_NO </th>
                    <th>ACCT_NO</th>
                    <th>ACCUM_CHARGE</th>
                    <th>ADDR_NO</th>
                    <th>Actions </th>
                </thead>
                <tbody>
                    {
                        service.map(
                            service =>
                            <tr key = {service.A.B.UNIQUE_SERV_ID}> 
                                <td> {service.A.B.UNIQUE_SERV_ID} </td>
                                <td>{service.A.B.SERV_NO}</td>
                                <td>{service.A.B.ACCT_NO }</td>
                                <td>{service.A.B.ACCUM_CHARGE}</td>
                                <td>{service.A.B.ADDR_NO }</td>
                                <td>
                                    <Link className="btn btn-info" to={`/updateservice/${service.A.B.UNIQUE_SERV_ID}`} >Update</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
   </div>
  );
}