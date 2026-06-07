import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="navbar">
            <Link to="/" className="navbar-logo">
                <img src="/images/logo.png" alt="King Maker logo" />
                <span> King Maker </span>
            </Link>

            <nav className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/offers">Offers</Link>
                <Link to="/book_bg" className="nav-book-btn">
                    Book a Session!
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;