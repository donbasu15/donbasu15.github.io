import Header from "../Components/Header";
import Projects from "../Components/Project";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
function ProjectPage(){
    return(
      <>        
           <Header></Header>
           <div className="page-body">
              <div className="body-parts"><Sidebar></Sidebar></div>
              <div className="body-parts">
                <Projects></Projects>
             </div>
           </div>
           <Footer></Footer>
       </>
    )
}
export default ProjectPage;