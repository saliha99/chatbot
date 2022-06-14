//import { AutoInit } from 'materialize-css';
import React from 'react';
import covid from './covid19.png';
// import { Grid } from '@mui/material';


const Photo = () => (
    <div>
        <div className='covid'>
            <img  src={covid} alt="Logo" width={500} height={400} />
        </div>
    </div>
)

export default Photo;
