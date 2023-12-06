import React from 'react';
import "../assets/styles/timeline.scss"
import Info from './Info';

function Timeline({ data }) {
    return (
        <>
            <h1 id='education'>Education</h1>
            <div className="timeline">
                {data.map((event, index) => (
                    <div className="timeline-event" key={index}>
                        <div className="event-date" data-testid="event-date">{event.date}</div>
                        <div className="event-content">
                            <Info
                                text={event.description}
                                children={event.title}
                                data-testid="event-info"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Timeline;


