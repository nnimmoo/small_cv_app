import Box from "../components/Box";
import Expertise from "../components/Expertise";
import Timeline from "../components/Timeline";
import Feedback from "../components/Feedback";
import Panel from "../components/Panel";
import Address from "../components/Address";
import Portfolio from "../components/Portfolio"
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt} from '@fortawesome/free-solid-svg-icons';
import Skills from "../components/Skills";
import { useSelector, useDispatch } from 'react-redux';
import { setTimelineData, setLoading, setError } from '../actions/innerActions';

function Inner() {
  const timelineData = useSelector((state) => state.timeline.timelineData);
  const loading = useSelector((state) => state.timeline.loading);
  const error = useSelector((state) => state.timeline.error);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/api/educations')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setTimelineData(data.educations));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setError(error));
        dispatch(setLoading(false));
      });
  }, [dispatch]);

    return (
        <>
            <Panel />
            <div className="Main-panel">
                <Box title='About Me' content={`Hello! I'm Nino, a 21-year-old Computer Science student with a passion for exploring the vast world of technology. My journey in this dynamic field has led me to master various programming languages, including Python, Java, Javascript. This diverse skill set enables me to tackle complex problems with innovative solutions. Aside from my academic pursuits, I have a myriad of interests that keep me engaged and constantly learning. In my free time, you might find me exploring the latest tech trends, or contributing to open-source projects. Balancing my love for technology, I also have a keen interest in creative arts and outdoor activities. Whether it's art, hiking, or playing the guitar, these hobbies provide me with a well-rounded perspective and a source of inspiration in my technical work. \n As I continue my educational journey, I am eager to apply my knowledge in real-world scenarios, seeking internships and collaborative projects. My goal is to not only excel academically but to also make a meaningful impact in the tech community.`} />

                <div>
                    {loading ? (
                        <div className="loading">
                            <FontAwesomeIcon icon={faSyncAlt} spin/>
                        </div>
                    ) : error ? (
                        <div className="error">
                            <p>Something went wrong; please review your server connection!</p>
                        </div>
                    ) : (
                       <Timeline data={timelineData} />
                    )}
                </div>
                <Skills />
                <Expertise data={[{ date: '2023', info: { company: 'Combined Ratio Solutions', job: 'Junior Configurator', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor' } }]} />
                <Portfolio />
                <Address />
                <Feedback data={[{ feedback: `Recently, I had the pleasure of collaborating with Nino on a project, and I must say, it was an outstanding experience. Alex's professionalism, combined with a deep understanding of the subject matter, was truly impressive. What stood out the most was her ability to communicate complex ideas in a clear and concise manner, making collaboration smooth and efficient.`, reporter: { photoUrl: 'https://static-00.iconduck.com/assets.00/person-icon-476x512-hr6biidg.png', name: 'Alex Green', citeUrl: 'https://www.citeexample.com' } }, { feedback: `Working with Nino on our recent project was an exceptional experience. Their ability to analyze problems and come up with innovative solutions was remarkable. What really set Nino apart was their collaborative spirit and willingness to go the extra mile to ensure project success`, reporter: { photoUrl: 'https://static-00.iconduck.com/assets.00/person-icon-476x512-hr6biidg.png', name: 'Katya Kornikov', citeUrl: 'https://www.citeexample.com' } }]} />
            </div>

        </>
    );
}

export default Inner;
