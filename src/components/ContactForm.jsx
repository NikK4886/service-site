function ContactForm() {
    return (
        <from className="contact-form">
            <div className="form-row">
                <label>
                    First name
                    <input type="text" placeholder="Your first name" />
                </label>

                <label>
                    Last name
                    <input type="text" placeholder="Your last name" />
                </label>
            </div>

            <label>
                Email address
                <input type="email" placeholder="namelearnschess@gmail.com" />
            </label>

            <label>
                Your message
                <textarea placeholder="Enter your question or message"></textarea>
            </label>

            <button type="submit" className="btn-dark">
                Submit
            </button>
        </from>
    );
}

export default ContactForm;