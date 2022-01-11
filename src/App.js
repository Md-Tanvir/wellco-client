import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Courses from "./components/Courses/Courses";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import Events from "./components/Events/Events";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home/Home";
import Booking from "./components/Booking/Booking";
import AuthProvider from "./Context/AuthProvider";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/courses">
              <Courses></Courses>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/booking/:courseId">
              <Booking></Booking>
            </Route>
            <Route path="/events">
              <Events></Events>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
