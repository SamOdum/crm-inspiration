import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomeProvider } from './contexts/HomeContext';
import HomeSliderProvider from './contexts/HomeSliderContext';
import './styles/App.scss';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <HomeProvider>
        <HomeSliderProvider>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </HomeSliderProvider>
      </HomeProvider>
    </Router>
  );
}

export default App;
