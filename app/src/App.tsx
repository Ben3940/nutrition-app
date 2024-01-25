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
      let data = await generic_fetch(
        `query Food_Name {
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
        'food_name'
      );
      setFoods(data);
    }
    if (no) {
      let data = await generic_fetch(
        `query Food_ID {
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
      setFoods(data);
    }
  };

  const get_all: form_function = async (e: event) => {
    e.preventDefault();

    let data = await generic_fetch(
      `query Foods {
              foods {
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
      'foods'
    );
    setFoods(data);
  };

  const get_names = async () => {
    let data = await generic_fetch(
      `query Food_Names {
        food_names
      }`,
      'food_names'
    );
    setNames(data);
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
