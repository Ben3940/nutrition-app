// import React from 'react';

export function Header() {
  return (
    <header>
      <h1>Nu-TRIS</h1>
      <form action='' className='form-container'>
        <label htmlFor='name'>Name:</label>
        <input type='text' name='name' id='name' />

        <label htmlFor='calories'>Calories:</label>
        <input type='number' name='calories' id='calories' />

        <label htmlFor='fat'>Fat:</label>
        <input type='number' name='fat' id='fat' />

        <label htmlFor='protien'>Protien:</label>
        <input type='number' name='protien' id='protien' />

        <label htmlFor='sodium'>Sodium:</label>
        <input type='number' name='sodium' id='sodium' />

        <label htmlFor='sugar'>Sugar:</label>
        <input type='number' name='sugar' id='sugar' />
      </form>
    </header>
  );
}
