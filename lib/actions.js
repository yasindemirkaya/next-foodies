'use server';

import { revalidatePath } from "next/cache";
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

    // This function tells nextjs to revalidate the cache that belongs to a certain path.

    // Yukarıdaki işlemden sonra /meals sayfasının değiştiğini biliyoruz. Yeni bir yemek ekleniyor. 
    // Bundan dolayı nextjs'e bu sayfada yapmış olduğu cache işlemini revalidate etmesi gerektiğini söylüyoruz.
    // Aksi takdirde productionda yeni eklenen yemeği göremeyeceğiz.
    revalidatePath('/meals', 'layout');

    redirect('/meals');
}