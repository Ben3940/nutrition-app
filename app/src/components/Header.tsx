import { form_function } from '../types/form_function';
import { Nutrition_Field } from './Nutrition_Field';

// import React from 'react';
{
  /* <div className='input-container'>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' id='name' />
        </div> */
}

interface header {
  names: string[];
  handle_form: form_function;
  get_all: form_function;
}

export function Header({ names, handle_form, get_all }: header) {
  return (
    <header>
      <h1>Nu-TRIS</h1>
      <form className='form-container' onSubmit={handle_form} id='search-form'>
        <div className='input-container'>
          <label htmlFor='no'>No:</label>
          <input type='number' name='no' id='no' min='0' max='24' />
        </div>
        <div className='input-container'>
          <label htmlFor='name'>Name:</label>
          <select name='name' id='name'>
            <option value={''}></option>
            {names.map((name: string) => {
              return (
                <option key={name} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
        <Nutrition_Field name='Calories' unit='cals' />

        <button className='submit-button' type='submit'>
          Search
        </button>
      </form>
      <form className='form-container' onSubmit={get_all} id='all-items-form'>
        <button className='submit-button' type='submit'>
          Get All Items
        </button>
      </form>
    </header>
  );
}
