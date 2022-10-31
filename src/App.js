import React from 'react';
import Calculator from './components/pages/Calculator.js';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/pages/Home.js';
import Quote from './components/pages/Quote.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>
        <Header />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </section>
      </main>
    );
  }
}

export default App;
