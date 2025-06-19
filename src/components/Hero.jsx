import './Hero.css';

export default function Hero() {
    return (
        <main>
            <div className="hero">
                <h1 className="hero-line">BITE ME!</h1>
                <p className='hero-msg'>Start your BG<sup>&reg;</sup> Order</p>
                <button className="hero-btn"> <a href="/reservations" className='hero-btn-a'>Book A Table</a></button>
                <button className="hero-btn btn2">Order Pick-Up</button>
            </div>
        </main>
    );
}
