import React from "react";
import "./App.css";
import Book from "./Books"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return (


    <>
      <h1>App Component</h1>
      <Router>
        <div>
          <ul>
            <li>

              <Link to="/library/create_book">create book</Link>
            </li>
            <li>
              <Link to="/library">get books</Link>
            </li>
            <li>
              <Link to="/library/:book_id">grt a book</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/library/create_book">
              <Book />
            </Route>
            <Route path="/library/:book_id">
              <Book />
            </Route>
            <Route path="/library">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  );
};

export default App;
