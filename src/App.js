import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import About from './Pages/About';
import Routes from './Pages/Routes';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/routes",
    element: <Routes />,
  },
]);

function App() {
  return (
    <div>
      <Header />
      <main id="mainBlock">
        <RouterProvider router={router} />
      </main>
    </div>
);
}

export default App;
