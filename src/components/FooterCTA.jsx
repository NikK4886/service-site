import { Link } from "react-router-dom";
import SectionDivider from "./SectionDivider";
import SectionDivider2 from "./SectionDivider2";

function FooterCTA() {
    return (
        <>
            <SectionDivider />

            <section className="footer-cta">
                <Link to="/book_bg" className="footer-book-btn">
                    Book a Session!
                </Link>

            <img 
                src="/images/chess-footer.png"
                alt="Blue chess pieces"
                className="footer-chess-img"
                />
            </section>

            <SectionDivider2 />
        </>
    );
}

export default FooterCTA;