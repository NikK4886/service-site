import SectionDivider from "../components/SectionDivider";
import SectionDivider2 from "../components/SectionDivider2";
import LessonCard from "../components/LessonCard";
import FooterCTA from "../components/FooterCTA";
import { lessons } from "../data/lessons";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="page">
            <section className="hero section two-column">
                <div>
                    <h1>Quality Chess Lessons for Anyone and Everyone!</h1>

                    <Link to="/service-site/book_bg" className="btn-primary">
                        Book a Session!
                    </Link>
                </div>

                <img
                    src="/images/chess-board.png"
                    alt="Chess board"
                    className="hero-img"
                />
            </section>

            <SectionDivider />

            <section className="section two-column">
                <div>
                    <h2>Expand your knowledge</h2>

                    <div className="level-text">
                        <h3>For new players</h3>
                        <p>Gain an understanding of the basic rules and fundamental grasp of the game.</p>

                        <h3>For intermediate players</h3>
                        <p>Heighten your game to the next level with an increased comprehension of strategy.</p>

                        <h3>For advanced players</h3>
                        <p>Develop a sharp edge over the competition with a heightened understanding of tactics and game knowledge.</p>
                    </div>
                    
                </div>

                <img src="/images/chess-pieces-icon.png" alt="Chess pieces" />

                <div className="button-row">
                    <Link to="/service-site/about" className="btn-dark">
                        Contact Info
                    </Link>
                    <Link to="/service-site/book_bg" className="btn-primary">
                        Book a Session!
                    </Link>
                </div>

            </section>

            <SectionDivider2 />

            <section className="section">
                <h2 className="center-text">Level Based Lessons</h2>

                <div className="three-column">
                    {lessons.map((lesson) => (
                        <LessonCard 
                            key={lesson.id}
                            link={lesson.link}
                            title={lesson.title}
                            image={lesson.image}
                            description={lesson.description}
                        />
                    ))}
                </div>
            </section> 

            <FooterCTA />
        </div>
    );
}

export default Home;