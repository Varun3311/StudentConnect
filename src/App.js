import React from "react";
import ProfileCard from "./components/ProfileCard";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// importing useful libraries and components for UI design

const People = [
  { name: "Varun", favoriteFood: "Biryani", favoriteColor: "red" },
  { name: "Chaitanya", favoriteFood: "Pizza", favoriteColor: "blue" },
  { name: "Thousif", favoriteFood: "Shawarma", favoriteColor: "green" },
  { name: "Nithin", favoriteFood: "Burger", favoriteColor: "black" },
  { name: "Pavan", favoriteFood: "Samosa", favoriteColor: "brown" },
  { name: "Bharat", favoriteFood: "Dosa", favoriteColor: "green" }
];
//creating an array people with objects name, favoritefood, favoritecolor

function App() {
  return (
    <div style={{ backgroundColor: "#cce5ff", minHeight: "100vh", padding: "20px" }}>
      {/* Background color of the page */}
      <Container>
        <h1 style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
          color: "#121212", // blue color
          marginBottom: "20px" // Adding spacing
        }}>
          My Classmates
        </h1>
        <Row className="justify-content-center">
          {People.map((person, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <ProfileCard {...person} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;