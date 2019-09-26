import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { ElevationScroll } from '../ElevationScroll';
import { Link } from '../../../../Link';

export const WithMobile = () => {
  const mobile: boolean = useMediaQuery('(max-width:480px)');

  if (!mobile) {
    return null;
  }

  return (
    <ElevationScroll>
      <AppBar
        style={{
          backgroundColor: 'lime',
          backgroundImage: 'linear-gradient(353deg, lime 8%, #000000 50%)',
        }}
      >
        <Toolbar>
          <Link href="/">
            <Typography
              variant="h6"
              style={{
                color: 'lime',
                background: 'linear-gradient(353deg, #000000 8%, lime 50%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              NESTPRESS
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};
