import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter, Link } from "react-router-dom";
import GuessGamePage from "./pages/GuessGamePage";
import SliderPage from "./pages/Slider";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Game1WikiPage from "./pages/Game1WikiPage";
import Game2WikiPage from "./pages/Game2WikiPage";
import Game3WikiPage from "./pages/Game3WikiPage";
import SignupOrSignin from "./pages/SignupOrSignin";
import GamesListFromDatabase from "./pages/GamesListFromDatabase";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route
            path="/SignUporSignIn"
            component={SignupOrSignin}
          ></Route>
          <Route
            path="/GamesListFromDatabase"
            component={GamesListFromDatabase}
          ></Route>
          <Route
            path="/GuessGamePage"
            component={GuessGame}
          ></Route>
          <Route
            path="/SliderPage"
            component={Slider}
          ></Route>
          <Route
            path="/Game1WikiPage"
            component={Game1Wiki}
          ></Route>
          <Route
            path="/Game2WikiPage"
            component={Game2Wiki}
          ></Route>
          <Route
            path="/Game3WikiPage"
            component={Game3Wiki}
          ></Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <HomePage></HomePage>
    </div>
  );
};

const GuessGame = () => {
  return (
    <div>
      <GuessGamePage></GuessGamePage>
    </div>
  );
};

const Slider = () => {
  return (
    <div>
      <SliderPage></SliderPage>
    </div>
  );
};

const Game1Wiki = () => {
  return (
    <div>
      <Game1WikiPage></Game1WikiPage>
    </div>
  );
};

const Game2Wiki = () => {
  return <Game2WikiPage></Game2WikiPage>;
};

const Game3Wiki = () => {
  return <Game3WikiPage></Game3WikiPage>;
};

export default App;
