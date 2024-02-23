import MealItem from './meal-item'
import classes from './meals-grid.module.css'

// MealsPage'den buraya gönderdiğimiz meals arrayini mapleyerek tek tek gride yerleştiriyoruz
export default function MealsGrid({ meals }) {
    return (
        <ul className={classes.meals}>
            {meals.map(meal => <li key={meal.id}>
                {/* MealItem componentına her bir meal objesini gönderiyoruz */}
                <MealItem {...meal} />
            </li>)}
        </ul>
    )
}