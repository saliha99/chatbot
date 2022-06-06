import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import covid from './covid.png';
import Header from './Header';
//import Photo from './Photo';
import Landing from './pages/Landing';
import About from './pages/About';
import Shop from './shop/Shop';
// import Chatbot from './chatbot/Chatbot';
// import Photo from './Photo';

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
                            <Route exact path="shop" element={<Shop />} />
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
