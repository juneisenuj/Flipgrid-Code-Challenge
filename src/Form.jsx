import React, { useState } from 'react';
import './styles/Form/form.scss';

const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                    <label className='label'>
                        First Name
                    </label>
                    <input onChange={(e) => setFirstName(e.target.value)} />
                </div>

                <div className='row'>
                    <label className='label'>
                        Email Address
                    </label>
                    <input onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='row'>
                    <label className='label'>
                        Password
                    </label>
                    <input onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit' disabled={firstName === '' || email === '' || password === ''}>button</button>
            </form>
        </div>
    );
};

export default Form;