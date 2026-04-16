import React, { useEffect, useState } from "react";
import axios from "axios";
import './Second.css';

import { Container, Row, Col, Card, Modal } from "react-bootstrap";

export default function Second() {
  const [movies, SetMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const FetchMovies = () => {
    setLoading(true);
    setError(null);
    axios.get("https://www.omdbapi.com/?apikey=4e9e8ed7&s=series")
      .then((result) => {
        console.log(result.data.Search, "<=====")
        SetMovies(result.data.Search || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setError("Failed to load movies. Please try again later.");
        SetMovies([]);
        setLoading(false);
      });
  }

  useEffect(() => {
    FetchMovies();
  }, []);

  return (
<React.Fragment>
  {loading && <Container style={{paddingTop:"30px", textAlign:"center"}}><p>Loading movies...</p></Container>}
  {error && <Container style={{paddingTop:"30px", textAlign:"center"}}><p style={{color:"red"}}>{error}</p></Container>}
  {!loading && !error && (
    <Container className="Card" style={{paddingTop:"30px"}}  variant="primary" onClick={handleShow}>
      <Row xs={1} md={3} className="g-4">
          {movies.slice(0, 5).map((movie) => (
          <Col key={movie.imdbID}>

     <Card style={{ width: "18rem" }}>
         <Card.Img
                variant="top"
                src={movie.Poster}
                alt={movie.Title}
              />
<Card.Body>
                   <Card.Title>{movie.Title}</Card.Title>
                      <Card.Text>{movie.Year}</Card.Text>
              </Card.Body>
          </Card>

          </Col>
        ))}
</Row> </Container>
  )}

 <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body> a superhero created by Bob Kane and Bill Finger for comic books published by DC Comics, has appeared in nearly every form of media, including film since the 1940s. Columbia Pictures supervised the first film adaptations with Batman (1943) and Batman and Robin (1949), which deviated significantly from the source material. 20th Century Fox </Modal.Body>
       
      </Modal>
</React.Fragment>
  );
}

// async function apicalling(){
  
//   let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   let data = await response.json();
//   console.log(data)
// }

// apicalling();


