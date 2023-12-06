function Expertise({ data }) {
  return (
    <div className="people-displayer">
      <h1 id="experience">Experience</h1>
      {data.map((person, index) => (
        <div className="person-displayer" key={index}>
          <div><h3>{person.info.company}</h3>
            <p>{person.date}</p></div>

          <div><h3>{person.info.job}</h3>
            <p>{person.info.description}</p></div>

        </div>
      ))}
    </div>

  );
}

export default Expertise;
