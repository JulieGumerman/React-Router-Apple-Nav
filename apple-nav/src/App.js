import React from 'react';
import './App.css';
import MainNav from "./components/MainNav";
import { Route} from "react-router-dom";
import Home from "./components/Home";
import Mac from "./components/Mac";
import IPad from "./components/IPad";



function App() {
  return (
    <div className="App">
      <MainNav />
      <Route exact path="/" component={Home} />
      <Route path="/mac" component={Mac} />
      <Route path="/ipad" component={IPad} />
      <Route path="/iphone" component={IPhone} />
      <Route path="/watch" component={Watch} />
      <Route path="/tv" component={TV} />
      <Route path="/music" component={Music} />
      <Route path="/support" component={Support} />
    </div>
  );
}

export default App;
