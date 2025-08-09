import './Content.css'
import burgerImg from '../assets/Burger-content.jpg'

export default function Content() {
    return (
        <div className="content">
            <div className="msg-text">
                <h1 className="welcome-mgs">Foodies, IT’S TIME <br />TO REJOICE.</h1>
                <p className="about-msg">We’re BG<sup>&reg;</sup>: the burger
                    joint of dreams. Discover the creative sandwich items that sets our menu apart.</p>
            </div>
            <div className="display">
                <div className="display-msg">
                    <h2>HOURS</h2>
                    <p>Mon: CLOSED
                        <br />
                        Tue to Fri: 11 AM–10 PM
                        <br />
                        Sat to Sun: 12 PM–7 PM
                        <br />
                    </p>
                </div>
                <img src={burgerImg} alt="bgr" />
                <div className="go-menu">SEE OUR &nbsp; <a href="/Menu"> MENU</a></div>
                <div className="display-msg">
                    <h2>FIND US</h2>
                    <p>123 Demo St, New York, NY
                        <br />
                        (555) 555-5555
                        <br />
                        email@example.com
                    </p>
                </div>
            </div>
        </div>
    )
}