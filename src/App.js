import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginProvider from './contexts/LoginContext';
import HomeSliderProvider from './contexts/HomeSliderContext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles/style.css';
import './styles/App.scss';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ResetPasswPage from './pages/ResetPasswPage';
import SignUpPage from './pages/SignUpPage';
import VendorSignUpPage from './pages/VendorSignUpPage';
// import './vendor/cloud-zoom';
// import './vendor/countdown';
// import './vendor/jquery-ui';
// import './vendor/jquery.bxslider';
// import './vendor/jquery.flexslider';
// import './vendor/magnific-popup';
// import './vendor/main';
// import './vendor/megamenu';
// import './vendor/mobile-menu';
// import './vendor/revolution-slider';

function App() {
  return (
    <Router>
      <LoginProvider>
        <HomeSliderProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginPage} />
            <Route path="/reset-password" component={ResetPasswPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/vendor-signup" component={VendorSignUpPage} />
          </Switch>
        </HomeSliderProvider>
      </LoginProvider>
    </Router>
  );
}

export default App;
