import Header from "../Components/Header";
import Projects from "../Components/Project";
import Sidebar from "../Components/Sidebar";

function ProjectPage(){
    return(
        <>
           <Header></Header>
           <div className="page-body">
              <div className="body-parts"><br /><Sidebar></Sidebar></div>
              <div className="body-parts">
                <h2>Machine Learning Projects</h2>
                <br />
                <Projects></Projects>
             </div>
           </div>
           
           
        </>
    )
}
export default ProjectPage;