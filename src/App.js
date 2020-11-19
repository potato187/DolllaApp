import Home from "Pages/Home";
import Register from "Pages/SignIn";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Redirect from="/" to="/home" />
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/sign-in" component={Register} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
