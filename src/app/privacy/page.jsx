import React from 'react'
import "./privacy.css"

const Privacy = () => {
  return (
    <>
      <div className="privacy container">
        <h1>Privacy Policy</h1>
        <div className="privacy-desc">
          <b>Effective Date: October 3, 2024</b>
          <p>At Kivistudio.uz, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, including our website and web app development services.</p>
        </div>
        <div className="content">

          <div>
            <span>1. Information We Collect</span>
            <p>
              We may collect personal information, including but not limited to:

              Name
              Email address
              Payment information (handled securely via Stripe, bank wire, or Payoneer)
              IP address
              Cookies and usage data
            </p>
          </div>

          <div>
            <span> 2. How We Use Your Information</span> <br />
            We use the information we collect to:

            Provide, operate, and maintain our services
            Process payments securely via Stripe, bank wire, or Payoneer
            Improve our services and website
            Communicate with you regarding updates, marketing, or technical support
          </div>

          <div>
            <span>3. Sharing Your Information</span>
            <p>
              We do not share your personal information with third parties except in the following circumstances:

              With third-party service providers like Stripe, Payoneer, or banks to facilitate transactions
              If required by law or to protect our rights
            </p>
          </div>

          <div>
            <span>4. Cookies</span>
            <p>Our website may use cookies to enhance user experience. You may choose to disable cookies through your browser settings, but doing so may affect the functionality of our site.</p>
          </div>

          <div>
            <span>5. Security</span>
            <p>
              We use secure methods to handle your personal information and payments, including SSL encryption and secure payment gateways like Stripe and Payoneer.
            </p>
          </div>

          <div>
            <span>6. Your Rights</span>
            <p>
              You have the right to:
              Access, update, or delete your personal information
              Opt out of marketing communications at any time</p>
          </div>

          <div>
            <span>7. Contact Us</span>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us at:
              Email: <a href="mailto:kiviwebstudio@gmail.com">kiviwebstudio@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Privacy
