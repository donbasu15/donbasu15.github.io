import Heading from "../assets/Images/Hirak_Header.png";
import Coding from "../assets/Images/Hirak_Coding.gif";
function HomeBody(){
    return(
           <>
              <div className="home-body">
                  <div className="home-content">
                        <h1>👋🏼Hello there, Welcome to my personal webpage!</h1>
                        <br />
                        <img src={Heading} alt="" className="hirak-heading"/>
                        <div className="about-hirak">
                            <div className="about-text">
                                 <p>👨🏻‍💻 PhD graduate from Indian Institute of Technology (IIT), Guwahati, India.</p>
                                 <p>📚 PhD Specialization in Robotic Grasping and AI-Driven Control.</p>
                                 <p>🔬 My research interests are in bridging Robotics and AI/ML for synergistic embodiment!</p>
                                 <p>📽️ I am also interested in assisting others on their path in the world of Machine Learning and academia.</p>
                            </div>
                            <div className="about-img">
                                  <img src={Coding} alt="Coding Img" />
                                  <h3>Robotics AI/ML Code Repeat</h3>
                            </div>
                        </div>
                        <div className="interest-hirak">
                            <h1>Hirak’s Interests</h1>
                            <p>My research and professional interests
                                 span across Robotics, <b>Artificial Intelligence (AI)/Machine Learning (ML), Natural Language Processing (NLP)</b> ,<b> and Computer Vision</b> . With a solid foundation in these cutting-edge fields, I am passionate about exploring innovative solutions and pushing the boundaries of technology. I am eager to collaborate on exciting projects and contribute as a Roboticist and AI/ML Engineer. Whether you’re looking to develop intelligent systems, enhance robotic capabilities, 
                                or integrate advanced AI solutions, I’m ready to bring my expertise to the table.
                            </p>
                            <p>
                                Let’s connect and create the future together!
                            </p>
                            <p>
                            How to reach me: 23hirak@gmail.com
                            </p>

                        </div>
                  </div>
              </div> 
           </>
    )
}
 
export default HomeBody;