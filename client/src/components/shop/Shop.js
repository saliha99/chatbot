import React from 'react';
//import ItemList from './ItemList';
//import ReactDOM from 'react-dom/client';

const Shop = () => (
    <div className='contactDesc'>
        <h3 style={{ textAlign: 'center' }}>Patient's Personal Information</h3>
        <h6 style={{ textAlign: 'center' }}>Fill out the form below which will determine the appointment you need. You will be informed about the developments.</h6>
        <div className='form'>
            <form id="form">
                <label>Name Surname</label>
                <br/>
                <input type="text" id="fname" required/>
                <br/>
                <br/>
                <label>Phone Number</label>
                <br/>
                <input type="text" required/>
                <br/>
                <br/>
                <label>Mail Address</label>
                <br/>
                <input type="text" required/>
                <br/>
                <br/>
                <label>Address</label>
                <br/>
                <input type="text" required/>
                <br/>
                <br/>
                <input type="submit" value="Send"></input> 
            </form>           
        </div>
        <div class="footer">
            <p>Created by Saliha Apak for Graduation Project ©2022</p>
        </div>
    </div>
)

export default Shop;