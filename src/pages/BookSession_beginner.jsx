import ContactForm from "../components/ContactForm";
import CalendarBox from "../components/CalendarBox";
import SectionDivider from "../components/SectionDivider";
import SectionDivider2 from "../components/SectionDivider2";
import FooterCTA from "../components/FooterCTA";
import { Link } from "react-router-dom";

function BookSession_beginner() {
    return (
        <div className="page">
            <section className="section two-column">
                <div>
                    <h1>Than you for selecting our beginner level class!</h1>
                    <h2>Your chess journey starts here</h2>
                </div>

                <img src="/images/user-icon.png" alt="user icon" />
            </section>

            <SectionDivider />

            <section className="section lesson-confirmation">
                <div className="lesson-icon-large">
                    <img src="/images/pawn-icon.png" alt="Pawn icon" />
                </div>

                <p>
                    Our beginner lessons are perfect for all ages! We will strive to help
                    build a fundamental skill set for you to start your chess journey.
                </p>

                <h2>Are you ready? Book an appointment now!</h2>
            </section>

            <SectionDivider2 />

            <section className="section book-section">
                <h2>Select a date below to reserve a spot</h2>

                <div className="two-column">
                    <ContactForm />
                    <CalendarBox />
                </div>
            </section>

            <section className="section two-column">
                <img src="/images/chess-questions.png" alt="Chess questions" />

                <div>
                    <h2>Have questions or concerns?</h2>
                    <p>Feel free to contact us for a consultation free of charge</p>
                    <Link to="/service-site/about" className="btn-dark">
                        Contact Info
                    </Link>
                </div>
            </section>

            <FooterCTA />
        </div>
    );
}

export default BookSession_beginner;