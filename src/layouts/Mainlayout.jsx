import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    );
};

export default Mainlayout;