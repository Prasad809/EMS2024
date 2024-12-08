import InnerText from '@mui/material/Paper'
import { AddEmpInitial, AddEmpValidate } from './ValidationSchema';
import { Button, FormControl, Grid, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import axios from 'axios';

function AddEmployee() {
    const submitData=(data)=>{
        console.log(data);
        axios.post('http://localhost:9999/empSignUp/',data)
        .then(res =>console.log(res.data))
        .catch(err =>console.log(err))
    }
    return (
        <InnerText elevation={0}>
            <h2 align="center" className='sideHead'>Add Employee</h2>
            <Formik initialValues={AddEmpInitial} validationSchema={AddEmpValidate} onSubmit={(data) => {submitData(data) }}>
                {({ touched, errors, values, handleChange, handleBlur }) => (
                    <Form autoComplete={0} >
                        <div className="row">
                            <div className="col-4">
                                <label>FullName</label>
                                <FormControl fullWidth>
                                    <TextField name='name' value={values.name}
                                        onChange={handleChange} onBlur={handleBlur}
                                        error={touched.name && Boolean(errors.name)}
                                        helperText={touched.name && errors.name}
                                        placeholder={'Enter Fullname'} />
                                </FormControl>
                            </div>
                            <div className="col-4">
                                <label>Date of Birth</label>
                                <FormControl fullWidth>
                                    <TextField type='date'
                                        name='dob' value={values.dob}
                                        onChange={handleChange} onBlur={handleBlur}
                                        error={touched.dob && Boolean(errors.dob)}
                                        helperText={touched.dob && errors.dob}
                                        placeholder={"Enter Date of Birth"} />
                                </FormControl>
                            </div>
                            <div className="col-4">
                                <label>Email Id</label>
                                <FormControl fullWidth>
                                    <TextField type='email'
                                        name='email' value={values.email}
                                        onChange={handleChange} onBlur={handleBlur}
                                        error={touched.email && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                        placeholder={"Enter Email Id"} />
                                </FormControl>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label>Address</label>
                                <FormControl fullWidth>
                                    <TextField
                                        name='address' value={values.address}
                                        onChange={handleChange} onBlur={handleBlur}
                                        error={touched.address && Boolean(errors.address)}
                                        helperText={touched.address && errors.address}
                                        placeholder={"Enter address"} />
                                </FormControl>
                            </div>
                            <div className="col-4">
                                <label>Designation</label>
                                <FormControl fullWidth>
                                    <TextField
                                        name='designation' value={values.designation}
                                        onChange={handleChange} onBlur={handleBlur}
                                        error={touched.designation && Boolean(errors.designation)}
                                        helperText={touched.designation && errors.designation}
                                        placeholder={"Enter designation"} />
                                </FormControl>
                            </div>
                            <div className="col-4">
                                <label>Add New Employee Id</label>
                                <FormControl fullWidth>
                                    <TextField
                                        name='empId' value={values.empId}
                                        onChange={handleChange} onBlur={handleBlur}
                                        error={touched.empId && Boolean(errors.empId)}
                                        helperText={touched.empId && errors.empId}
                                        placeholder={"Enter empId"} />
                                </FormControl>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                            <label>Father Name</label>
                                <FormControl fullWidth>
                                    <TextField
                                        name='fatherName' value={values.fatherName}
                                        onChange={handleChange} onBlur={handleBlur}
                                        error={touched.fatherName && Boolean(errors.fatherName)}
                                        helperText={touched.fatherName && errors.fatherName}
                                        placeholder={"Enter fatherName"} />
                                </FormControl>
                            </div>
                            <div className="col-4">
                            <label>Salary Amount</label>
                                <FormControl fullWidth>
                                    <TextField type='number'
                                        name='salary' value={values.salary}
                                        onChange={handleChange} onBlur={handleBlur}
                                        error={touched.salary && Boolean(errors.salary)}
                                        helperText={touched.salary && errors.salary}
                                        placeholder={"Enter salary"} />
                                </FormControl>
                            </div>
                            <div className="col-4">
                            <label>Phone Number</label>
                                <FormControl fullWidth>
                                    <TextField type='number'
                                        name='phone' value={values.phone}
                                        onChange={handleChange} onBlur={handleBlur}
                                        error={touched.phone && Boolean(errors.phone)}
                                        helperText={touched.phone && errors.phone}
                                        placeholder={"Enter phone"} />
                                </FormControl>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                            <label>Education Details</label>
                                <FormControl fullWidth>
                                    <TextField
                                        name='education' value={values.education}
                                        onChange={handleChange} onBlur={handleBlur}
                                        error={touched.education && Boolean(errors.education)}
                                        helperText={touched.education && errors.education}
                                        placeholder={"Enter education"} />
                                </FormControl>
                            </div>
                            <div className="col-4">
                            <label>Aadhar Number</label>

                                <FormControl fullWidth>
                                    <TextField type='number'
                                        name='adhar' value={values.adhar}
                                        onChange={handleChange} onBlur={handleBlur}
                                        error={touched.adhar && Boolean(errors.adhar)}
                                        helperText={touched.adhar && errors.adhar}
                                        placeholder={"Enter adhar"} />
                                </FormControl>
                            </div>
                        </div>
                        <Grid item sm={12} align="center" marginTop={5} >
                            <Button variant={'contained'} type='submit'>Submit</Button>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </InnerText>
    )
}

export default AddEmployee