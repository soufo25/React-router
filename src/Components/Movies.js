import React from "react";
import List from "./List";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Movies() {
  return (
    <div className="movie-card , container">
      {List.map((item) => (
        <Link to={`/description/${item.Title}`} state={{movie:item}} key={item.id}>
          <Card style={{ width: "18rem" }} >
            <Card.Img variant="top" src={item.url} alt={item.Title} />
            <Card.Body>
              <Card.Title>{item.Title}</Card.Title>
              <Card.Subtitle>{item.Rating}/10</Card.Subtitle>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default Movies;
