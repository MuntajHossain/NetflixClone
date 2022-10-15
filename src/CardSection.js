import React from "react";
import HorizontalCardList from "./HorizontalCardList";
import "./CardSection.css";

export default function CardSection(props){
    return (
        <div className="card-list-container">
          <span >{props.name}</span>
          <div className="list-container">
            <HorizontalCardList name={props.name} movies={props.movies}/>
          </div>
        </div>
    );
}