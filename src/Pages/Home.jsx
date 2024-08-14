import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import HomeBody from "../Components/HomeBody";

function Home(){
    return(
        <>
                   
           <Header></Header>
           <div className="page-body">
              <div className="body-parts"><Sidebar></Sidebar></div>
              <div className="body-parts">
              
                 
                <HomeBody></HomeBody>
             </div>
           </div>
           
           
        
        </>
    )
}

export default Home;