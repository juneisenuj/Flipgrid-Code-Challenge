import React from 'react';
import './styles/Comfirmation/comfirmation.scss';

const Comfirmation = ( {firstName, email }) => {
    return (
        <div className='comfirmation-container'>
            <div className='greeting'>
                <div className='row'>
                    <div className='title-welcome'>Welcome,</div>
                    <div className='title-firstname'>{firstName}!</div>
                </div>
                <div className='row'>
                    <div>You have been registered for this awesome service. Please check your email listed below for instructions.</div>
                </div>
                <div className='row'>
                    <div className='comfirmation-email'>{email}</div>
                </div>
                <button className='sign-in-button'>Sign In</button>
            </div>
            
        </div>
    );
};

export default Comfirmation;