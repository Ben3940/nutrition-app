//import sqlite3 from 'sqlite3';
import Database, { Statement } from 'better-sqlite3';
import { data } from './data/nutrition.js';
import { food } from './types/food.js';
import { nutrition } from './types/nutrition.js';

export class Controller {
  private db: Database;

  constructor() {
    this.db = new Database('./graphql/dist/data/db.db');

    // WAL ("Write-Ahead Log") helps with performance
    // Per SQLite docs:
    //   "All processes using a database must be on the same host
    //   computer; WAL does not work over a network filesystem."
    //
    //   Does this apply for k8, where DB might be in different container?
    //
    // Per better-sqlite3 docs, consider "Checkpoint starvation"
    //   https://github.com/WiseLibs/better-sqlite3/blob/master/docs/performance.md
    this.db.pragma('journal_mode = WAL');
  }

  get_entire_table(table_name: string): (food | nutrition)[] {
    const stmt: Statement = this.db.prepare(
      `SELECT * FROM ${table_name} ORDER BY No`
    );
    return stmt.all();
  }

  get_by_No(table_name: string, No: string): food | nutrition {
    const stmt: Statement = this.db.prepare(
      `SELECT * FROM ${table_name} WHERE No = ${No}`
    );
    return stmt.get();
  }

  get_food_names(): Array<Pick<food, 'name'>> {
    const stmt: Statement = this.db.prepare('SELECT name FROM food');
    return stmt.all();
  }

  get_by_name(table_name: string, name: string): food {
    const stmt: Statement = this.db.prepare(
      `SELECT * FROM ${table_name} WHERE name LIKE '${name}'`
    );
    return stmt.get();
  }

  get_by_calories(calories: number, less_than: boolean) {
    let query: string = `SELECT * FROM food JOIN nutrition ON food.nutrition_ID = nutrition.No WHERE CAST(nutrition.calories AS INTEGER)`;
    if (less_than) {
      query += ` < ${calories}`;
    } else {
      query += ` > ${calories}`;
    }
    const stmt: Statement = this.db.prepare(query);
    return stmt.all();
  }

  close(): void {
    this.db.close();
  }
}

// const base = new Controller();
// console.log(base.get_entire_table('food'));
