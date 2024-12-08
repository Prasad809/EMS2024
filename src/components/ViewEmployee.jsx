import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';

function ViewEmployees() {
  const [empData, setEmpData] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    axios.get('http://localhost:9999/getemp')
      .then(res => {
        setEmpData(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <TableContainer component={Paper}>
        <TextField placeholder='serach Employee' value={search} onChange={(e) => setSearch(e.target.value)} style={{ marginLeft: '48rem', marginTop: 10 }} />
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>FullName</th>
              <th >DOB</th>
              <th >Email Id</th>
              <th >Address</th>
              <th >FatherName</th>
              <th >Phone</th>
              <th >AadharNumber</th>
              <th >EmployeeID</th>
              <th >Salary</th>
              <th >Designation</th>
            </tr>
          </thead>
          <tbody>
            {empData.filter((emp) => emp.name.toLowerCase().includes(search.toLowerCase()))
              .map((body) =>
                <tr key={body._id}>
                  <td>{body.name}</td>
                  <td>{body.dob}</td>
                  <td>{body.email}</td>
                  <td>{body.address}</td>
                  <td>{body.fatherName}</td>
                  <td>{body.phone}</td>
                  <td>{body.adhar}</td>
                  <td>{body.empId}</td>
                  <td>{body.salary}</td>
                  <td>{body.designation}</td>
                </tr>
              )}
          </tbody>
        </table>
      </TableContainer>
    </>
  );
}
export default ViewEmployees
