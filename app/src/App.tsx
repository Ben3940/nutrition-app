import { Header } from './components/Header';
// import { data } from './data/nutrition';

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

function App() {
  return (
    <>
      <Header handle_form={handle_form} get_all={get_all} />
    </>
  );
}

export default App;
