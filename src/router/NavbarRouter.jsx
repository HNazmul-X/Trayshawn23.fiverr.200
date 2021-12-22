import React from 'react';
import {Routes,Route,Outlet} from "react-router-dom"
import Homepage from '../pages/Hompage/Homepage';

const NavbarRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<NavbarOutput/>}>
                <Route index element={<Homepage/>}></Route>
                <Route path="about" element={<h1>This is about page</h1>}></Route>
            </Route>

        </Routes>
    );
};


const NavbarOutput = () => {
    return (
        <>
        {/* here is navbar */}
            <Outlet/>
        </>
    )
}

export default NavbarRouter;