import React from "react";
import { connect } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Loadable from "react-loadable";

function Loading() {
  return <div>Loading the component......</div>;
}
const Classes = Loadable({
  loader: () => import("./components/Classes"),
  loading: Loading,
});
const Subjects = Loadable({
  loader: () => import("./components/Subjects"),
  loading: Loading,
});
function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">My App</Navbar.Brand>
      </Navbar>
      <Router>
        <Link to="/classes">Classes</Link>
        <span>|</span>
        <Link to="/subjects">Subjects</Link>
        <Switch>
          <Route exact path="/" component={Classes}></Route>
          <Route exact path="/classes" component={Classes}></Route>
          <Route exact path="/subjects" component={Subjects}></Route>
        </Switch>
      </Router>
      <Navbar fixed="bottom">Sticky footer</Navbar>
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Sticky footer</Navbar.Brand>
      </Navbar>
    </>
  );
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
