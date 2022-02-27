import React, { useState } from 'react';
import './styles/Form/form.scss';

const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='form-container'>
            <form className='form'>
                <div className='form-intro'>form intro</div>

                <div className='row'>
                    <label className='label'>
                        First Name
                    </label>
                    <input onChange={(e) => setFirstName(e.target.value)}/>
                </div>

                <div className='row'>
                    <label className='label'>
                        Email Address
                    </label>
                    <input onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className='row'>
                    <label className='label'>
                        Password
                    </label>
                    <input onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button>button</button>
            </form>
        </div>
    );
};

export default Form;