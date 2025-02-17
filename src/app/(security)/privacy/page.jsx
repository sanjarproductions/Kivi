import React from 'react'
import "./privacy.css"

const Privacy = () => {
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
          <h1>Privacy Policy</h1>
          <div className="desc">

            <strong>Effective Date: October 3, 2024</strong>

            <p>At Kivistudio.uz, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, including our website and web app development services.</p>
          </div>

          <div>
            <b>1. Information We Collect</b>
            <p> We may collect personal information, including but not limited to:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Payment information (handled securely via Stripe, bank wire, or Payoneer)</li>
              <li>Cookies and usage data</li>
            </ul>
          </div>
          <div>
            <b>2. How We Use Your Information</b>
            <p> We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain our services</li>
              <li>Process payments securely via Stripe, bank wire, or Payoneer</li>
              <li>Improve our services and website</li>
              <li>Communicate with you regarding updates, marketing, or technical support</li>
            </ul>
          </div>
          <div>
            <b>3. Sharing Your Information</b>
            <p>We do not share your personal information with third parties except in the following circumstances:</p>
            <ul>
              <li>With third-party service providers like Stripe, Payoneer, or banks to facilitate transactions</li>
              <li>If required by law or to protect our rights</li>
            </ul>
          </div>
          <div>
            <b>4. Cookies</b>
            <p>Our website may use cookies to enhance user experience. You may choose to disable cookies through your browser settings, but doing so may affect the functionality of our site.</p>
          </div>
          <div>
            <b>5. Security</b>
            <p>We use secure methods to handle your personal information and payments, including SSL encryption and secure payment gateways like Stripe and Payoneer.</p>
          </div>
          <div>
            <b>6. Your Rights</b>
            <p>You have the right to:</p>
            <ul>
              <li>Access, update, or delete your personal information</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
          </div>
          <div>
            <b>7. Contact Us</b>
            <p>If you have any questions regarding this Privacy Policy, please contact us at:</p>
            <ul>
              <li>Email: <a href="mailto:kiviwebstudio@gmail.com">kiviwebstudio@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

export default Privacy
