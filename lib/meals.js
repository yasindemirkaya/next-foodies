import sql from 'better-sqlite3';

const db = sql('meals.db');

// Data fetch ederken all() kullanılır
// Tek satır getirirken get() kullanılır
// Insert atarken run() kullanılır
export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // throw new Error('Loading meals failed')

    return db.prepare('SELECT * FROM meals').all();
}