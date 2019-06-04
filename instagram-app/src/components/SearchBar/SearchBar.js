import React from 'react';

import logo from './logo.png';
import heart from './heart.png';
import explore from './explore.png';
import profile from './profile.png';
import instagram from './instagram.png';

import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="nav">
            <div className="search-bar">
                <div className="search-bar-logo">
                    <img src={logo} className="icon" alt="Instagram Logo" />
                    <div className="line hidden"></div>
                    <div className="overflow hidden">
                        <img src={instagram} className="instagram" alt="Instagram Words" />
                    </div>
                </div>
                <form className="search-bar-search" onSubmit={props.handleSearchSubmit}>
                    <input placeholder="Search" className="search-bar-search-bar" onChange={props.handleSearchInput} value={props.value}/>
                </form>
                <div className="search-bar-icons">
                    <img src={explore} className="icon" alt="Explore" />
                    <img src={heart} className="icon" alt="Heart" />
                    <img src={profile} className="icon" alt="Profile" />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;