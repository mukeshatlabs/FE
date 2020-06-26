import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import axiosWithAuth from './utils/axiosWithAuth'
import Categories from './Categories'
import CategoryItem from './CategoryItem'

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 100%;
  height: 60px;
  padding: 0 25px 5px 25px;
  margin-top: 45px;
  background: rgb(232, 76, 61);
  h1 {
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
    padding: 0;
    color: rgb(243, 243, 243);
    font-size: 2.5rem;
  }
  a button {
    margin-right: 20px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.6rem;
    padding: 0 10px;
    text-decoration: none;
    background-color: #F3F3F3;
    outline: none;    
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      box-shadow: 5px -5px 15px rgba(26, 30, 35, .4);
    }
  }
  div {
    align-self: center;
  }
`;

const AppWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
  background-color: rgb(243, 243, 243);
  padding-bottom: 50px;
  .headerText {
    padding: 45px 0;
    font-family: 'Ubuntu', sans-serif;
    font-style: italic;
    letter-spacing: 1.2px;
    color: rgb(243, 243, 243);
    font-size: 2rem;
    width: 100%;
    background: rgba(26, 30, 35, .4);
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

function NavBar() {
    
  return (
    <HeaderDiv>
      <h1>African Marketplace</h1>
      <div>
        <a href='https://5ef4299962a7f75903a741d6--africanmarketbuildweek1.netlify.app/' target='_blank' ><button>Home</button></a>
        <a href='#'><button>About</button></a>
      </div>
    </HeaderDiv>
  )
}

function CatRender() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get('/products/cat')
    .then(res => {
        console.log(res)
        setCategories(res.data)
    })
    .catch(err => {
        console.log('error', err)
    })
  }, [])

  return (
    <div>
      <NavBar />
      <AppWrapper className='appWrapper'>
        <h1 className='headerText headerToggle'>Welcome! Please Choose Your Category</h1>

        
          {/* <Route path='/categories/:catName' render={() => {
            return <CategoryItem />
          }} /> */}
          {/* <Route path='/categories' render={() => {
            return <Categories cards={categories} />
          }} /> */}
          <Categories cards={categories} />

      </AppWrapper>
    </div>
  );
}

export default CatRender;