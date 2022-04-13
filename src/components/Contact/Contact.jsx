import React from "react";
import "./Contact.css";
function Contact() {
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
            <form action="#" onsubmit="myFunction()">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="input-box message-box">
                <textarea placeholder="Your message here" required></textarea>
              </div>
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
