import React from 'react';

// material-ui
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" component={Link} href="https://www.inzi.com" target="_blank" underline="hover">
      www.inzi.com
    </Typography>
    <Typography variant="subtitle2" component={Link} href="http://localhost.com" target="_blank" underline="hover">
      &copy; localhost.com
    </Typography>
  </Stack>
);

export default AuthFooter;