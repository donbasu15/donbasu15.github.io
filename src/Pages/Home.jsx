import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import HomeBody from "../Components/HomeBody";
import Footer from "../Components/Footer";
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
           <Footer></Footer>
        </>
    )
}

export default Home;