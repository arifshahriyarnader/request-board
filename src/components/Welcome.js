import React from 'react';
import { NavLink } from 'react-router-dom';
import Comments from '../Comment/Comments';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Welcome = ({handleLogout}) => {
    return (
        <section className="welcome">
            <div className="heading_nav">
             <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="heading">
                          <h2>Request Board</h2>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="nav_bar">
                    <nav>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/profile">Profile</NavLink>
                </li>
            </ul>
        </nav>
                    </div>
                    <button className="btn btn-primary m-5" variant="primary" onClick={handleLogout}>Logout</button>
                </div>
                </div>    
            </div> 
            </div>


            <Comments currentUserId="1" /> 
        </section>
       
         
        
    );
};

export default Welcome;