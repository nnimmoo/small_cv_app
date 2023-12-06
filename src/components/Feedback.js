import React from 'react';
import Info from './Info';


function Feedback({ data }) {
    const FeedbackItem = ({ feedback, reporter }) => (
        <div className="feedback-item" data-testid="feedback-item">
            <Info text={feedback} />
            <div className="reporter">
                <img src={reporter.photoUrl} alt={reporter.name} />
                <p className="reporter-name">{reporter.name}</p>
                <a className="cite-link" href={reporter.citeUrl} target="_blank" rel="noopener noreferrer">
                Citation
            </a>
            </div>
        </div>
    );
    return (
        <>
            <h1 id="feedback">Feedback</h1>
            <div className="feedback-list">
                {data.map((item, index) => (
                    <FeedbackItem key={index} {...item} />
                ))}
            </div>
        </>
    );
}
export default Feedback;
