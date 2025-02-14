import React from 'react';
import './404_notfound.css';
import {Link} from 'react-router'
function NotFound () {
    return (
        <>
            <div className="col-flex-container-80">
                <div className="row-flex-container-100">
                    <div id="error-contents" className="col-flex-container">
                        <div id="main-text">
                            <div className="row-flex-container">
                                4<div id="bracket">{"{}"}</div>4
                            </div>
                        </div>
                        <h1>Something is missing</h1>
                        <p>The page you looking for is not found.</p>
                        <button id="go-home-btn">
                            <Link to={'/'} className="row-flex-container-100">
                                Go to home
                            </Link>
                        </button>
                       
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotFound;
