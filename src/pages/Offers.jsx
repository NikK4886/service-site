import LessonCard from "../components/LessonCard";
import FooterCTA from "../components/FooterCTA";
import { lessons } from "../data/lessons";
import { Link } from "react-router-dom";

function Offers() {
    return (
        <div className="page">
            <section className="section">
                <h1 className="center-text">Choose Your Chess Lesson Level</h1>

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

export default Offers;