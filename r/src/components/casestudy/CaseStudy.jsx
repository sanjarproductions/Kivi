import "./CaseStudy.css"
import PortFolioPhoto from "../../img/portfolio-jetour.png"

const CaseStudy = () => {

  return (
    <>
      <div className="caseStudy">
        <div className="container">
          <div className="case-study__text">
            <h3>Case Studies</h3>
            <p>Explore our Case Studies to see the transformative power of our custom coding solutions in action.
              Discover the stories behind our success and get inspired by the possibilities we can create together.
            </p>
          </div>
          <div className="portfolio">
            <div className="items" id="items">
              <div className="item">
                <strong>Jetour Motors –</strong>
                <p>Web Design & Development</p>
                <a href="https://jetour-uzbekistan.uz/">
                  <img src={PortFolioPhoto} alt="" />
                </a>
              </div>
              <div className="item">
                <strong>Hongqi</strong>
                <p>Web Design & Development</p>
              </div>
              <div className="item">
                <strong>Dongfeng Motors –</strong>
                <p>Web Design & Development</p>
              </div>
              <div className="item">
                <strong>Bestune Motors –</strong>
                <p>Web Design & Development</p>
              </div>
            </div>
          </div>
          <div className="more-wrapper">
            {/* <button className="view-more__portfolio">View More <img src={ViewMoreIcon} alt="" /></button> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default CaseStudy
