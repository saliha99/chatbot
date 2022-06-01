//import { AutoInit } from 'materialize-css';
import React from 'react';
import covids from './covids.png';
// import { Grid } from '@mui/material';


const Photo = () => (
    <div>
        <div className='covid'>
            <img  src={covids} alt="Logo" width={500} height={400} />
        </div>
    </div>
)

export default Photo;
// style={{marginLeft:AutoInit, marginRight:AutoInit}} img yanından sildim...