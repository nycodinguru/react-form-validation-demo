import React from 'react';

const Form = props => {
    return (
        <div id="Contact" className="Contact-form-container">
            <div className="Contact-form"> 
            <h2>Contact</h2>
            <div className="Checkmark-container">
                <svg className="Checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="Checkmark-circle" cx="26" cy="26" r="25" fill="none"/><path className="Checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                <h3 className="Checkmark-message"></h3>
                </div>
                <form id="Contact-form" className="Form" action="" method="Post">
                    <div className="Name-fields">
                        <input className="First-name" name="firstName" type="text" placeholder="First Name" onChange={props.handleChange} value={props.firstName}></input>
                        <input className="Last-name" name="lastName" type="text" placeholder="Last Name" onChange={props.handleChange} value={props.lastName}></input>
                    </div>
                <div className="Other-fields">
                        <input className="Email" name="email" type="email" placeholder="Email" onChange={props.handleChange} value={props.email}></input>
                        <div id="Email"></div>
                       
                        <textarea id="Message" name="message" placeholder="Type your message here..." onChange={props.handleChange} value={props.message}></textarea>
                       
                        <div className="Count">
                            <span id="Count" >{props.count}</span>/{props.charLimit}
                        </div>
                </div>
                    <div className="Button-parent">
                        <button className="Button" type="submit" onClick={ (e) => props.handleSubmit(e)}>Send</button>
                    </div>       
                </form>
            </div> 
        </div>
        
    )
    
}

export default Form;