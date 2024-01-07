import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { event } from './types/event';
import { form_function } from './types/form_function';
// import { data } from './data/nutrition';

function App() {
  const handle_form: form_function = (e: event) => {
    e.preventDefault();

    const formHTML: HTMLFormElement = document.getElementById('search-form');
    const form: FormData = new FormData(formHTML);
    const name: FormDataEntryValue | null = form.get('name');
    const no: FormDataEntryValue | null = form.get('no');

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
            name,
            nutrition{
              calories,
              sugars
            }
          }
        }`,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data.data));
    }
    if (no) {
      console.log('requesting by name');
      fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          query: `query ExampleQuery {
            food_id(table_name: "food", No: "${no}") {
              No,
              name,
              nutrition {
                calories
                sodium
              }
            }
          }`,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data.data));
    }
  };

  const get_all: form_function = (e: event) => {
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

  const get_names = () => {
    fetch('http://localhost:4000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query ExampleQuery {
          food_names
        }`,
      }),
    })
      .then((res) => res.json())
      .then((data) => setNames(data.data.food_names));
  };

  const [names, setNames] = useState([]);

  useEffect(() => {
    get_names();
  }, []);

  return (
    <>
      <Header names={names} handle_form={handle_form} get_all={get_all} />
    </>
  );
}

export default App;
