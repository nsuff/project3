import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

// import auth

// const Login = (props) => {
//     const [name, setName] = useState('');

//     const handleChange = (event) => {
//         console.log(event.target.value);

//         setName(event.target.value);
//     };

//     const handleClickLoginBtn = async (event) => {
//         event.preventDefault();
//     }

//     return (
//         <div>
//             <h2>Hello {name}</h2>
//             <form className='form' onSubmit={handleClickLoginBtn}>
//                 <input 
//                     onChange={handleChange}
//                     type='text'
//                     placeholder='Username'
//                     value={name}
//                 />
//                 <input 
//                     type='password'
//                     placeholder='Password'
//                 />
//                 <button type='submit'>Login</button>
//             </form>
//         </div>

//     )
// }

// export default Login;




const Login = (props) => {
    const [formInput, setFormInput] = useState({ 
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

    const handleClickLoginBtn = async (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <h2>Hello {formInput.username}</h2>
            <form className='form' onSubmit={handleClickLoginBtn}>
                <input 
                    onChange={handleChange}
                    name='username'
                    type='text'
                    placeholder='Username'
                    value={formInput.username}
                />
                <input 
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={formInput.password}
                />
                <button type='submit'>Login</button>
            </form>
        </div>

    )
}

export default Login;