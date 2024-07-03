import React, { useState } from "react";

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    profession: "Software Engineer",
    email: "johndoe@example.com",
    location: "New York, USA",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
  });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({...prevProfile, [name]: value }));
  };

  return (
    <div className="container">
      {editing? (
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Profession:
            <input
              type="text"
              name="profession"
              value={profile.profession}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={profile.location}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Bio:
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
            />
          </label>
          <br />
          <button onClick={handleSave}>Save</button>
        </form>
      ) : (
        <div>
          <h1>{profile.name}</h1>
          <p>{profile.profession}</p>
          <ul>
            <li>
              <strong>Email:</strong> {profile.email}
            </li>
            <li>
              <strong>Location:</strong> {profile.location}
            </li>
            <li>
              <strong>Bio:</strong> {profile.bio}
            </li>
          </ul>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Profile;