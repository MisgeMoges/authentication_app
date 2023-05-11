import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, phone, message });
    // Send form data to backend or perform other actions here
  };

  return (
    <div className="container contact-form">
      <div className="contact-image">
        <img
          src="https://image.ibb.co/kUagtU/rocket_contact.png"
          alt="rocket_contact"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Drop Us a Message</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group my-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group my-3">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Your Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group my-3">
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Your Phone Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group my-3">
              <input
                type="submit"
                name="btnSubmit"
                className="btnContact"
                value="Send Message"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                placeholder="Your Message *"
                style={{ width: "100%", height: "150px" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
