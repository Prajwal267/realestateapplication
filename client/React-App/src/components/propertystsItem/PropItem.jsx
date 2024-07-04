import React from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';

const PropItem = (props) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/properties/${props.id}`);
      props.onDelete(props.id);
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  const handleInterested = async () => {
    try {
      const templateParams = {
        user_email: 'user@example.com', // replace with the recipient's email address
        property_title: props.title,
        property_description: props.description,
      };

      await emailjs.send(
        'your_service_id', // replace with your EmailJS service ID
        'your_template_id', // replace with your EmailJS template ID
        templateParams,
        'your_user_id' // replace with your EmailJS user ID
      );

      alert('Email sent successfully');
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-2">
            <img src={props.img} className="img-fluid rounded-start" alt="property photo" />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">
                {props.description}
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center col-md-3">
            <div className="row">
              <button className="btn btn-primary m-2" onClick={handleDelete}>Not interested</button>
              <button className="btn btn-primary m-2" onClick={handleInterested}>Interested</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropItem;
