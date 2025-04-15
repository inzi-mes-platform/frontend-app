import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import {
    Divider,
    Grid2,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';

import AuthWrapper from './AuthWrapper';
import AuthCardWrapper from './AuthCardWrapper';
import Logo from '../../Logo';
import AuthLogin from './AuthLogin';
import AuthFooter from './AuthFooter';

const Login = () => {
    const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

    const navigate = useNavigate();

    const handleOnRegisterClick = () => {
        alert("clicked")
        navigate("/user/register");
    }

    return (
        <AuthWrapper>
            <Grid2 container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid2 item xs={12}>
                    <Grid2 container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid2 item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid2 container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid2 item sx={{ mb: 3 }}>
                                        <RouterLink to="#" aria-label="logo" style={{ textDecoration: 'none' }}>
                                            <Logo />
                                        </RouterLink>
                                    </Grid2>
                                    <Grid2 item xs={12}>
                                        <Grid2 container direction={{ xs: 'column-reverse', md: 'row' }} alignItems="center" justifyContent="center">
                                            <Grid2 item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <Typography color="secondary.main" gutterBottom variant={downMD ? 'h4' : 'h3'}>
                                                        Hi, Welcome Back
                                                    </Typography>
                                                    <Typography variant="caption" fontSize="16px" textAlign={{ xs: 'center', md: 'inherit' }}>
                                                        Enter your credentials to continue
                                                    </Typography>
                                                </Stack>
                                            </Grid2>
                                        </Grid2>
                                    </Grid2>
                                    <Grid2 item xs={12}>
                                        <AuthLogin />
                                    </Grid2>
                                    <Grid2 item xs={12}>
                                        <Divider />
                                    </Grid2>
                                    <Grid2 item xs={12}>
                                        <Grid2 item container direction="column" alignItems="center" xs={12}>
                                            <Typography 
                                                component={RouterLink} 
                                                to={{ pathname: "/user/register", state: {} }} 
                                                variant="subtitle1" 
                                                sx={{ textDecoration: 'none' }}
                                                //onClick={ handleOnRegisterClick }
                                            >
                                                Don&apos;t have an account?
                                            </Typography>
                                        </Grid2>
                                    </Grid2>
                                </Grid2>
                            </AuthCardWrapper>
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid2>
            </Grid2>
        </AuthWrapper>
    )
}

export default Login;