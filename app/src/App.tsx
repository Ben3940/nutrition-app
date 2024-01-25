import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Food } from './components/Food';
import { event } from './types/event';
import { form_function } from './types/form_function';
import { generic_fetch } from './utils/Generic_Fetch';

function App() {
  const handle_form = async (e: Event) => {
    e.preventDefault();

    const formHTML = document.getElementById('search-form') as HTMLFormElement;
    const form: FormData = new FormData(formHTML);
    const name: FormDataEntryValue | null = form.get('name');
    const no: FormDataEntryValue | null = form.get('no');

    if (name) {
      fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          query: `query ExampleQuery {
            food_name(table_name: "food", name: "${name}") {
              No,
              name,
              serving_size,
              nutrition {
                No,
                calories
                cholesterol,
                total_fat,
                protein,
                sodium,
                sugars
              }
            }
          }`,
        }),
      })
        .then((res) => res.json())
        .then((data) => setFoods(data.data.food_name));
    }
    if (no) {
      let data = await generic_fetch(
        `query ExampleQuery {
              food_id(table_name: "food", No: "${no}") {
                No,
                name,
                serving_size
                nutrition {
                  No,
                calories
                cholesterol,
                total_fat,
                protein,
                sodium,
                sugars
                }
              }
            }`,
        'food_id'
      );
      console.log(data);
      // fetch('http://localhost:4000/', {
      //   method: 'POST',
      //   headers: {
      //     'Content-type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     query: `query ExampleQuery {
      //       food_id(table_name: "food", No: "${no}") {
      //         No,
      //         name,
      //         serving_size
      //         nutrition {
      //           No,
      //         calories
      //         cholesterol,
      //         total_fat,
      //         protein,
      //         sodium,
      //         sugars
      //         }
      //       }
      //     }`,
      //   }),
      // })
      //   .then((res) => res.json())
      //   .then((data) => console.log(data.data));
    }
  };

  const get_all: form_function = (e: event) => {
    e.preventDefault();

    // fetch('http://localhost:4000/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     query: `query ExampleQuery {
    //       foods {
    //         No,
    //         name,
    //         serving_size
    //         nutrition {
    //           No,
    //           calories
    //           cholesterol,
    //           total_fat,
    //           protein,
    //           sodium,
    //           sugars
    //         }
    //       }
    //     }`,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => setFoods(data.data.foods));
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

  const get_food_by_no = (no: string) => {
    fetch('http://localhost:4000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query ExampleQuery {
          food_id(table_name: "food", No: ${no}) {
            No,
            name,
            serving_size,
            nutrition {
              calories,
              total_fat,
              sodium,
              sugars,
              protein,
              cholesterol,
            }
          }
        }`,
      }),
    })
      .then((res) => res.json())
      .then((data) => setFoods(data.data.food_id));
  };

  const [names, setNames] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    get_names();
  }, []);

  return (
    <>
      <Header names={names} handle_form={handle_form} get_all={get_all} />
      {foods.map((food) => {
        return <Food key={food.No} food={food} />;
      })}
    </>
  );
}

export default App;
