import { Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/common/Nav";
import Home from "./components/home/Home";







function App() {
  
    return (
      <div className="wrapper">
        <Nav/>
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        {/* <Route path="/staff">
          <StaffList employees={employees} />
        </Route>
          <Route path="/pets">
          <PetsList pets={pets} />
        </Route> */}
        </Switch>
      </div>
    );
  }


export default App;