import InnerText from '@mui/material/Paper'
import { Button, FormControl, Grid, MenuItem, Select, TextField } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function UpdateEmployee() {

    const [empId, setEmpId] = useState([])
    const [empData,setEmpData]=useState({})
    const [drop,setDrop]=useState('')
    useEffect(() => {
        axios.get('http://localhost:9999/getemp')
            .then(res => {
                setEmpId(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    const handleSubmit=()=>{
        axios.get(`http://localhost:9999/empGet/${drop}`)
        .then(res => setEmpData(res.data))
        .catch(err => console.log(err));
    }
    const handleUpdate=(e)=>{
        e.preventDefault()
        axios.patch(`http://localhost:9999/updateEmp/${drop}`,
        {address:empData.address,designation:empData.designation,salary:empData.salary,phone:empData.phone,photo:empData.photo})
    }    
    return (
        <InnerText elevation={0}>
            <h2 align="center" className='sideHead'>Update Employee</h2>
            <div className="row">
                <div className="col-4">
                    <label>EmployeeID</label>
                    <FormControl fullWidth>
                        <Select onChange={(e)=>setDrop(e.target.value)}>
                            {empId.map((data) => (
                                <MenuItem key={data._id} value={data._id} >{data.empId}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="col-4">
                    <label>Date of Birth</label>
                    <FormControl fullWidth>
                        <TextField type='date'
                            name='dob'
                            value={empData.dob}
                            disabled={true}
                        />
                    </FormControl>
                </div>
                <div className="col-4">
                    <label>Email Id</label>
                    <FormControl fullWidth>
                        <TextField type='email'
                            name='email'
                            value={empData.email}
                            disabled={true}
                        />
                    </FormControl>

                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <label>Address</label>
                    <FormControl fullWidth>
                        <TextField
                            name='address'
                            value={empData.address}
                            onChange={(e)=>setEmpData({...empData,address:e.target.value})}
                            placeholder={"Enter address"} />
                    </FormControl>
                </div>
                <div className="col-4">
                    <label>Designation</label>
                    <FormControl fullWidth>
                        <TextField
                            name='designation'
                            value={empData.designation}
                            onChange={(e)=>setEmpData({...empData,designation:e.target.value})}
                            placeholder={"Enter designation"} />
                    </FormControl>
                </div>
                <div className="col-4">
                    <label>Add New Employee Id</label>
                    <FormControl fullWidth>
                        <TextField
                            name='empId'
                            value={empData.empId}
                            disabled={true}
                             />
                    </FormControl>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <label>Father Name</label>
                    <FormControl fullWidth>
                        <TextField
                            name='fatherName'
                            value={empData.fatherName}
                            disabled={true}
                        />
                    </FormControl>
                </div>
                <div className="col-4">
                    <label>Salary Amount</label>
                    <FormControl fullWidth>
                        <TextField type='number'
                            name='salary'
                            onChange={(e)=>setEmpData({...empData,salary:e.target.value})}
                            value={empData.salary}
                            />
                    </FormControl>
                </div>
                <div className="col-4">
                    <label>Phone Number</label>
                    <FormControl fullWidth>
                        <TextField type='number'
                            name='phone'
                            value={empData.phone}
                            onChange={(e)=>setEmpData({...empData,phone:e.target.value})}
                             />
                    </FormControl>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <label>Education Details</label>
                    <FormControl fullWidth>
                        <TextField
                            name='education'
                            value={empData.education}
                            disabled={true} />
                    </FormControl>
                </div>
                <div className="col-4">
                    <label>Aadhar Number</label>
                    <FormControl fullWidth>
                        <TextField type='number'
                            name='adhar'
                            value={empData.adhar}
                            disabled={true}
                        />
                    </FormControl>
                </div>
                <Grid item sm={6} textAlign={'end'} marginTop={5} >
                <Button variant={'contained'} onClick={handleSubmit}>view</Button>
            </Grid>
            <Grid item sm={6} textAlign={'start'}  marginTop={5}>
                <Button variant={'contained'} type='submit' onClick={handleUpdate}>Update</Button>
            </Grid>
            </div>

        </InnerText>
    )
}

export default UpdateEmployee