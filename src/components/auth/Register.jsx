import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Divider from '@mui/material/Divider';
import Grid2 from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

// project imports
import AuthWrapper from './AuthWrapper';
import AuthCardWrapper from './AuthCardWrapper';
import Logo from '../../Logo';
import AuthRegister from './AuthRegister';
import AuthFooter from './AuthFooter';

// ===============================|| AUTH3 - REGISTER ||=============================== //

const Register = () => {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <AuthWrapper>
      <Grid2 container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid2 item xs={12}>
          <Grid2 container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid2 item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid2 container spacing={2} alignItems="center" justifyContent="center">
                  <Grid2 item sx={{ mb: 3 }}>
                    <RouterLink to="#" aria-label="theme logo">
                      <Logo />
                    </RouterLink>
                  </Grid2>
                  <Grid2 item xs={12}>
                    <Grid2 container direction={{ xs: 'column-reverse', md: 'row' }} alignItems="center" justifyContent="center">
                      <Grid2 item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography color="secondary.main" gutterBottom variant={downMD ? 'h3' : 'h2'}>
                            Sign up
                          </Typography>
                          <Typography variant="caption" fontSize="16px" textAlign={{ xs: 'center', md: 'inherit' }}>
                            Enter your credentials to continue
                          </Typography>
                        </Stack>
                      </Grid2>
                    </Grid2>
                  </Grid2>
                  <Grid2 item xs={12}>
                    <AuthRegister />
                  </Grid2>
                  <Grid2 item xs={12}>
                    <Divider />
                  </Grid2>
                  <Grid2 item xs={12}>
                    <Grid2 item container direction="column" alignItems="center" xs={12}>
                      <Typography component={RouterLink} to={{ pathname: "/user/login", state: {} }} variant="subtitle1" sx={{ textDecoration: 'none' }}>
                        Already have an account?
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
  );
};

export default Register;
