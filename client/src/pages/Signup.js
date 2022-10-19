import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

// import auth

const Signup = () => {
    const [formInput, setFormInput] = useState({ 
        email: '',
        username:'', 
        password:'' 
    });

    const handleChange = (event) => {
        console.log(event.target.value);

        const { name, value } = event.target;

        setFormInput({
            ...formInput,
            [name]: value,
        });
    };

    const handleClickSignupBtn = async (event) => {
        event.preventDefault();

        console.log('clicked signup');
    }

    return (
        <div>
            <form onSubmit={handleClickSignupBtn}>
                {/* <div>
                    <div><Link to="/login" className='tabBtnLink'>Login</Link></div>
                    <div><Link to="/signup" className='tabBtnLink'>Signup</Link></div>
                </div> */}


                {/* <h2>Welcome {formInput.username}</h2> */}
                
                <input 
                    onChange={handleChange}
                    name='username'
                    type='text'
                    placeholder='Username'
                    value={formInput.username}
                />
                <input 
                    onChange={handleChange}
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={formInput.email}
                />
                <input 
                    onChange={handleChange}
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={formInput.password}
                />
                <button type='submit'><span>Signup</span></button>
            </form>
        </div>

    )

};

export default Signup;