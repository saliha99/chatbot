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
        {/* let items={
                
        };

        //An array that is opened to hold previously entered values.
        let output=[];


        //Function created to return information after pressing the button.
        function getInfo(){
            names = document.getElementById('fname')
            tel = document.getElementById('tel').value
            email=document.getElementById('email').value;
            items.name=name
            items.tel=tel
            items.email=email
            output.push({{names:names,tel:tel,email:email}})
            console.table(output)
            document.getElementById("form").reset()
            return false
        } */}
            
        
    </div>
)

export default Shop;