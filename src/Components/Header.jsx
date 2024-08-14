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
                <a href="/"><h1>Hirak's Page</h1></a>
            </div>
            <div className="page-menu" id="myTopnav">
                <a href="">Pulications</a>
                <a href="">Experience</a>
                <a href="/projects">ML Projects</a>
                <a href="">Robotics Projecs</a>
                <a href="">Portfolio</a>      
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