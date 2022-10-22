import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import CardSection from "./CardSection";
import Header from "./Header";
import Preview from "./Preview";
// import ReactPlayer from "react-player";
// import YouTube from "react-youtube";
// import HorizontalCardList from "./HorizontalCardList";
// import Horizontal from "./Horizontal ";
// import * as controler from "./Controller";

function App() {
    const [data, setData] = useState([]);
    const API_KEY = "3f43b1f4908e25b6fcb9dba49d0b6c0a";

    const [selectedMovie, setSelectedMovie] = useState({});

    const getMovie = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );
        const adata = await response.json();
        setData(adata);
        // console.log(adata.results[0]);
        setSelectedMovie(adata.results[0]);
    };

    // console.log(selectedMovie)

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div className="App">
            <Header />
            <Preview
                movie={data}
                movieSelected={selectedMovie}
                setMovie={setSelectedMovie}
            />
            {/* <Horizontal/> */}
            {/* <div className="recomended">
        <HorizontalCardList />
      </div> */}

            <>
                <div className="relative-card-section-holder">
                    <CardSection
                        name="Recently Viewed"
                        movies={data}
                        setMovie={setSelectedMovie}
                    />
                </div>
                <div className="relative-card-section-holder">
                    <CardSection
                        name="New Arrival"
                        movies={data}
                        setMovie={setSelectedMovie}
                    />
                </div>

                <div className="relative-card-section-holder">
                    <CardSection
                        name="Popular"
                        movies={data}
                        setMovie={setSelectedMovie}
                    />
                </div>
            </>
        </div>
    );
}

export default App;
