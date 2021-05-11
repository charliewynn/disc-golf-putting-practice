import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Game from "./screens/Game";
import Home from "./screens/Home";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </nav>

        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/users">
            <div>Users</div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
