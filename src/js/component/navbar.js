import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-black mb-3">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">
                        <img src="https://vectordiary.com/wp-content/uploads/2021/03/star-wars-logo-font.jpg" alt="Bootstrap" width="70" height="40" />
                    </span>
                </Link>
                <div className="ml-auto">
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Favorites
                        </button>
                        <ul className="dropdown-menu" style={{ right: 0 }}>
                            <li><a className="dropdown-item" href="#">Item 1</a></li>
                            <li><a className="dropdown-item" href="#">Item 2</a></li>
                            <li><a className="dropdown-item" href="#">Item 3</a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
