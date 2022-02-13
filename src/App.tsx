import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import {Footer} from "./components/Footer/Footer";
import './app.scss'

export const App = () => {
  return (
    <Router>
      <div className='app' >
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}
