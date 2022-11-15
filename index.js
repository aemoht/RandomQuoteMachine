function App () {

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");
    const [color, setColor] = React.useState("#fff")

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randomIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randomIndex]);
        }
        fetchData();
    }, []);

    const getNewQuote = () => {

        var colors = [
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#BDBB99',
            '#77B1A9',
            '#73A857'
          ];

        

        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randomColorIndex = Math.floor(Math.random() * colors.length);
        setRandomQuote(quotes[randomIndex]);
        setColor(colors[randomColorIndex]);

    }

    return(
        <div className="" style={{backgroundColor: color, minHeight: "100vh"}}>
            <div className="container pt-5">
                <div className="jumbotron pb-2">
                    <div className="card">
                        <div className="card-header">Inspirational Quotes</div>
                        <div className="card-body">
                            {randomQuote ? (
                                <>
                                <div className="h4">{randomQuote.text}</div>
                                <div className="h5">{randomQuote.author || "No author"}</div>
                                </>
                            ) : (
                                <h2>Loading</h2>
                            )}

                            <hr className="my-2"></hr>

                            <button type="button" class="btn btn-primary btn-rounded m" onClick={getNewQuote}>New Quote</button>
                            <a href={
                        "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                        encodeURIComponent(
                        '"' + randomQuote.text + '" ' + randomQuote.author
                        )
                    } target="_blank" className="btn btn-warning m-1"><i class="fa fa-twitter"></i></a>
                            <a href={
                        "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
                        encodeURIComponent(randomQuote.author) +
                        "&content=" +
                        encodeURIComponent(randomQuote.text) +
                        "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
                    } target="_blank" className="btn btn-danger m"><i class="fa fa-tumblr"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h6>by Martin Fontaine</h6>
            </div>
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('app'));