import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Header/Header';
import Booking from './Pages/Booking/Booking';
import Registration from './Registration/Registration';
import Footer from './Pages/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="/booking/:serviceId">
              <Booking></Booking>
            </Route>
            <Route path="/booking">
              <Booking></Booking>
            </Route>
            <Route path="/details">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
