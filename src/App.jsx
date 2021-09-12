import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import Home from 'components/Home/Home';
import MovieDetail from 'components/MovieDetail/MovieDetail';
import PageNotFound from 'components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:imdbId" component={MovieDetail} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
