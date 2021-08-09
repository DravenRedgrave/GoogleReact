import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./pages/AboutPage";
import Gmail from "./pages/Gmail";
import Images from "./pages/Images";
import Store from "./pages/Store";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/store'  component={Store}/>
        <Route path='/gmail'  component={Gmail}/>
        <Route path='/images'  component={Images}/>
      </Switch>
    </>
  );
}

export default App;
