import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Courses from "./components/Courses/Courses";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import Events from "./components/Events/Events";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <div>
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

          <Route path="/events">
            <Events></Events>
          </Route>

          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
