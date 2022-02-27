import React, { useState } from 'react';
import './styles/Form/form.scss';

const Form = () => {
    return (
        <div className='form-container'>
            <form>
                <div>form intro</div>

                <div>
                    <label>
                        First Name
                    </label>
                    <input />
                </div>

                <div>
                    <label>
                        Email Address
                    </label>
                    <input />
                </div>

                <div>
                    <label>
                        Password
                    </label>
                    <input />
                </div>
                <button>button</button>
            </form>
        </div>
    );
};

export default Form;