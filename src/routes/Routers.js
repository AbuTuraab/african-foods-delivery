import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home"
import AfricanFoods from '../pages/AfricanFoods';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import FoodDetails from '../pages/FoodDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<Home/>} />
    <Route path="/foods" element={<AfricanFoods/>} />
    <Route path="/foods/:id" element={<FoodDetails/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/checkout" element={<Checkout/>} />
    <Route path="/contact" element={<Contact/>} />
  </Routes>
}

export default Routers;