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
                <a href="/portfolio/"><h1>Hirak's Page</h1></a>
            </div>
            <div className="page-menu" id="myTopnav">
             
                <Link to="#">Pulications</Link>
                <Link to="#">Experience</Link>
                <Link to="/portfolio/projects">ML Projects</Link>
                <Link to="#">Robotics Projecs</Link>
                <Link to="#">Portfolio</Link> 
                 
            </div>

            </div>
            <div className="nav-icon page-menu" id="nav-icon">
               <a href="#" className="icon" onClick={myFunction}>
                 <i className="fa fa-bars"></i>
               </a>
            </div> 
        </div>
        </div>
    )
}

export default Header;