// import React from 'react';
{
  /* <div className='input-container'>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' id='name' />
        </div> */
}

export function Header({ names, handle_form, get_all }) {
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
                  {name.toUpperCase()}
                </option>
              );
            })}
          </select>
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
