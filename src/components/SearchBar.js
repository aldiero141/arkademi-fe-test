import React from 'react';
import styled from 'styled-components';
import searchIcon from '../assets/loupe.svg';


export const Search = styled.input`
    width: 20em;
    background: #FFFFFF;
    border: none;
    ::placeholder {
        color: #CCC;
        opacity: 1; 
      }
    :focus{
    outline: none;
`;

export const Placeholder = styled.div`
    display: flex;
    height: 1.5em;
    align-items:center;
    background: #FFFFFF;
    border: 1px solid #CCC;
    border-radius: 0.3em;
    padding: 0.5em;
    
`;

const SearchBar = ({keyword,setKeyword}) => {
  return (
  <Placeholder>
      <Search 
        key="random1"
        value={keyword}
        placeholder={"Cari Kursus"}
        onChange={(e) => setKeyword(e.target.value)}
    />
    <img alt="search-icon" src={searchIcon} height="15em"/>
  </Placeholder>
    
  );
}

export default SearchBar