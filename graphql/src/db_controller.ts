import sqlite3 from 'sqlite3';
import { data } from './data/nutrition.js';

const db = new sqlite3.Database(
  './dist/data/db.sqlite',
  sqlite3.OPEN_READWRITE
);

function init_table(table: string): void {
  db.serialize(() => {
    db.run(
      `CREATE TABLE ${table} (name TEXT, serving_size TEXT, calories INT)`
    );

    let sql = 'INSERT INTO food VALUES (?, ?, ?)';

    data.foods.forEach(({ name, serving_size, calories }) => {
      db.run(sql, [name, serving_size, calories]);
    });

    db.each('SELECT * FROM food', (err, row) => {
      console.log(
        `Name: ${row.name}, Serv_Size: ${row.serving_size}, Cal: ${row.calories}`
      );
    });
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
      console.log(
        `Name: ${row.name}, Serv_Size: ${row.serving_size}, Cal: ${row.calories}`
      );
    });
  });
}
init_table('food');
select_all_table('food');
db.close();
