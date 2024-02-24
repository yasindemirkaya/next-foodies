'use server';

import { saveMeal } from "./meals";
import { redirect } from 'next/navigation';

function isInvalidText(text) {
    if (!text || text.trim() === '') {

    }
}

// Add a meal
export async function shareMeal(prevState, formData) {
    'use server';

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    // Validation control
    if (isInvalidText(meal.title)
        || isInvalidText(meal.summary)
        || isInvalidText(meal.instructions)
        || isInvalidText(meal.creator)
        || isInvalidText(meal.creator_email)
        || !meal.creator_email.includes('@')
        || !meal.image
        || meal.image.size === 0
    ) {
        return {
            message: 'Invalid input.'
        };
    }

    await saveMeal(meal);
    redirect('/meals');
}