import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Home/Login/Login';
import SignUp from './pages/Home/SignUp/SignUp';
import NotFound from './pages/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider'
import PrivateRoute from './pages/Home/PrivateRoute/PrivateRoute';
import Details from './pages/Home/Details/Details';
import Explores from './pages/Home/Explores/Explores';
import Dashboard from './pages/Home/Dashboard/Dashboard';



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
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/explore">
            <Explores></Explores>
          </Route>
          <PrivateRoute path="/details/:glassId">
           <Details></Details>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
           <Dashboard></Dashboard>
          </PrivateRoute>
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
