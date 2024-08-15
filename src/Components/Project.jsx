
import Icon from "../assets/Images/acos.png"
import ProImg from "../assets/Images/acos_img1.png"
function Projects(){
    return(
        <>
         <div className="projects">
            <h2>Machine Learning Projects</h2>
            <div className="project-container">
           
              <div className="project-head">
                  <div className="icon">
                     <img src={Icon} alt="I" />
                  </div>
                  <div className="heading">
                      <h2>ECTSum: Earnings Call Transcripts</h2>
                      <p>In association with Goldman Sachs | Apr 2022 - Jul 2022</p>
                  </div>
               </div>
               <div className="project-body">
                   <div className="description">
                     <p>
                        Created ECTSum, a new dataset using Earnings Call
                        Transcripts (ECTs) of publicly traded companies as documents,
                          and short expert-written summaries derived from corresponding
                        Reuters articles. ECTs are long unstructured documents without 
                        any prescribed length limit or format. Benchmarked the dataset 
                        using state-of-the-art summarization models such as BigBird, 
                          SummaRuNNer and Longformer Encoder Decoder. Proposed FinBERT-T5 
                          based paraphraser model with 13.3% ROUGE-2 gain and 8.5% less
                         factual hallucination. Published Long Paper at EMNLP 2022
                      </p>
                      <div className="tags">
                          <div className="tag">CPP</div>
                          <div className="tag">PyTorch</div>
                          <div className="tag">CPP</div>
                          <div className="tag">PyTorch</div>
                          <div className="tag">CPP</div>
                          <div className="tag">PyTorch</div>
                      </div>
                      <div className="links">
                          <b>Project Link: </b>
                          <a href="https://github.com/rajdeep345/ECTSum">ECTSum: Bullet Point Summarization of Long ECTs</a>
                      </div>
                      
                   </div>
                    <div className="image">
                          <img src={ProImg} alt="" />
                    </div>
               </div>
           </div>
           <div className="project-container">
              <div className="project-head">
                  <div className="icon">
                     <img src={Icon} alt="I" />
                  </div>
                  <div className="heading">
                      <h2>ECTSum: Bullet Point Summarization of Long Earnings Call Transcripts</h2>
                      <p>In association with Goldman Sachs | Apr 2022 - Jul 2022</p>
                  </div>
               </div>
               <div className="project-body">
                   <div className="description">
                     <p>
                        Created ECTSum, a new dataset using Earnings Call
                        Transcripts (ECTs) of publicly traded companies as documents,
                          and short expert-written summaries derived from corresponding
                        Reuters articles. ECTs are long unstructured documents without 
                        any prescribed length limit or format. Benchmarked the dataset 
                        using state-of-the-art summarization models such as BigBird, 
                          SummaRuNNer and Longformer Encoder Decoder. Proposed FinBERT-T5 
                          based paraphraser model with 13.3% ROUGE-2 gain and 8.5% less
                         factual hallucination. Published Long Paper at EMNLP 2022
                      </p>
                      <div className="tags">
                          <div className="tag">CPP</div>
                          <div className="tag">PyTorch</div>
                          <div className="tag">CPP</div>
                          <div className="tag">PyTorch</div>
                          <div className="tag">CPP</div>
                          <div className="tag">PyTorch</div>
                      </div>
                      <div className="links">
                          <b>Project Link: </b>
                          <a href="https://github.com/rajdeep345/ECTSum">ECTSum: Bullet Point Summarization of Long ECTs</a>
                      </div>
                      
                   </div>
                    <div className="image">
                          <img src={ProImg} alt="" />
                    </div>
               </div>
             </div>
           </div>
        </>
    )
}

export default Projects;