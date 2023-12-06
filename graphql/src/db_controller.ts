import sqlite3 from 'sqlite3';
import { data } from './data/nutrition.js';

const db = new sqlite3.Database('./dist/data/db.db', sqlite3.OPEN_READWRITE);

function init_table(): void {
  db.serialize(() => {
    db.run(
      'CREATE TABLE food (ID PRIMARY KEY, name TEXT, serving_size TEXT, nutrition_ID REFERENCES nutrition(ID))'
    );
    db.run(
      'CREATE TABLE nutrition (ID PRIMARY KEY, calories TEXT, total_fat TEXT, cholesterol TEXT, sodium TEXT, protein TEXT, sugars TEXT)'
    );
  });
}

function load_food_table(): void {
  let sql = 'INSERT INTO food VALUES (?, ?, ?, ?)';

  data.foods.forEach(({ No, name, serving_size }) => {
    db.run(sql, [No, name, serving_size, No]);
  });

  db.each('SELECT * FROM food', (err, row) => {
    console.log(
      `ID: ${row.ID}, Name: ${row.name}, Serv_Size: ${row.serving_size}, Nutr_ID: ${row.nutrition_ID}`
    );
  });
}

function load_nutrition_table(): void {
  let sql = 'INSERT INTO nutrition VALUES (?, ?, ?, ?, ?, ?, ?)';

  data.foods.forEach(
    ({ No, calories, total_fat, cholesterol, sodium, protein, sugars }) => {
      db.run(sql, [
        No,
        calories,
        total_fat,
        cholesterol,
        sodium,
        protein,
        sugars,
      ]);
    }
  );

  db.each('SELECT * FROM nutrition', (err, row) => {
    console.log(
      `ID: ${row.ID}, Cals: ${row.calories}, Fat: ${row.total_fat}, chol: ${row.cholesterol}, Sodium: ${row.sodium}, Protein: ${row.protein}, Sugars: ${row.sugars}`
    );
  });
}

function drop_table(table: string): void {
  db.serialize(() => {
    db.run(`DROP TABLE ${table}`);
  });
}

function select_all_table(table: string): void {
  db.serialize(() => {
    db.each(`SELECT * FROM ${table}`, (err, row) => {
      console.log(row);
    });
  });
}

init_table();
load_food_table();
load_nutrition_table();
select_all_table('food');
select_all_table('nutrition');
db.close();
