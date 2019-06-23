import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.png';
import instagram from '../../assets/instagram.png';

import './SearchBar.css';

const NavigationDiv = styled.div`
    max-width: 1010px;
    height: 77px;
    margin: auto;
`;

const SearchBarDiv = styled.div`
    width: 100%;
    padding: 26px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center
`;

const SearchBarLogoDiv = styled.div`
    width: calc(((100% - 215px) / 2) - 26px);
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SearchBarSearchForm = styled.form`
    width: 215px;
    height: 28px;
    display: flex;
    justify-content: center;
`;

const SearchBarIconsDiv = styled.div`
    width: calc(((100% - 215px) / 2) - 26px);
    display: flex;
    justify-content: flex-end;
`;

const SearchBarSearchBarInput = styled.input`
    width: 100%;
    text-align: center;
    border: 1px solid #e6e6e6;
    background: #fafafa;

    &:focus {
        outline: none;
    }
`;

const LineDiv = styled.div`
    margin: 0 16px;
    background: black;
    width: 1px;
    height: 28px;
`;

const SearchBar = props => {
    return (
        <NavigationDiv>
            <SearchBarDiv>
                <SearchBarLogoDiv>
                    <img src={logo} className="icon" alt="Instagram Logo" />
                    <LineDiv></LineDiv>
                    <div className="overflow hidden">
                        <img src={instagram} className="instagram" alt="Instagram Words" />
                    </div>
                </SearchBarLogoDiv>
                <SearchBarSearchForm onSubmit={props.handleSearchSubmit}>
                    <SearchBarSearchBarInput placeholder="🔍Search" onChange={props.handleSearchInput} value={props.value}/>
                </SearchBarSearchForm>
                <SearchBarIconsDiv>
                    <span className="icon explore"></span>
                    <span className="icon heart"></span>
                    <span className="icon profile"></span>
                </SearchBarIconsDiv>
            </SearchBarDiv>
        </NavigationDiv>
    );
}

export default SearchBar;