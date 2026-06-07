import { Link } from "react-router-dom";

function LessonCard({ link, title, image, description }) {
    return (
        <article className="lesson-card">
            <Link to={link}>
                <div className="lesson-image-box">
                    <img src={image} alt={`${title} chess lesson`} />
                </div>

                <h3>{title}</h3>
                <p>{description}</p>
            </Link>
        </article>
    );
}

export default LessonCard;