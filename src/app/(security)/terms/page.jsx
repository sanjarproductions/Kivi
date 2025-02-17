import React from 'react'
import "./terms.css"

const Terms = () => {
  return (
    <>
      <nav>
        <div className="container">
          <a href='https://calendly.com/kivistudioweb/demo' className='btn' target='_blank'>Get in Touch</a>
          <button>
            <img src="/img/burger-menu.svg" alt="Burger Menu" width={24} height={8} />
          </button>
        </div>
      </nav>
      <main>
        <div className="container">
          <h1>Terms and Conditions</h1>
          <div className="desc">
            <strong>Effective Date: October 3, 2024</strong>
            <p>These Terms and Conditions (&quot;Agreement&quot;) govern your use of the services provided by Kivistudio.uz, including website and web app development. By using our services, you agree to these terms.</p>
          </div>

          <div>
            <b>1. Services</b>
            <p>Kivistudio.uz provides custom website and web app development services. The scope of services will be detailed in project-specific agreements between us and the client.</p>
          </div>
          <div>
            <b>2. Payments</b>
            <p> All payments for services rendered are processed securely through Stripe, bank wire transactions, or Payoneer. Payment terms will be outlined in the specific service contract agreed upon with each client.</p>
          </div>
          <div>
            <b>3. Client Responsibilities</b>
            <p>Clients agree to provide accurate and necessary information for project completion and are responsible for reviewing the work delivered. Any additional work outside the initial scope will incur additional charges.</p>
          </div>
          <div>
            <b>4. Intellectual Property</b>
            <p>All intellectual property developed during the project, including code and designs, will be transferred to the client upon final payment. Kivistudio.uz reserves the right to use generic code elements in future projects.</p>
          </div>
          <div>
            <b>5. Limitations of Liability</b>
            <p>Kivistudio.uz is not responsible for any damages arising from the use of our services or website. Our liability is limited to the amount paid for the service.</p>
          </div>
          <div>
            <b>6. Termination</b>
            <p>Either party may terminate the agreement if the other party fails to meet its obligations. Upon termination, all outstanding payments must be settled </p>
          </div>
          <div>
            <b>7. Governing Law</b>
            <p> This Agreement is governed by applicable laws and regulations.</p>
          </div>
          <div>
            <b>8. Contact Us</b>
            <p>For any questions regarding these Terms and Conditions, please contact us at:
              Email: <a href="mailto:kiviwebstudio@gmail.com">kiviwebstudio@gmail.com</a>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Terms
