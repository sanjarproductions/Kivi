import "./Payment.css"
import ViewMore from "../../img/view-arrow__light.svg"

const Payment = () => {
  return (
    <>
      <div className="pay" id="join">
        <div className="container">
          <h4>Have a great idea?</h4>
          <div className="join">
            <h5>Join <br /> Kivi Studio</h5>
            <div className="wrapper">
              <a target="blank" href="https://calendly.com/sanjar-coder/discovery-call" className="box">
                <div className="box__text">
                  <strong>Book a 30-min call</strong>
                  <p>Learn more about how Kivi Studio works and how it can help you.</p>
                </div>
                <img className="pay-redirect" src={ViewMore} alt="" />
              </a>
              <a href="#!" className="box">
                <div className="box__text">
                  <strong>*Refer a friend & earn*</strong>
                  <p>*Earn 5% commissions for each referral.*</p>
                </div>
                <img className="pay-redirect" src={ViewMore} alt="" />
              </a>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <h6>Business</h6>
              <strong>From $999</strong>
              <ul className="desc">
                <div>
                  <li>- Something</li>
                  <li>- Something</li>
                </div>
                <div>
                  <li>- Something</li>
                  <li>- Something</li>
                </div>
              </ul>
              <a href="#!">Get Started</a>
            </div>
            <div className="card">
              <h6>Business +</h6>
              <strong>From $4,999</strong>
              <ul className="desc">
                <div>
                  <li>- Something</li>
                  <li>- Something</li>
                </div>
                <div>
                  <li>- Something</li>
                  <li>- Something</li>
                </div>
              </ul>
              <a className="card-btn" href="#!">Get Started</a>
            </div>
          </div>
          <div className="membership">
            <div className="membershiip-text">
              <h5>Membership <small>idea</small></h5>
              <div className="desc">
                <p className="membership-price">$1,999/m</p> <br />
                <p className="membership-desc">Pause or cancel anytime. 
                  Marketing & Teach - all in one support. No brainer anymore</p>
              </div>
              <a href="mailto:kiviwebstudio@gmail.com" className="join-waitlist">Send Feedback</a>
            </div>

            <img src="#" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment
