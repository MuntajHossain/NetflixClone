import { useEffect, useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import CardSection from "./CardSection";
import Header from "./Header";
import Preview from "./Preview";
// import HorizontalCardList from "./HorizontalCardList";
// import Horizontal from "./Horizontal ";
// import * as controler from "./Controller";

function App() {
  const [data, setData] = useState([]);
  const API_KEY="3f43b1f4908e25b6fcb9dba49d0b6c0a";

  const getMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    const adata = await response.json();
    setData(adata);
    console.log("json has been fetched");
  };

  useEffect(() => {
    getMovie();

  }, []);

  return (
    <div className="App">
      <Header />
      <Preview movie={data}/>
      {/* <Horizontal/> */}
      {/* <div className="recomended">
        <HorizontalCardList />
      </div> */}
      
        <>
          <div className="relative-card-section-holder">
            <CardSection name="Recently Viewed" movies={data} />
          </div>
          <div className="relative-card-section-holder">
            <CardSection name="New Arrival" movies={data} />
          </div>

          <div className="relative-card-section-holder">
            <CardSection name="Popular" movies={data} />
          </div>

        </>
      
    </div>
  );
}

export default App;
