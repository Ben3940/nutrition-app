// import React from 'react';

export function Header() {
  const handle_form = (e) => {
    e.preventDefault();

    const formHTML: HTMLFormElement = document.getElementById('search-form');
    const form: FormData = new FormData(formHTML);
    const name: FormDataEntryValue | null = form.get('name');

    if (name === 'all') {
      fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query ExampleQuery {
          foods {
            No,
            name
          }
        }`,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data.data));
    }
  };

  const get_all = (e) => {
    e.preventDefault();

    fetch('http://localhost:4000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query ExampleQuery {
          foods {
            No
            name
            serving_size
          }
        }`,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.data));
  };
  return (
    <header>
      <h1>Nu-TRIS</h1>
      <form className='form-container' onSubmit={handle_form} id='search-form'>
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
      <form className='form-container' onSubmit={get_all} id='all-items-form'>
        <button className='submit-button' type='submit'>
          Get All Items
        </button>
      </form>
    </header>
  );
}
