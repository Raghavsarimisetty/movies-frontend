import React from "react";
import "../../App.scss";
export default function MovieCard({ details }) {
  const { name, rating, release_date } = details;
  return (
    <div className="movies-card">
      <h1>{name}</h1>
      <h3>{rating}</h3>
      <p>{release_date}</p>
    </div>
  );
}
