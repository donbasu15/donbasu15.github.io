function NotFound(){
    return(
        <>
           <div id="page-header">
                <Header></Header>
           </div>
           <div className="page-body">
              <div className="body-parts" id="page-sidebar"><br /><Sidebar></Sidebar></div>
              <div className="body-parts" id="page-content">
                <h2>Page not Found</h2>     
             </div>
           </div>
           <div id="page-footer">
               <Footer></Footer>
           </div>
        </>
    )
}

export default NotFound;