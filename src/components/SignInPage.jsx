
import { Button, Checkbox, FormControl, Grid, TextField } from "@mui/material";

import { Form, Formik } from "formik";
import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { signInInitial, signInValidate } from "./ValidationSchema";
import axios from "axios";

function SignInPage() {
    const navgate = useNavigate()
    const handleSubmit = (value) => {
        axios.post('http://localhost:9999/login/', value)
            .then(res => {
                console.log(res.data)
                if (res.data.login === true) {
                    navgate('/dashboard')
                } else if (res.data.login === false) {
                    alert("Your not an ADMIN")
                }
            })
    }
    return (
        <>
            <marquee><h2 className='marqee'>Employee Management System</h2></marquee>
            <Container className='center'>
                <Formik initialValues={signInInitial} validationSchema={signInValidate} onSubmit={(data) => { handleSubmit(data) }}>
                    {({ touched, errors, values, handleChange, handleBlur }) => (
                        <Form autoComplete={0} >
                            <h2 className="sideHead">SIGNIN PAGE</h2>
                            <span>Welcome user, please sign in to continue</span>
                            <Grid item sm={4} mb={3} ml={55} mt={3}>
                                <FormControl fullWidth>
                                    <TextField name='email' value={values.email}
                                        onChange={handleChange} onBlur={handleBlur}
                                        error={touched.email && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                        placeholder={'Enter Email Address'} />
                                </FormControl>
                            </Grid>
                            <Grid item sm={4} mb={3} ml={55} >
                                <FormControl fullWidth>
                                    <TextField type='password'
                                        name='password' value={values.password}
                                        onChange={handleChange} onBlur={handleBlur}
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                        placeholder={"Enter Password"} />
                                </FormControl>
                            </Grid>
                            <Grid item sm={4} mb={3} ml={55}>
                                <FormControl fullWidth>
                                    <Button variant={'contained'} type='submit' id='id' >Submit</Button>
                                </FormControl>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Container>
        </>

    )
}
export default SignInPage





