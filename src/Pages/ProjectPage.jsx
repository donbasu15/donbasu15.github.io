import Header from "../Components/Header";
import Projects from "../Components/Project";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
function ProjectPage(){
    return(
      <>        
           <div id="page-header">
                <Header></Header>
           </div>    
           <div className="page-body">
              <div className="body-parts" id="page-sidebar"><Sidebar></Sidebar></div>
              <div className="body-parts" id="page-content">
                <Projects></Projects>
             </div>
           </div>
           <div id="page-footer">
               <Footer></Footer>
           </div>
       </>
    )
}
export default ProjectPage;