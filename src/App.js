import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Courses from "./components/Courses/Courses";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home/Home";
import Booking from "./components/Booking/Booking";
import AuthProvider from "./Context/AuthProvider";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Blogs from "./components/Blogs/Blogs";
import Blog from "./components/Blog/Blog";

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
            <PrivateRoute path="/courses">
              <Courses></Courses>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/booking/:courseId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route path="/blog/:blogId">
             <Blog></Blog>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
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
