import React, { Component } from 'react';
import Form from '../components/Form';

export default class FormContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            invalidChars: false,
            charLimit: 500,
            count: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.message.length === 0){
            alert('Don\'t forget to type a message!');
            if (this.state.message.length === 0){ document.querySelector('#Message').classList.add('Invalid-field');}
        }
        if (this.state.firstName.length === 0 || this.state.lastName.length === 0 || this.state.email.length === 0 || this.state.invalidChars){
            alert('Please fill out all of the fields!');
            if (this.state.firstName.length === 0){ document.querySelector('.First-name').classList.add('Invalid-field');}
            if (this.state.lastName.length === 0){ document.querySelector('.Last-name').classList.add('Invalid-field');}
            if (this.state.email.length === 0){ document.querySelector('.Email').classList.add('Invalid-field');}
        }
        if (document.querySelectorAll('.Invalid-field').length === 0 && this.state.message.length > 0) {
            document.querySelector('.Form').classList.add('Contact-send-animation');
            document.querySelector('.Checkmark-container').style.zIndex = 100;
            document.querySelector('.Checkmark-message').textContent = 'Message sent.';
            setTimeout(() =>{ 
                document.querySelector('.Checkmark-message').classList.add('animation');
                }, 300);
            document.querySelector('.Checkmark').classList.add('animation');
            document.querySelector('.Checkmark-circle').classList.add('animation');
            document.querySelector('.Checkmark-check').classList.add('animation');
        }
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        const count = e.target.value.length;
    
        this.setState({ [name]: value.slice(0, 128) }, this.validate(name, count, e));
        if (name === 'message' ) this.setState({ count: count});
    }

    validate(name, count, e) {
        const messageField = document.getElementById('Message');
        const countText = document.getElementById('Count');

        if (name !== 'message' && count === 0) {
            document.querySelector(`input[name=${name}]`).classList.add('Invalid-field');
        }
        if (name !== 'message' && !this.state.invalidChars && count > 0) {
            document.querySelector(`input[name=${name}]`).classList.remove('Invalid-field');
        }
        if (name === 'email') { 
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)){
                document.querySelector(`input[name=${name}]`).classList.add('Invalid-field');
                this.setState({ invalidChars: true});
            } else {
                document.querySelector(`input[name=${name}]`).classList.remove('Invalid-field');
                this.setState({ invalidChars: false});
            }
        }
        if (name === 'firstName' || name === 'lastName') {
            if (/\W+|\d+|\_/gm.test(e.target.value)){
                    document.querySelector(`input[name=${name}]`).classList.add('Invalid-field');
                    this.setState({ invalidChars: true});
            } else { 
                document.querySelector(`input[name=${name}]`).classList.remove('Invalid-field');
                this.setState({ invalidChars: false});}
        }
        if (name === 'message') {
            if (this.state.message.length < this.state.charLimit){
                countText.style.color = 'black'
            }
            if (e.target.value.length >= this.state.charLimit){
                messageField.value = messageField.value.slice(0, this.state.charLimit);
                countText.style.color = 'red';
            }
            if (this.state.message.length > 0){
                document.querySelector('#Message').classList.remove('Invalid-field');
            }
            if (e.target.value.length === 0){
                document.querySelector('#Message').classList.add('Invalid-field');
            }
        }
        
    }

    render(){
        return (
            <Form 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                email={this.state.email}
                message={this.state.message}
                count={this.state.count}
                charLimit={this.state.charLimit}
            />
        
        )
    }
};
