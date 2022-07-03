import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import "./navbar.scss";
import myPic from "../Images/Netflix.jpeg"
import  footballPic from "../Images/football.jpg"
import Register from "../list"
import { BrowserRouter as Router, Route} from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src={myPic}
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>MOVIT</span>
          <Notifications className="icon" />
          <img
            src={footballPic}
            alt=""
          />

          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <Router>
    
              <span> <Route  path="/Register"  exact component={Register}/> </span>
              <span>Logout</span>
              </Router>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
