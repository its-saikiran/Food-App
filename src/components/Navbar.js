import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('userData'));
  const logoutFun = () => {
    // console.log('called......')
    localStorage.removeItem('userData')
    navigate('/')
  } 

  return (

    <>

      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>


            {/* LONG.... */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
              <DinnerDiningIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/Home"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'orange',
                  textDecoration: 'none',
                }}
              >
                foo--D
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} >

              <Button
                onClick={() => navigate('/')}
                sx={{ mx: 7, my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>

              {
                userData ?
                  <>
                    <Button
                      onClick={() => navigate('/')}
                      sx={{ mx: 7, my: 2, color: 'white', display: 'block' }}
                    >
                      { (userData.email) }
                    </Button>
                    <Button
                      onClick={logoutFun}
                      sx={{ mx: 7, my: 2, color: 'white', display: 'block' }}
                    >
                      Logout
                    </Button>
                  </>
                  :
                  <>
                    <Button
                      onClick={() => navigate('/login')}
                      sx={{ mx: 7, my: 2, color: 'white', display: 'block' }}
                    >
                      Login
                    </Button>
                    <Button
                      onClick={() => navigate('/register')}
                      sx={{ mx: 7, my: 2, color: 'white', display: 'block' }}
                    >
                      Register
                    </Button>
                  </>
              }

            </Box>




            {/* SHORT.... */}
            <Box sx={{ flexGrow: 4, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >


                <MenuItem onClick={() => navigate('/')}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                {
                  userData ?
                    <>
                      <MenuItem onClick={() => navigate('/')}>
                        <Typography textAlign="center">{ userData.email }</Typography>
                      </MenuItem>
                      <MenuItem onClick={logoutFun}>
                        <Typography textAlign="center">Logout</Typography>
                      </MenuItem>
                    </>
                    :
                    <>
                      <MenuItem onClick={() => navigate('/login')}>
                        <Typography textAlign="center">Login</Typography>
                      </MenuItem>
                      <MenuItem onClick={() => navigate('/register')}>
                        <Typography textAlign="center">Register</Typography>
                      </MenuItem>
                    </>

                }
              </Menu>
            </Box>
            <DinnerDiningIcon sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' }, mr: 1 }} />


          </Toolbar>
        </Container>
      </AppBar>


    </>

  );
};
export default Navbar;
