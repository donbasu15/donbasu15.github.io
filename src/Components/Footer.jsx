import "../assets/CSS/Footer.css"

function Footer(){
    return(
     <div className="footer">
         <div className="follow">
             <b><a href=""><i class="fa-brands fa-github"></i> Github</a>  &nbsp; <a href=""> <i class="fa-brands fa-linkedin"></i> LinkedIn</a> &nbsp; <a href=""><i class="fa-solid fa-envelope"></i> Mail</a></b>
         </div>
         <div className="copyright">
            © 2024 Hirak Basumatary.
         </div>
     </div>
    )
}

export default Footer;