import React from 'react';

function PhotoBox({ name, title, description, avatar }) {
    return (
        <div className="photo-box">
            <div className="photo">
                <img src={avatar} alt={name} />
            </div>
            <div className="info">
                <h2>{name}</h2>
                <p className="title">{title}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    );
}

export default PhotoBox;
