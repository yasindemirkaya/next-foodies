'use server';

import { saveMeal } from "./meals";
import { redirect } from 'next/navigation';

// Add a meal
export async function shareMeal(formData) {
    'use server';

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    await saveMeal(meal);
    redirect('/meals');
}