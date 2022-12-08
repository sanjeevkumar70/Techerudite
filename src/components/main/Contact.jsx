import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="contact">
          <p className="cont-head1"> GET IN TOUCH</p>
          <h2 className="cont-head2">Contact Us</h2>
          <form>
            <ul class="form-style-1">
              <li>
                <input
                  type="text"
                  name="field1"
                  class="field-divided"
                  placeholder="Name*"
                />
                <input
                  type="text"
                  name="field2"
                  class="field-divided"
                  placeholder="Email*"
                />
              </li>
              <li>
                <input
                  type="email"
                  name="field3"
                  class="field-long"
                  placeholder="Subject*"
                />
              </li>

              <li>
                <textarea
                  name="field3"
                  id="field3"
                  class="field-long field-textarea"
                  placeholder="Your Message*"
                ></textarea>
              </li>
              <li>
                <input type="submit" value="SUBMIT" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
