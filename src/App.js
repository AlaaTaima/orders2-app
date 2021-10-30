

import React, {useState} from 'react'
import './App.css';
import 'antd/dist/antd.css';

import MainBar from './components/MainBar';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import MainSection from './components/OrderCards';
import Test from './components/Test'

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"

function App() {

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

      <>

      <GlobalStyles/>

    <div className="App">


      <MainBar handleClick={themeToggler} />
      <NavBar />
      <Categories />
      {/* <Test /> */}
      <MainSection />
    </div>

    </>
    </ThemeProvider>
  );
}

export default App;
