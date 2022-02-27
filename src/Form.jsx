import React, { useState } from 'react';
import './styles/Form/form.scss';

const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const formValidation = () => {
        console.log('formvalidation function trigger')
        let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        let mailFormat = /^\S+@\S+\.\S+$/;
        let numbers = /[0-9]/;
        
        // validates first name (checks for special letters)
        if (specialChars.test(firstName)) {
            setValidFirstName(true);
        }

        // validates email
        if (!email.match(mailFormat)) {
            setValidEmail(true);
        }

        // validates password
        // should contain at least 1 number, 1 special letter, and 8 ~ 16 characters
        if (password.search(numbers) < 0 || password.search(specialChars) < 0 || 8 >= password.length >= 16) {
            setValidPassword(true);
        }

    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log('clicked')
        formValidation()
    }

    const removeFirstNameWarning = (e) => {
        console.log(e)

    }

    return (
        <div className='form-container'>
            <form className='form'>

                <div className='form-intro'>
                    <div className='title'>
                        <div className='title-lets'>Let's</div>
                        <div className='title-signup'>Sign Up</div>
                    </div>
                    <div className='instruction'>Use the form below to sign up for this super awesome service. You're only a few steps away!</div>
                </div>

                <div className='row'>
                    <label className={!validFirstName ? 'label' : 'label-warning'}>
                        First Name
                    </label>
                    <input className={!validFirstName ? 'form-input' : 'form-input-warning'} onChange={(e) => {
                        setFirstName(e.target.value);
                        setValidFirstName(false);
                        }} />
                    {!validFirstName
                        ? ''
                        : <div className='invalid-warning'>Please enter your name.</div>
                    }
                </div>

                <div className='row'>
                    <label className={!validEmail ? 'label' : 'label-warning'}>
                        Email Address
                    </label>
                    <input className={!validEmail ? 'form-input' : 'form-input-warning'} onChange={(e) => {
                        setEmail(e.target.value);
                        setValidEmail(false);
                        }} />
                    {!validEmail
                        ? ''
                        : <div className='invalid-warning'>Please enter a valid Email.</div>
                    }
                </div>

                <div className='row'>
                    <label className={!validPassword ? 'label' : 'label-warning'}>
                        Password
                    </label>
                    <input className={!validPassword ? 'form-input' : 'form-input-warning'} type='password' onChange={(e) => {
                        setPassword(e.target.value);
                        setValidPassword(false);
                        }} />
                    {!validPassword
                        ? ''
                        : <div className='invalid-warning'>Password should contain at least one number and one special letter.</div>
                    }
                </div>
                <button type='submit' className='sign-up-button' disabled={firstName === '' || email === '' || password === ''} onClick={(e) => submitForm(e)}>Sign Up</button>
            </form>
        </div>
    );
};

export default Form;