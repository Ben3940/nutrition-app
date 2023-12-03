import sqlite3 from 'sqlite3';

const data: any = [
  {
    No: 0,
    name: 'Cornstarch',
    serving_size: '100 g',
    calories: 381,
    total_fat: '0.1g',
    cholesterol: '0',
    sodium: '9.00 mg',
    protein: '0.26 g',
    sugars: '0.00 g',
  },
  {
    No: 1,
    name: 'Nuts, pecans',
    serving_size: '100 g',
    calories: 691,
    total_fat: '72g',
    cholesterol: '0',
    sodium: '0.00 mg',
    protein: '9.17 g',
    sugars: '3.97 g',
  },
  {
    No: 2,
    name: 'Eggplant, raw',
    serving_size: '100 g',
    calories: 25,
    total_fat: '0.2g',
    cholesterol: '0',
    sodium: '2.00 mg',
    protein: '0.98 g',
    sugars: '3.53 g',
  },
];

const db = new sqlite3.Database(
  '/graphql/dist/data/db.sqlite',
  sqlite3.OPEN_READWRITE
);

db.serialize(() => {
  db.run('CREATE TABLE food (name TEXT, serving_size TEXT, calories INT)');

  let sql = 'INSERT INTO food VALUES (?, ?, ?)';

  data.forEach(({ name, serving_size, calories }) => {
    db.run(sql, [name, serving_size, calories]);
  });

  db.each('SELECT * FROM food', (err, row) => {
    console.log(
      `Name: ${row.name}, Serv_Size: ${row.serving_size}, Cal: ${row.calories}`
    );
  });
});

db.close();
