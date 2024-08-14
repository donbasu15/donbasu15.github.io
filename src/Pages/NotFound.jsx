function NotFound(){
    return(
        <>
           <Header></Header>
           <div className="page-body">
              <div className="body-parts"><br /><Sidebar></Sidebar></div>
              <div className="body-parts">
                <h2>Page not Found</h2>     
             </div>
           </div>
        </>
    )
}

export default NotFound;