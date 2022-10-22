import React from "react";
import "./HorizontalCardList.css";
import cardImage from "./Assets/Images/logo.svg";
import Card from "./Card";

export default function HorizontalCardList(props) {
    if (props.movies === undefined) {
        // console.log("******************************");
    }
    //   console.log(props.movies);
    const mov = props.movies.results;
    // const movl=mov.map(move=>move);
    // console.log(mov);
    let cards = Array(10).fill(1);
    if (mov !== undefined) {
        // console.log(mov[0].poster_path);
        // console.log("******** not undefined **********");
        cards = mov.map((i) => {
            // console.log(i.poster_path)

            return <Card movie={i} setMovie={props.setMovie} />;

            // return (
            //   <div className="card">
            //     <img src={`https://image.tmdb.org/t/p/w154/${i.poster_path}`} alt="card"></img>
            //   </div>
            // );
        });
    } else {
        // console.log("******** undefined **********");

        cards = cards.map(() => {
            return (
                <div className="card">
                    <img src={cardImage} alt="card"></img>
                </div>
            );
        });
    }
    // console.log(cards[0]);

    return (
        <div className="card-list-view">
            {/* <div className="card">
        <img src={cardImage} alt="card"></img>
      </div>
      <div className="card">
        <img src={cardImage} alt="card"></img>
      </div>
      <div className="card">
        <img src={cardImage} alt="card"></img>
      </div>
      <div className="card">
        <img src={cardImage} alt="card"></img>
      </div>
      <div className="card">
        <img src={cardImage} alt="card"></img>
      </div>
      <div className="card">
        <img src={cardImage} alt="card"></img>
      </div>
      <div className="card">
        <img src={cardImage} alt="card"></img>
      </div>
      <div className="card">
        <img src={cardImage} alt="card"></img>
      </div>
      <div className="card">
        <img src={cardImage} alt="card"></img>
      </div>
      <div className="card">
        <img src={cardImage} alt="card"></img>
      </div>
      <div className="card">
        <img src={cardImage} alt="card"></img>
      </div>
      <div className="card">
        <img src={cardImage} alt="card"></img>
      </div>
      <div className="card">
        <img src={cardImage} alt="card"></img>
      </div>
      <div className="card">
        <img src={cardImage} alt="card"></img>
      </div>
      <div className="card">
        <img src={cardImage} alt="card"></img>
      </div>
      <div className="card">
        <img src={cardImage} alt="card"></img>
      </div>
      <div className="card">
        <img src={cardImage} alt="card"></img>
      </div>
      <div className="card">
        <img src={cardImage} alt="card"></img>
      </div> */}
            {cards}
        </div>
    );
}
