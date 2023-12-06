function Box({title, content}) {
    return (
        <div className="box hidden" id="about" data-testid="box">
            <h1 className="box-header">{title}</h1>
            <p className="box-paragraph">{content}</p>
        </div>
    );
}

export default Box;
