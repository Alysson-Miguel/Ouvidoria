import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { FaTrash, FaBus, FaLightbulb } from 'react-icons/fa';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/> 
  </React.StrictMode>
);


