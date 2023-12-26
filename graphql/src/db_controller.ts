import sqlite3 from 'sqlite3';
import { data } from './data/nutrition.js';
import { food } from './types/food.js';
import { nutrition } from './types/nutrition.js';

export class Controller {
  private db: sqlite3.Database;
  private data: (food | nutrition)[] = [];
  private names: string[] = [];
  constructor() {
    this.db = new sqlite3.Database(
      './graphql/dist/data/db.db',
      sqlite3.OPEN_READWRITE
    );
  }

  get_food_table(callback): string[] {
    let data: string[] = [];
    this.db.serialize(() => {
      this.db.each(
        `SELECT * FROM food LIMIT 1`,
        (err, row: food) => {
          data.push(row.name);
        },
        () => {
          callback(data);
        }
      );
    });
    return data;
  }

  extract_names(data: string[]): void {
    data.forEach((name) => {
      console.log(name);
    });
  }

  close(): void {
    this.db.close();
  }

  print_data() {
    console.log(this.names);
  }
}

// const db = new sqlite3.Database(
//   './graphql/dist/data/db.db',
//   sqlite3.OPEN_READWRITE
// );

// function init_table(): void {
//   db.serialize(() => {
//     db.run(
//       'CREATE TABLE food (No PRIMARY KEY, name TEXT, serving_size TEXT, nutrition_ID REFERENCES nutrition(ID))'
//     );
//     db.run(
//       'CREATE TABLE nutrition (No PRIMARY KEY, calories TEXT, total_fat TEXT, cholesterol TEXT, sodium TEXT, protein TEXT, sugars TEXT)'
//     );
//   });
// }

// function load_food_table(): void {
//   let sql = 'INSERT INTO food VALUES (?, ?, ?, ?)';

//   data.foods.forEach(({ No, name, serving_size }) => {
//     db.run(sql, [No, name, serving_size, No]);
//   });

//   db.each('SELECT * FROM food LIMIT 3', (err, row: food) => {
//     console.log(
//       `No: ${row.No}, Name: ${row.name}, Serv_Size: ${row.serving_size}, Nutr_ID: ${row.nutrition_ID}`
//     );
//   });
// }

// function load_nutrition_table(): void {
//   let sql = 'INSERT INTO nutrition VALUES (?, ?, ?, ?, ?, ?, ?)';

//   data.foods.forEach(
//     ({ No, calories, total_fat, cholesterol, sodium, protein, sugars }) => {
//       db.run(sql, [
//         No,
//         calories,
//         total_fat,
//         cholesterol,
//         sodium,
//         protein,
//         sugars,
//       ]);
//     }
//   );

//   db.each('SELECT * FROM nutrition LIMIT 3', (err, row: nutrition) => {
//     console.log(
//       `No: ${row.No}, Cals: ${row.calories}, Fat: ${row.total_fat}, chol: ${row.cholesterol}, Sodium: ${row.sodium}, Protein: ${row.protein}, Sugars: ${row.sugars}`
//     );
//   });
// }

// function drop_table(table: string): void {
//   db.serialize(() => {
//     db.run(`DROP TABLE ${table}`);
//   });
// }

// function select_all_table(table: string): void {
//   db.serialize(() => {
//     db.each(`SELECT * FROM ${table}`, (err, row) => {
//       console.log(row);
//     });
//   });
// }

const base = new Controller();
base.get_food_table(base.extract_names);
base.print_data();

// init_table();
// load_food_table();
// load_nutrition_table();
// // drop_table('food');
// // drop_table('nutrition');
// // select_all_table('food');
// // select_all_table('nutrition');
// db.close();
