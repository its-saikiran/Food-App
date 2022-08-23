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

import './login.css'

const Login = () => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = React.useState();

    const handleSubmit = (e, { setSubmitting }) => {
        console.log('submitted....', e)
        localStorage.setItem('userData', JSON.stringify(e))
        setTimeout(() => {
            setSubmitting(false)
            setIsLoggedIn('Log in successfully.')
            setTimeout(() => {
                setIsLoggedIn('')
                navigate('/')
            }, 3000);
        }, 3000);
    }

    return (


        <div style={{ height: '95vh', margin: '0 10vw', display: 'flex', alignItems: 'center', padding: '0 5% 0 0' }}>

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
            >
                {({ values, handleChange, isSubmitting }) =>
                    <Grid container spacing={0} justify="center" direction="row" >
                        <Grid item>
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                spacing={2}
                                className="login-form"
                            >
                                <Paper
                                    variant="elevation"
                                    elevation={3}
                                    className="login-background"
                                >
                                    <Grid item>
                                        <Typography component="h1" variant="h5">
                                            {
                                                isLoggedIn ? isLoggedIn : 'Login In'
                                            }
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Form style={{ width: '30vw' }}>
                                            <Grid container direction="column" spacing={2}>
                                                <Grid item>
                                                    <TextField
                                                        type="email"
                                                        placeholder="Email"
                                                        fullWidth
                                                        name="email"
                                                        variant="outlined"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        required
                                                        autoFocus
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <TextField
                                                        type="password"
                                                        placeholder="Password"
                                                        fullWidth
                                                        name="password"
                                                        variant="outlined"
                                                        value={values.password}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        type="submit"
                                                        className="button-block"
                                                        disabled={isSubmitting}
                                                        processing={isSubmitting}
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
            <img
                src="https://media.istockphoto.com/vectors/login-page-on-laptop-screen-notebook-and-online-login-form-sign-in-vector-id1264216428?k=20&m=1264216428&s=612x612&w=0&h=BJa5vsE6r6STnT4tR4TtMeUWmYaQYoPBIRk60WypV6Q=" 
                alt="img"
                style={{ height: '60vh' }}
            />

        </div>

    );

}
export default Login;