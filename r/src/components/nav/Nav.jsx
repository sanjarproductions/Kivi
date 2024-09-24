import "./Nav.css"

const Nav = () => {
    
    document.querySelectorAll('a[href^="#join"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    return (
        <>
            <div className="nav">
                <div className="container">
                    <div className="flex">
                        <p className="logo">Kivi Studio</p>
                        <a href="#join" className="contact-nav">Contact</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Nav
