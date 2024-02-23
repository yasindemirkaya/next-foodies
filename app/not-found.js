// not-found.js bir reserved filenamedir. Projede global level'a konur. (Yani app klasörünün içine)
// Kullanıcı olmayan bir url'e ulaşmaya çalıştığında devreye girer

export default function NotFound() {
    return (
        <main className="not-found">
            <h1>Not Found</h1>
            <p>Unfortunately, we could not find the requested page or resource.</p>
        </main>
    )
}