import React from 'react';
import './Contact.css';

const contact = (props)=>{
    return (
        <section id="contact-section"className="se1">

        <div className="row2">
        <div className="column2">
            <h2>Contact</h2>
            <h3 style={{fontFamily:"bold"}}>Delhi Office</h3>
            <p> Call : +91 9810651005</p>
            <p> Email: atulklohiya@gmail.com</p>
            <p> # 105, 1st Floor,</p>
            <p> Virat Bhawan Dr. Mukherjee Nagar,</p>
            <p> Delhi 110009</p>
        </div>
        <div className="column2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55988.41900720476!2d77.215991!3d28.711291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7bb99450d402c9db!2sChhatrasal%20Stadium!5e0!3m2!1sen!2sus!4v1592996611378!5m2!1sen!2sus" ></iframe>
        </div>
        </div>
        </section>

    );
}

export default contact;