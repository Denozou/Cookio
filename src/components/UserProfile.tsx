import React, { useState } from "react";
import "./UserProfile.css";
import AddRecipe from "./AddRecipe";


const UserProfile = () => {
  //змінити дані на запит до бекенду
  const [user, setUser] = useState({
    profilePic: "",
    name: "John",
    surname: "Doe",
    bio: "This is a short bio about me.",
    email: "john.doe@example.com",
    likedPosts: [
       { id: 1, title: "Delicious Italian Recipes" },
      // { id: 2, title: "The Art of French Cuisine" },
      // { id: 3, title: "10 Best Desserts You Must Try" },
    ],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newProfilePic, setNewProfilePic] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewProfilePic(e.target.files[0]);
    }
  };

  const handleSave = () => {
    if (newProfilePic) {
      const reader = new FileReader();
      reader.onload = () => {
        setUser((prevUser) => ({
          ...prevUser,
          profilePic: reader.result as string,
        }));
      };
      reader.readAsDataURL(newProfilePic);
      setNewProfilePic(null);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewProfilePic(null);
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img
          src={user.profilePic || "https://via.placeholder.com/150"}
          alt="Profile"
          className="profile-pic"
        />
        <div className="profile-info">
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                placeholder="First Name"
              />
              <input
                type="text"
                name="surname"
                value={user.surname}
                onChange={handleInputChange}
                placeholder="Last Name"
              />
              <textarea
                name="bio"
                value={user.bio}
                onChange={handleInputChange}
                placeholder="Short Bio"
              />
            </>
          ) : (
            <>
              <h2>{`${user.name} ${user.surname}`}</h2>
              <p>{user.bio}</p>
            </>
          )}
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="profile-pic-input"
            />
          )}
        </div>
        <div className="profile-actions">
          {isEditing ? (
            <>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
          )}
        </div>
      </div>
      <div className="liked-posts">
        <h3>Liked Posts</h3>
        <ul>
          {user.likedPosts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default UserProfile;
