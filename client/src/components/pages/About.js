import React from 'react';
import Photo2 from '../Photo2';
import AboutText from '../AboutText';

const About = () => (
    <div className='desc2'>
        <h1 style={{ textAlign: 'center' }}>About Us!</h1>
        <div className='container2'>
            <AboutText/>
            <Photo2 />
        </div>
        <div class="footer">
            <p>Created by Saliha Apak for Graduation Project ©2022</p>
        </div>
    </div>
)

export default About;