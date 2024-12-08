import InnerText from '@mui/material/Paper'
import { Button, FormControl, Grid, MenuItem, Select, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

function RemoveEmployee() {
    const [empId, setEmpId] = useState([])
    const [empData, setEmpData] = useState({})
    const [drop, setDrop] = useState('')
    useEffect(() => {
        axios.get('http://localhost:9999/getemp')
            .then(res => {
                setEmpId(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    const handleSubmit = () => {
        axios.get(`http://localhost:9999/empGet/${drop}`)
            .then(res => {
                setEmpData(res.data)
            })
            .catch(err => console.log(err));
    }
    const handleDelete=(e)=>{
        e.preventDefault()
        axios.delete(`http://localhost:9999/delete/${drop}`)
    }    
    return (
        <InnerText elevation={0}>
            <h2 align="center" className='sideHead'>Remove Employee</h2>
            <div className="row">
                <div className="col-4">
                    <label>Employee Id</label>
                    <FormControl fullWidth>
                        <Select onChange={(e) => setDrop(e.target.value)}>
                            {empId.map((data) => (
                                <MenuItem key={data._id} value={data._id}>{data.empId}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="col-4">
                    <label>Email Id</label>
                    <FormControl fullWidth>
                        <TextField type='email'
                            name='email'
                            value={empData.email}
                        />
                    </FormControl>

                </div>
                <div className="col-4">
                    <label>Designation</label>
                    <FormControl fullWidth>
                        <TextField
                            name='designation'
                            value={empData.designation} />
                    </FormControl>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <label>Phone Number</label>
                    <FormControl fullWidth>
                        <TextField type='number'
                            name='phone'
                            value={empData.phone}/>
                    </FormControl>
                </div>
                <div className="col-4">
                    <label>Aadhar Number</label>
                    <FormControl fullWidth>
                        <TextField type='number'
                            name='adhar'
                            value={empData.adhar}
                        />
                    </FormControl>
                </div>
                <Grid item sm={6} textAlign={'end'} marginTop={5} >
                    <Button variant={'contained'} onClick={handleSubmit}>view</Button>
                </Grid>
                <Grid item sm={6} textAlign={'start'} marginTop={5}>
                    <Button variant={'contained'} onClick={handleDelete}>Remove</Button>
                </Grid>

            </div>
        </InnerText>
    )
}

export default RemoveEmployee