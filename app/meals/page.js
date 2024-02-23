import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'

import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

async function Meals() {
    const meals = await getMeals();

    // MealsGrid componentına array olarak yemekleri gönderiyoruz
    return <MealsGrid meals={meals} />
}

export default async function MealsPage() {
    return (
        <>
            {/* Header alanı fetch loadingden etkilenmeyecek ve render edilecek. Aşağıdaki kısım ise fetch bitene kadar loading state'inde kalacak */}
            <header className={classes.header}>
                <h1>Delicious meals, created <span className={classes.highlight}>by you</span></h1>
                <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share Your Favorite Recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                {/* Eğer bir componentın içerisinde data fetch ediliyorsa, Suspense componentı içerisine alınır.
                    Suspense fallback contentleri ve loading stateleri handle etmemize yardımcı olur. 
                    Meals componentı meal datalarını fetch ederken Suspense, fallback içerisine yazdığımız içeriği render etmemizi sağlar. */}
                <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}