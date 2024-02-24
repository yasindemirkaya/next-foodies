'use client';

import Image from 'next/image';
import classes from './image-picker.module.css'
import { useRef, useState } from 'react'

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState()
    const imageInput = useRef();

    // Custom click function
    const handlePickClick = () => {
        imageInput.current.click();
    }

    // Show image preview
    const handleImageChange = (event) => {
        const file = event.target.files[0];

        // Check if file is picked
        if (!file) {
            setPickedImage(null);
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        };

        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                {/* Preview */}
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && <Image src={pickedImage} alt="Image selected by the user." fill />}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                    required
                />
                {/* Custom button */}
                <button className={classes.button} type="button" onClick={handlePickClick}>Pick an Image</button>
            </div>
        </div>
    )
}