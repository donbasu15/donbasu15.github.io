import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import "../assets/CSS/NotFound.css"
function NotFound(){
    return(
        <div className='page-wrapper'>
           <div id="page-header">
                <Header></Header>
           </div>
           <div className="page-body">
              <div className="body-parts" id="page-sidebar"><br /><Sidebar></Sidebar></div>
              <div className="body-parts" id="page-not-found">
              <h1>404 - Page Not Found</h1>
              <p>Sorry, the page you are looking for does not exist.</p>    
             </div>
           </div>
           <div id="page-footer">
               <Footer></Footer>
           </div>
        </div>
    )
}

export default NotFound;