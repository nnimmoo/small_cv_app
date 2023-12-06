import React, { useState } from 'react';
import Button from './Button';

function Portfolio() {
    const [filter, setFilter] = useState('all');

    const images = [
        { id: 1, src: 'https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F4vaa5-YF_wOFml_uB_kX9g%252FHieronymus_Bosch_-_The_Garden_of_Earthly_Delights_-_Garden_of_Earthly_Delights_%2528Ecclesia%2527s_Paradise%2529.jpg&width=910', tags: ['all', 'UI'], title: 'Hieronymus Bosch Website', description: 'React-based website is dedicated to showcasing the life and artworks of the renowned Dutch Renaissance painter Hieronymus Bosch.' },
        { id: 2, src: 'https://www.shutterstock.com/image-vector/book-shop-logo-vector-design-600nw-2202422141.jpg', tags: ['all', 'UI'], title: 'Bookshop Website', description: 'Vanila Javascript website for small bookshop which helps user to displaye their own books.' },
        { id: 3, src: 'https://i.stack.imgur.com/3EKef.png', tags: ['all', 'Code'], title: 'Info Extraction Functionality', description: 'Numerical method based functions which help users to transform image with noise into their desired information.' },
        { id: 4, src: 'https://avatars.githubusercontent.com/u/15839756?s=280&v=4', tags: ['all', 'Code'], title: 'Duckiebot Autonimous Driving', description: 'Project aims to enable a DuckieBot to detect other DuckieBots or ducks in its driving lane and navigate around them to ensure safe and uninterrupted driving.' },
    ];

    const filteredImages = filter === 'all' ? images : images.filter(image => image.tags.includes(filter));


    const createPopup = (image) => {
        
        const popupContainer = document.createElement("div");
        popupContainer.className = "popup-container";
        popupContainer.style.position = "fixed";
        popupContainer.style.top = "50%";
        popupContainer.style.left = "60%";
        popupContainer.style.transform = "translate(-50%, -50%)";
        popupContainer.style.backgroundColor = "white";
        popupContainer.style.padding = "20px";
        popupContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
        popupContainer.style.zIndex = "1000";
        popupContainer.style.width ="500px"

       
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = `Image ${image.id}`;
        img.style.width = "100%";

        
        const title = document.createElement("h3");
        title.innerText = image.title;

     
        const description = document.createElement("p");
        description.innerText = image.description;

        popupContainer.appendChild(img);
        popupContainer.appendChild(title);
        popupContainer.appendChild(description);

        document.body.appendChild(popupContainer);
        popupContainer.addEventListener('click', () => {
            document.body.removeChild(popupContainer);
        });
    };

    const handleItemClick = (image) => {
        createPopup(image);
    };

    return (
        <>
            <h1 id="portfolio">Portfolio</h1>
            <div className='portfolio-buttons'>
                <Button onClick={() => setFilter('all')} text="All / " />
                <Button onClick={() => setFilter('UI')} text="UI / " />
                <Button onClick={() => setFilter('Code')} text="Code" />
            </div>
            <div className="image-container">
                {filteredImages.map(image => (
                    <div
                        key={image.id}
                        className="portfolio-item"
                        onClick={() => handleItemClick(image)}
                    >
                        <img src={image.src} alt={`Image ${image.id}`} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Portfolio;
