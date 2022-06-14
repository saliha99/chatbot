import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './contact/Contact';


// routerları kaldır tek sayfa yapmayı dene!
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header/>
                        <Routes>
                            <Route exact path="/" element={<Landing />} />
                            <Route exact path="about" element={<About />} />
                            <Route exact path="contact" element={<Contact />} />
                        </Routes>
                        {/* <div className='container'>
                            <Chatbot/>
                            <Photo />
                        </div> */}
                    
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;
