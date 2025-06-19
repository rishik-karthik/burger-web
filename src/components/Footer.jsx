import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <a href="/" className="logo">
            BurGeR.<i className="fa-solid fa-g"></i><i className="fa-solid fa-0"></i>! <i className="fab fa-typo3"></i>
            </a>
            <h1>Bite into Flavor!</h1>
            <form action="" className='foot-sign'>
                <input type="Email" placeholder="me@example.com" className="mail" />
                <button type="submit" className="sign-btn">Sign In</button>
            </form>
            <p className='new-user'>new User? <a href="/signUp" className='sign-link'>Click here</a></p>
            <div className="foot-msg">
                <h2>HOURS</h2>
                <p>Mon: CLOSED
                    <br />
                    Tue to Fri: 11 AM–10 PM
                    <br />
                    Sat to Sun: 12 PM–7 PM
                    <br />
                </p>
            </div>
            <div className="foot-msg">
                <h2>FIND US</h2>
                <p>123 Demo St, New York, NY
                    <br />
                    (555) 555-5555
                    <br />
                    email@example.com
                </p>
            </div>
            <div className="social-icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-x-twitter"></i>
            </div>
        </footer>
    )
}