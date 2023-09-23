import React, { useState } from 'react';
import './App.css';
import Tabla from './Tabla';
import Form from './Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [formData, setFormData] = useState([]);

  const addToTable = (data) => {
    setFormData([...formData, data]);
  }

  return (
    <div className="App">
      <Form onFormSubmit={addToTable} />
      <Tabla data={formData} />
    </div>
  );
}


export default App;
