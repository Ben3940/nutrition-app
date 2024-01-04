// import React from 'react';

export function Header() {
  const handle_form = (e) => {
    e.preventDefault();
    
  };
  return (
    <header>
      <h1>Nu-TRIS</h1>
      <form className='form-container' onSubmit={handle_form}>
        <div className='input-container'>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' id='name' />
        </div>

        <div className='input-container'>
          <label htmlFor='calories'>Calories:</label>
          <input type='number' name='calories' id='calories' />
        </div>

        <div className='input-container'>
          <label htmlFor='fat'>Fat:</label>
          <input type='number' name='fat' id='fat' />
        </div>

        <div className='input-container'>
          <label htmlFor='protien'>Protien:</label>
          <input type='number' name='protien' id='protien' />
        </div>

        <div className='input-container'>
          <label htmlFor='sodium'>Sodium:</label>
          <input type='number' name='sodium' id='sodium' />
        </div>

        <div className='input-container'>
          <label htmlFor='sugar'>Sugar:</label>
          <input type='number' name='sugar' id='sugar' />
        </div>
        <button className='submit-button' type='submit'>
          Search
        </button>
      </form>
    </header>
  );
}
