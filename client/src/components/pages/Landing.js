import React from 'react';
import Chatbot from '../chatbot/Chatbot';
import Photo from '../Photo';

const Landing = () => (
    <div className='desc'>
        <h1 style={{ textAlign: 'center' }}>Here to help you!</h1>
        <p style={{ textAlign: 'center' }}>with the help of the Covid Chatbot...</p>
        <div className='container'>
            <Chatbot/>
            <Photo />
        </div>
    </div>

)

export default Landing;