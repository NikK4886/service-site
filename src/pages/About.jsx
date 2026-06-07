import ContactForm from "../components/ContactForm";
import SectionDivider from "../components/SectionDivider";
import FooterCTA from "../components/FooterCTA";

function About() {
    return (
        <div className="page">
            <section className="section two-column">
                <div>
                    <h1>About King Maker</h1>

                    <p>
                        King Maker is a beginner-friendly chess tutoring site made for
                        students who want to learn chess without feeling overwhelmed.
                        Lessons are designed to explain the basics clearly, using simple
                        steps, visual examples, and easy practice activities.
                    </p>

                    <p>
                        Before booking a lesson, students can explore what they will learn
                        and choose the level that matches their current skill level.
                    </p>

                    <h2>Contact me</h2>
                    <ContactForm />
                </div>

                <div>
                    <img src={`${import.meta.env.BASE_URL}images/king-icon.png`} alt="King Maker mascot" />
                    <img src={`${import.meta.env.BASE_URL}images/chess-board2.png`} alt="Chess board" />
                </div>
            </section>

            <FooterCTA />
        </div>
    );
}

export default About;