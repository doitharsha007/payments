import React from 'react';
import {  useSelector } from 'react-redux';
import {  selectUser } from '../features/userSlice';
import { Link } from 'react-router-dom';

function HeaderComponent(props) {
    const user=useSelector(selectUser);
    const brand=()=>{
        return user?'/sender':'/';
    }
    const dash=()=>{
        return user?'/dashboard':'/';
    }
    const exit=()=>{
        return '/';
    }
        return (
            <div >
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><Link to={brand} className="navbar-brand" >Payments Project</Link></div>
                        <div><Link to={dash} className="nav-link text-light">Dashboard</Link></div>
                        <span className="nav-item text-light ">
                            {user?"Welcome "+user.username+" !!":null}
                        </span>
                        <div><Link to={exit} className="nav-link text-light">LogOut</Link></div>
                    </nav>
                </header>
            </div>
        );
}

export default HeaderComponent;