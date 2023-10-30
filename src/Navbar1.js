// JavaScript source code

import React from 'react';
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="current">
                        <a class="nav-link" href="#">Current</a>
                    </li>
                </ul>
            </div>
            <form class="form-inline ml-auto">
                <div class="form-group">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                </div>
            </form>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </nav>
    );
}

export default Navbar;