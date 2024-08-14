import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import HomeBody from "../Components/HomeBody";
import Footer from "../Components/Footer";
function Home(){
    return(
        <>    
           <div id="page-header">
                <Header></Header>
           </div>    
           
           <div className="page-body">
              <div className="body-parts" id="page-sidebar"><Sidebar></Sidebar></div>
              <div className="body-parts" id="page-content">
                <HomeBody></HomeBody>
              </div>
           </div>
           <div id="page-footer">
               <Footer></Footer>

           </div>
           
        </>
    )
}

export default Home;