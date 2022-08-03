import React from 'react'
import ReactDOM from 'react-dom'
import ConfessionApp from './components/ConfessionApp'
import Admin from './components/Admin'
import AdminHome from './components/AdminHome'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const container = document.getElementById('app');
const root = createRoot(container);

const Links = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ConfessionApp />} /> 
            <Route path="/admin-review" element={<Admin />} />
            <Route path="/admin-home" element={<AdminHome />} />
            
        </Routes>
        <ToastContainer toastStyle={{ backgroundColor: "#121212"}} />
    </BrowserRouter>
    )
    
root.render(Links);