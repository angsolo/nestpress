import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { ElevationScroll } from '../ElevationScroll';
import { Link } from '../../../../Link';

export const WithDesktop = () => {
  const desktop: boolean = useMediaQuery('(min-width:840px)');

  if (!desktop) {
    return null;
  }

  return (
    <ElevationScroll>
      <AppBar
        style={{
          backgroundColor: 'lime',
          backgroundImage: 'linear-gradient(357.5deg, lime 8%, #000000 50%)',
        }}
      >
        <Toolbar>
          <Link href="/">
            <Typography
              variant="h6"
              style={{
                color: 'lime',
                background: 'linear-gradient(357.5deg, #000000 8%, lime 50%)',
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
