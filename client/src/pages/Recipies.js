import React, { useState } from 'react';
import { useMutation } from '@apollo/client';



const Recipies = (props) => {


    return (
        <div className='text-white'>
            <button type='submit'>New Recipie</button>
            <h2>Recipies will go here</h2>
            <li style={{border: '1px solid red'}}>
                <h3>Recipie Name</h3>
                <p3>Ingredients/Description</p3>
                <button type='submit'>Edit</button>
            </li>
            <li style={{border: '1px solid red'}}>
                <h3>Recipie Name</h3>
                <p3>Ingredients/Description</p3>
                <button type='submit'>Edit</button>
            </li>
            <li style={{border: '1px solid red'}}>
                <h3>Recipie Name</h3>
                <p3>Ingredients/Description</p3>
                <button type='submit'>Edit</button>
            </li>
            <li style={{border: '1px solid red'}}>
                <h3>Recipie Name</h3>
                <p3>Ingredients/Description</p3>
                <button type='submit'>Edit</button>
            </li>
            <li style={{border: '1px solid red'}}>
                <h3>Recipie Name</h3>
                <p3>Ingredients/Description</p3>
                <button type='submit'>Edit</button>
            </li>
            <li style={{border: '1px solid red'}}>
                <h3>Recipie Name</h3>
                <p3>Ingredients/Description</p3>
                <button type='submit'>Edit</button>
            </li>
            <li style={{border: '1px solid red'}}>
                <h3>Recipie Name</h3>
                <p3>Ingredients/Description</p3>
                <button type='submit'>Edit</button>
            </li>
        </div>

    )
}

export default Recipies;