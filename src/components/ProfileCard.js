import React from "react";
import { Card, Button } from "react-bootstrap";

const ProfileCard = ({ id, name, favoriteFood, favoriteColor, likes, onLike, onDelete }) => {
  return (
    <Card
      style={{
        width: "20rem",
        margin: "10px",
        border: `2px solid ${favoriteColor}`,
        borderRadius: "20px",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <Card.Body>
        <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold", color: favoriteColor }}>
          {name}
        </Card.Title>
        <Card.Text><strong>Favorite Food:</strong> {favoriteFood}</Card.Text>
        <Card.Text><strong>Favorite Color:</strong> {favoriteColor}</Card.Text>
        
        {/* Like button updates global state */}
        <Button
          style={{ backgroundColor: favoriteColor, color: "white", fontWeight: "bold" }}
          onClick={() => onLike(id)} 
        >
          💟 Like ({likes})
        </Button>

        {/* Delete button */}
        <Button
          variant="danger"
          size="sm"
          style={{ marginLeft: "10px" }}
          onClick={() => onDelete(id)}
        >
          ✖ Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
