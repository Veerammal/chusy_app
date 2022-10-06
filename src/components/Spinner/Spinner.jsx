import React from 'react';
import { CircularProgress } from "@material-ui/core";


const Spinner = () => (
  <div style={ {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#c9d1d9',
    fontSize: '24px',
  }}>
    Chusy Loading &nbsp;
    <CircularProgress />
  </div>
);

export default Spinner;