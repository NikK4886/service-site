import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="navbar">
            <Link to="/king-maker-site/" className="navbar-logo">
                <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="King Maker logo" />
                <span> King Maker </span>
            </Link>

            <nav className="navbar-links">
                <Link to="/king-maker-site/">Home</Link>
                <Link to="/king-maker-site/about">About Us</Link>
                <Link to="/king-maker-site/offers">Offers</Link>
                <Link to="/king-maker-site/book_bg" className="nav-book-btn">
                    Book a Session!
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;