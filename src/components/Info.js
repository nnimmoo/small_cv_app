import React from 'react';

function Info({ text, children }) {
    return (
        <div className="info-wrapper" data-testid="event-info">
            <div className="content" data-testid="event-title">{children}</div>
            {text && <p className="info-text" data-testid="event-text">{text}</p>}
            
        </div>
    );
}

export default Info;
