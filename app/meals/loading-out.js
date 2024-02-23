// loading.js bir reserved filename'dir. Hangi sayfanın altına koyarsak o sayfanın açılışı öncesi araya girerek çalışır. 
// Başka bir yere import etmemize gerek yok.

// Meals sayfasının statik kısımlarını gösterip, fetch'e bağımlı kısımlarında loadingi göstermek 
// için dosyanın ismini reserved filename olan loading yerine loading-out olarak değiştirdim

import classes from './loading.module.css'

export default function MealsLoadingPage() {
    return (
        <p className={classes.loading}>Fetching meals...</p>
    )
}