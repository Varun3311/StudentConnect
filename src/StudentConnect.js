import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileCard from "./components/ProfileCard";

const StudentConnect = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Varun", favoriteFood: "Biryani", favoriteColor: "red", likes: 0 },
    { id: 2, name: "Chaitanya", favoriteFood: "Pizza", favoriteColor: "blue", likes: 0 },
    { id: 3, name: "Thousif", favoriteFood: "Shawarma", favoriteColor: "green", likes: 0 },
    { id: 4, name: "Bharath", favoriteFood: "Burger", favoriteColor: "black", likes: 0 }
  ]);

  const [newProfile, setNewProfile] = useState({ name: "", favoriteFood: "", favoriteColor: "" });
  const [editingId, setEditingId] = useState(null);
  const [editedProfile, setEditedProfile] = useState({ name: "", favoriteFood: "", favoriteColor: "" });

  const handleAddProfile = () => {
    if (!newProfile.name || !newProfile.favoriteFood || !newProfile.favoriteColor) return;
    setProfiles([...profiles, { ...newProfile, id: Date.now(), likes: 0 }]);
    setNewProfile({ name: "", favoriteFood: "", favoriteColor: "" });
  };

  const handleDeleteProfile = (id) => {
    setProfiles(profiles.filter(profile => profile.id !== id));
  };

  const handleLikeProfile = (id) => {
    setProfiles(profiles.map(profile =>
      profile.id === id ? { ...profile, likes: profile.likes + 1 } : profile
    ));
  };

  const handleEditProfile = (profile) => {
    setEditingId(profile.id);
    setEditedProfile(profile);
  };

  const handleSaveEdit = () => {
    setProfiles(profiles.map(profile =>
      profile.id === editingId ? editedProfile : profile
    ));
    setEditingId(null);
  };

  return (
    <Container style={{ backgroundColor: "#cce5ff" }}>
      <h1 className="text-center my-4">Student Connect</h1>
      
      {/* Add Profile Form */}
      <Form className="mb-4">
        <Row>
          <Col><Form.Control placeholder="Name" value={newProfile.name} onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })} /></Col>
          <Col><Form.Control placeholder="Favorite Food" value={newProfile.favoriteFood} onChange={(e) => setNewProfile({ ...newProfile, favoriteFood: e.target.value })} /></Col>
          <Col><Form.Control placeholder="Favorite Color" value={newProfile.favoriteColor} onChange={(e) => setNewProfile({ ...newProfile, favoriteColor: e.target.value })} /></Col>
          <Col><Button onClick={handleAddProfile}>Add</Button></Col>
        </Row>
      </Form>
      
      {/* Profile Cards */}
      <Row className="justify-content-center">
        {profiles.map(profile => (
          <Col key={profile.id} xs={12} sm={6} md={4}>
            <ProfileCard {...profile} onLike={() => handleLikeProfile(profile.id)} onDelete={() => handleDeleteProfile(profile.id)} />
          </Col>
        ))}
      </Row>
      
      {/* Profile Table */}
      <h2 className="mt-5">Profiles List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Favorite Food</th>
            <th>Favorite Color</th>
            <th>Likes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map(profile => (
            <tr key={profile.id}>
              {editingId === profile.id ? (
                <>
                  <td><Form.Control value={editedProfile.name} onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })} /></td>
                  <td><Form.Control value={editedProfile.favoriteFood} onChange={(e) => setEditedProfile({ ...editedProfile, favoriteFood: e.target.value })} /></td>
                  <td><Form.Control value={editedProfile.favoriteColor} onChange={(e) => setEditedProfile({ ...editedProfile, favoriteColor: e.target.value })} /></td>
                  <td>{profile.likes}</td>
                  <td>
                    <Button variant="success" size="sm" onClick={handleSaveEdit}>Save</Button>
                  </td>
                </>
              ) : (
                <>
                  <td>{profile.name}</td>
                  <td>{profile.favoriteFood}</td>
                  <td>{profile.favoriteColor}</td>
                  <td>{profile.likes}</td>
                  <td>
                    <Button variant="warning" size="sm" onClick={() => handleEditProfile(profile)}>Edit</Button>{' '}
                    <Button variant="danger" size="sm" onClick={() => handleDeleteProfile(profile.id)}>Delete</Button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default StudentConnect;
