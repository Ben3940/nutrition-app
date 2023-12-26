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

  get_food_table(table_name: string, callback): void {
    let data: (food | nutrition)[] = [];
    this.db.serialize(() => {
      this.db.each(
        `SELECT * FROM ${table_name} LIMIT 3`,
        (err, row: food) => {
          data.push(row);
        },
        () => {
          console.log(typeof data);
          console.log(typeof sqlite3.Database);
          callback(data);
        }
      );
    });
  }

  extract_data(data: (food | nutrition)[]): void {
    this.data = data;
  }

  close(): void {
    this.db.close();
  }

  get_data() {
    return this.data;
  }
}

const base = new Controller();
base.get_food_table('food', base.extract_data);
console.log(base.get_data());
