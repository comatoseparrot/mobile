import React from 'react';
import Login from './login'; 
import Forgotpassword from './forgotpassword';
import Resetpassword from './resetpassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Login />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
