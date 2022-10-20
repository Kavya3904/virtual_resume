import React ,{ useRef } from "react";

import "./Modal.css";
import emailjs from '@emailjs/browser'
import ReactDOM from "react-dom";
export default function Modal({ open, children, onclose }) {
  const form = useRef();
  if (!open) return null;

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sended sucessfully")

          
        },
        (error) => {
          console.log(error.text);
          alert("OOPS! Something Went Wrong")
        }
      );
  };

  return ReactDOM.createPortal(
    <div>
      <div className="model-overlay-style" />
      <div className="modal-style">
        <h1> Email Me </h1>
        {/* <form className='form-style'>
<label>Your name</label>
<input   type="text" placeholder="display name" />
<label>Your Email</label>
          <input  type="email" placeholder="email" />
          <label>Message</label>
          <textarea></textarea>
    <button className='modal-btn' onClick={onclose}> close</button>
      {children}
   
</form> */}
        <form ref={form} onSubmit={sendEmail} className="form-style">
          <label>Name</label>
          <input required type="text" name="user_name" />
          <label>Email</label>
          <input required  type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input className="modal-btn-submit" type="submit" value="Send" />
          <button className="modal-btn" onClick={onclose}>
            {" "}
            close
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
