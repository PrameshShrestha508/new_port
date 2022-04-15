import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const initialValues = { name: "", email: "", textarea: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors).length === 0) {
      setFormValues(initialValues);
    }
  };
  //   if(Object.keys(formErrors).length===0 && isSubmit){
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    if (!values.textarea) {
      errors.textarea = "textarea is required";
    }
    return errors;
  };

  return (
    <>
      <section className="container" id="contacts">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <div className="topic">Address</div>
              <div className="text-two">Butwal</div>
            </div>
            <div className="phone details">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+0098 9893 5647</div>
              <div className="text-two">+0096 3434 5678</div>
            </div>
            <div className="email details">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              <div className="topic">Email</div>
              <div className="text-one">prameshshrestha455@gmail.com</div>
              <div className="text-two">prameshshrestha477@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send me a message</div>
            <p>
              If you have any work from me, you can send me message from here.
              It's my pleasure to help you.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={(e) => handleChange(e, "name")}
                  value={formValues.name}
                />
              </div>
              {formErrors.name}
              <div className="input-box">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => handleChange(e, "email")}
                  value={formValues.email}
                />
              </div>
              {formErrors.email}
              <div className="input-box message-box">
                <textarea
                  placeholder="Your message here"
                  onChange={(e) => handleChange(e, "textarea")}
                  name="textarea"
                  value={formValues.textarea}
                ></textarea>
              </div>
              {formErrors.textarea}
              <div className="button1">
                <input type="submit" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
