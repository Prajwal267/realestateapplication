import React, { useState, useEffect } from "react";
import img from "../assets/profile-pic.jpg";
import axios from "axios";
import '../styles/profile.css';

const Profile = () => {
    const [editing, setEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: "",
        profession: "",
        email: "",
        location: "",
        bio: "",
        profilePicture: img,
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:5000/profile');
                setProfile(response.data);
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };

        fetchProfile();
    }, []);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = async () => {
        setEditing(false);
        try {
            await axios.post('http://localhost:5000/profile', profile);
        } catch (error) {
            console.error("Error saving profile:", error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    };

    const handleProfilePictureChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfile((prevProfile) => ({
                ...prevProfile,
                profilePicture: reader.result,
            }));
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="containers">
            {editing ? (
                <form className="forms">
                    <div className="">
                        <label>
                            Name:
                            <input
                                className="input"
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
                                className="input"
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
                                className="input"
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
                                className="input"
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
                                className="textarea"
                                name="bio"
                                value={profile.bio}
                                onChange={handleChange}
                            />
                        </label>
                        <br />
                        <label>
                            Profile Picture:
                            <input
                                className="input"
                                type="file"
                                name="profilePicture"
                                onChange={handleProfilePictureChange}
                            />
                            {profile.profilePicture && (
                                <img src={profile.profilePicture} alt="Profile Picture" />
                            )}
                        </label>
                        <br />
                        <button onClick={handleSave}>Save</button>
                    </div>
                </form>
            ) : (
                <div>
                    <h1 align="center">Profile</h1>
                    <div>
                        <h1>{profile.name}</h1>
                        <p>{profile.profession}</p>
                        <div className="profile-picture-container">
                            {profile.profilePicture && (
                                <img
                                    src={profile.profilePicture}
                                    alt="Profile Picture"
                                    className="profile-picture"
                                />
                            )}
                        </div>
                        <ul className="row">
                            <li className="list-item">
                                <strong>Email:</strong> {profile.email}
                            </li>
                            <li className="list-item">
                                <strong>Location:</strong> {profile.location}
                            </li>
                            <li className="list-item">
                                <strong>Bio:</strong> {profile.bio}
                            </li>
                        </ul>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
