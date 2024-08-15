import ProfileImage from '../assets/Images/Hirak_compressed.jpg'
function Sidebar (){
    return(
        <div className='sidebar'>
            <div className="user-avatar">
                <img className='user-photo' src={ProfileImage} alt="Profile"/>
            </div>
            <div className='user-content'>
                <h3 className='user-name'>Hirak Basumatary</h3>
                <p className='user-about' style={{fontSize: '14px', color: 'rgb(86, 85, 85)'}}>PhD Scholar (Robotics and AI-Driven Control)</p>
            </div>
            <br />
            <div className="user-link-wrapper">
                <a href=""><i class="fa-solid fa-location-dot"></i> Guwahati, India</a>

                <a href=""><i class="fa-solid fa-building-columns"></i> IIT Guwahati, India</a>

                <a href=""><i class="fa-brands fa-google"></i> Email</a>
               
                <a href=""><i class="fa-brands fa-github"></i> Github</a>
                
                <a href=""><i class="fa-brands fa-linkedin" style={{color: 'blue'}}></i> LinkedIn</a>
               
                <a href=""><i class="fa-brands fa-google-scholar"></i> Google Scholar</a>
              
                <a href=""><i class="fa-brands fa-orcid" style={{color: 'green'}}></i> ORCID</a>
            
                <a href=""><i class="fa-brands fa-researchgate" style={{color: '#63E6BE'}}></i> ResearchGate</a>

            </div>
        </div>
    )
}
export default Sidebar;