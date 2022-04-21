import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  pageSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar></Navbar>

          <Routes>
            <Route exact path='/sports' element={<News key="sports" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="sports"/>} />
            <Route exact path='/business' element={<News key="business" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="business"/>} />
            <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="entertainment"/>} />
            <Route exact path='/' element={<News key="/" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="general"/>} />
            <Route exact path='/health' element={<News key="health" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="health"/>} />
            <Route exact path='/science' element={<News key="science" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="science"/>} />
            <Route exact path='/sports' element={<News key="sports" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="sports"/>} />
            <Route exact path='/technology' element={<News key="technology" pageSize={this.pageSize} apiKey={this.apiKey} country="in" category="technology"/>} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

