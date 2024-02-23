// Error.js bir reserved filename'dir. İçerisinde bulunduğu sayfa hataya düştüğünde devreye girer. Eğer proje route'una konursa tüm errorlarda devreye girer
// error.js bir client component olmalıdır.

'use client';

export default function Error({ error }) {
    return (
        // globals.css'ten gelen error classı
        <main className="error">
            <h1>An error occured!</h1>
            <p>Failed to fetch meal data. Please try again later.</p>
        </main>
    )
}