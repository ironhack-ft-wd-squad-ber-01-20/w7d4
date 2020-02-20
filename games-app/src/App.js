import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import gamesData from "./games.json";

import "./App.css";

const Profile = () => {
  return (
    <div>
      <p>This is the profile page... nothing to see here yet</p>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <p>Welcome to the home page</p>
      <p>
        Click <Link to="/profile">here</Link> to visit your profile
      </p>
      <p>
        Click <Link to="/games">here</Link> to visit the games page
      </p>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

const Games = props => {
  return gamesData.map(game => {
    return (
      <p key={game.id}>
        <Link to={`/games/${game.slug}`}>{game.name}</Link>
      </p>
    );
  });
};

const Game = props => {
  const { slug } = props.match.params;

  console.log(slug);

  const game = gamesData.find(game => {
    return game.slug === slug;
  });

  return (
    <div>
      <h2>{game.name}</h2>
      <div>
        <img src={game.cover} />
      </div>
      <p>
        <i>Summary: </i>
        {game.summary}
      </p>
      <p>
        <i>Rating: </i>
        {game.rating.toFixed(1)}
      </p>
      <p>
        <i>Release date: </i>
        {new Date(game.first_release_date * 1000).toDateString()}
      </p>
    </div>
  );
};

const NotFound = () => {
  return (
    <div>
      <p>
        404 Nothing here... <Link to="/">back to home</Link>
      </p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/games/:slug" component={Game} />
        <Route path="/games" component={Games} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
