import { form_function } from '../types/form_function';

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

        <div className='input-container'>
          <label htmlFor='calories'>Calories:</label>
          <input
            type='number'
            name='calories'
            id='calories'
            min='0'
            max='1000'
          />
          <div className='radio'>
            <input type='radio' name='ordering' id='radio-less' value='less' />
            <label htmlFor='radio-less'>&le;</label>
          </div>
          <div className='radio'>
            <input
              type='radio'
              name='ordering'
              id='radio-greater'
              value='greater'
            />
            <label htmlFor='radio-greater'>&ge;</label>
          </div>
        </div>
        <div className='input-container'>
          <label htmlFor='sodium'>Sodium:</label>
          <input type='number' name='sodium' id='sodium' min='0' max='100' />
          <div className='radio'>
            <input type='radio' name='ordering' id='radio-less' value='less' />
            <label htmlFor='radio-less'>&le;</label>
          </div>
          <div className='radio'>
            <input
              type='radio'
              name='ordering'
              id='radio-greater'
              value='greater'
            />
            <label htmlFor='radio-greater'>&ge;</label>
          </div>
        </div>
        <div className='input-container'>
          <label htmlFor='fat'>Fat:</label>
          <input type='number' name='fat' id='fat' min='0' max='100' />
          <div className='radio'>
            <input type='radio' name='ordering' id='radio-less' value='less' />
            <label htmlFor='radio-less'>&le;</label>
          </div>
          <div className='radio'>
            <input
              type='radio'
              name='ordering'
              id='radio-greater'
              value='greater'
            />
            <label htmlFor='radio-greater'>&ge;</label>
          </div>
        </div>
        <div className='input-container'>
          <label htmlFor='sugar'>Sugar:</label>
          <input type='number' name='sugar' id='sugar' min='0' max='100' />
          <div className='radio'>
            <input type='radio' name='ordering' id='radio-less' value='less' />
            <label htmlFor='radio-less'>&le;</label>
          </div>
          <div className='radio'>
            <input
              type='radio'
              name='ordering'
              id='radio-greater'
              value='greater'
            />
            <label htmlFor='radio-greater'>&ge;</label>
          </div>
        </div>
        <div className='input-container'>
          <label htmlFor='cholesterol'>Cholest:</label>
          <input
            type='number'
            name='cholesterol'
            id='cholesterol'
            min='0'
            max='100'
          />
          <div className='radio'>
            <input type='radio' name='ordering' id='radio-less' value='less' />
            <label htmlFor='radio-less'>&le;</label>
          </div>
          <div className='radio'>
            <input
              type='radio'
              name='ordering'
              id='radio-greater'
              value='greater'
            />
            <label htmlFor='radio-greater'>&ge;</label>
          </div>
        </div>
        <div className='input-container'>
          <label htmlFor='protein'>Protein:</label>
          <input type='number' name='protein' id='protein' min='0' max='100' />
          <div className='radio'>
            <input type='radio' name='ordering' id='radio-less' value='less' />
            <label htmlFor='radio-less'>&le;</label>
          </div>
          <div className='radio'>
            <input
              type='radio'
              name='ordering'
              id='radio-greater'
              value='greater'
            />
            <label htmlFor='radio-greater'>&ge;</label>
          </div>
        </div>

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
