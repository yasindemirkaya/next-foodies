import sql from 'better-sqlite3';

const db = sql('meals.db');

// Data fetch ederken all() kullanılır
// Tek satır getirirken get() kullanılır
// Insert atarken run() kullanılır

// Tüm yemekleri getirir
export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // throw new Error('Loading meals failed')

    return db.prepare('SELECT * FROM meals').all();
}

// Tek bir yemeği getirir
// Injection önlemek amaçlı slugın karşısını ? olarak bırakıyoruz
// Get methodu içerisinde slugı kullanıyoruz
// Bu methodu MealsDetail sayfasında çağıracağız ve slug olarak yemeğin adı gönderilecek
export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}