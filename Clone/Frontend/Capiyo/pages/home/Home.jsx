import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import { useState } from "react";

const Home = () => {

  return (
    <div  className="home">
      <Navbar />
      <Router>
      <Switch>
        <Route path="/"><Home/></Route>
        <Route path="/Featured"><Featured/></Route>
        <List/>
      <List/>
      <List/>
      <List/>
        

      </Switch>
      </Router>
    
    </div>
  );
};

export default Home;
