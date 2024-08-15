import { Link,Outlet } from "react-router-dom";

function myFunction(e) {
    e.preventDefault();
    var x = document.getElementById("myTopnav");
    if (x.className === "page-menu") {
      x.className = "responsive";
    } else {
      x.className = "page-menu";
    }
}

function Header(){
    return(
       <div className="head-wrapper">
        <div className="header">
          <div className="header-part">
            <div className="page-title">
                <a href="/portfolio/"><h2>Hirak's Page</h2></a>
            </div>
            <div className="page-menu" id="myTopnav">
             
                <a href="/portfolio/">Pulications</a>
                <a href="/portfolio/">Experience</a>
                <a href="/portfolio/projects">ML Projects</a>
                <a href="/portfolio/">Robotics Projecs</a>
                <a href="/portfolio/">Portfolio</a> 
                 
            </div>

          </div>
          <div className="nav-icon" id="nav-icon">
             <a href="#" className="icon" onClick={myFunction}>
               <i className="fa fa-bars"></i>
             </a>
          </div> 
        </div>
      </div>
    )
}

export default Header;