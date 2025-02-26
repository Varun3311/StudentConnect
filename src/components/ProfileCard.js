import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
// Importing React and useState for managing likes count and importing Card and Button components from React Bootstrap for styling

// Defining the component with three properties that are name, favoriteFood, and favoriteColor
const ProfileCard = ({ name, favoriteFood, favoriteColor }) => {
  // Creating a state variable 'likes' that starts at 0, and a function 'setLikes' to update it
  const [likes, setLikes] = useState(0);

  return (
    <Card
      style={{
        width: "20rem",
        margin: "10px", // Adding space around the card
        border: "2px solid ${favoriteColor}", // Using favoriteColor as the border color
        borderRadius: "20px",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif" // Applying the font
      }}
    >
      <Card.Body>
        {/* Displays the person's name with defined styles*/}
        <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold", color: favoriteColor }}>
          {name}
        </Card.Title>

        {/* Displays the person's favorite food with defined style */}
        <Card.Text style={{ fontSize: "1rem", color: "#343a40" }}>
          <strong>Favorite Food:</strong> {favoriteFood}
        </Card.Text>

        {/* Displays the person's favorite color */}
        <Card.Text style={{ fontSize: "1rem" }}>
          <strong>Favorite Color:</strong> {favoriteColor}
        </Card.Text>

        {/* Like button with defined styling to match the favorite color */}
        <Button
          style={{
            backgroundColor: favoriteColor,
            color: "white", 
            fontWeight: "bold" 
          }}
          onClick={() => setLikes(likes + 1)} // When clicked, increase the likes count
        >
          👍🏻 Like ({likes}) {/* Showing the number of likes */}
        </Button>
      </Card.Body>
    </Card>
  );
};
export default ProfileCard;