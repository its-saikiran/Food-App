import React from "react";
import { Formik, Form } from 'formik';
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
    Link,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import './register.css'


const cityData = {
    banglore: '507120',
    hyderabad: '507121',
    delhi: '507122',
    pune: '507123',
}


const Register = () => {

    const navigate = useNavigate();
    const [isRegistered, setIsRegistered] = React.useState();

    const handleSubmit = (e, { setSubmitting }) => {
        console.log('submitted....', e)
        setTimeout(() => {
            setSubmitting(false)
            setIsRegistered('Account created.')
            setTimeout(() => {
                setIsRegistered('')
                navigate('/')
            }, 3000);
        }, 3000);
    }

    return (
        <Formik
            initialValues={{}}
            onSubmit={handleSubmit}
        >
            {({ values, handleChange, setFieldValue, handleBlur, isSubmitting }) =>
                <Grid container spacing={0} justify="center" direction="row">
                    {/* {console.log(values)} */}
                    <Grid item>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            spacing={2}
                            className="register-form"
                        >
                            <Paper
                                variant="elevation"
                                elevation={3}
                                className="register-background"
                            >
                                <Grid item>
                                    <Typography component="h1" variant="h5">
                                        {
                                            isRegistered ? isRegistered : "Register"
                                        }
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Form style={{ width: '30vw' }}>
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <TextField
                                                    type="text"
                                                    placeholder="User Name"
                                                    fullWidth
                                                    name="userName"
                                                    variant="outlined"
                                                    // value={values.userName}
                                                    onChange={handleChange}
                                                    required
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    type="email"
                                                    placeholder="Email"
                                                    fullWidth
                                                    name="email"
                                                    variant="outlined"
                                                    // value={values.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    type="password"
                                                    placeholder="Password"
                                                    fullWidth
                                                    name="password"
                                                    variant="outlined"
                                                    // value={values.password}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    fullWidth
                                                    name="confirmPassword"
                                                    variant="outlined"
                                                    // value={values.confirmPassword}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    type="number"
                                                    placeholder="Phone Number"
                                                    fullWidth
                                                    name="phoneNumber"
                                                    variant="outlined"
                                                    // value={values.phoneNumber}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Grid>
                                            <Grid 
                                                container
                                                direction="row"
                                                justify="space-evenly"
                                                // spacing={8}
                                            >
                                                <Grid item>
                                                    <TextField
                                                        type="text"
                                                        placeholder="Your Address"
                                                        name="address"
                                                        variant="outlined"
                                                        // value={values.address}
                                                        onChange={(e) => {
                                                            handleChange(e)
                                                            let pin = cityData.hasOwnProperty((e.target.value).toLowerCase())? cityData[(e.target.value).toLowerCase()] : '';
                                                            setFieldValue('pincode', pin? pin : '')
                                                        }}
                                                        required
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <TextField
                                                        type="text"
                                                        placeholder="Pincode"
                                                        name="pincode"
                                                        variant="outlined"
                                                        value={values.pincode}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    className="button-block"
                                                    disabled={isSubmitting}
                                                >
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Form>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Forgot Password?
                                    </Link>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            }
        </Formik>
    );

}
export default Register;