import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-text">
            <p className="footer-logo">Kivi Studio</p>
            <div className="flex">
              <a className="footer-link" href="mailto:kiviwebstudio@gmail.com">Email</a>
              <a className="footer-link" href="#">Free Product</a>
            </div>
            <div className="flex">
              <div>
                <a className="footer-link" href="https://calendly.com/sanjar-coder/discovery-call">Calendly</a>
                <a className="footer-link" href="https://www.youtube.com/@kivistudio_">YouTube</a>
              </div>
              <a className="footer-link" href="#">Partner Programm</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
