
import Home from "./Home"
import './App.css';
import { Route, Switch } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="App">
     <Switch>
       <Route path="/search">
       <SearchPage/>
       </Route>
       <Route path="/">
         <Home/>
       </Route>
     </Switch>
    </div>
  );
}

export default App;
