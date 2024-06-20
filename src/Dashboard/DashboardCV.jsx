import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./dashboardcv.css";

const initialArtists = [
  {
    id: 1,
    artist_name: "John",
    artist_lastname: "Doe",
    artist_aka: "JD",
    artist_image:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    artist_arttype: "Painter",
    artist_country: "USA",
    artist_city: "New York",
    artist_work1: "Sunset",
    artist_work1des:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    artist_work2: "Portrait",
    artist_work2des:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    artist_work3: "Abstract",
    artist_work3des:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 2,
    artist_name: "Jane",
    artist_lastname: "Smith",
    artist_aka: "JS",
    artist_image:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    artist_arttype: "Sculptor",
    artist_country: "Canada",
    artist_city: "Toronto",
    artist_work1: "The Thinker",
    artist_work1des:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    artist_work2: "Eagle",
    artist_work2des:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    artist_work3: "Warrior",
    artist_work3des:
      "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
];

function DashboardCV() {
  const [artists, setArtists] = useState(initialArtists);
  const [isEditing, setIsEditing] = useState(false);
  const [currentArtist, setCurrentArtist] = useState(null);

  const handleDelete = (artistId) => {
    setArtists((prevArtists) =>
      prevArtists.filter((artist) => artist.id !== artistId)
    );
    toast.success("Artist deleted successfully");
  };

  const openImageInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const handleEditClick = (artist) => {
    setCurrentArtist(artist);
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentArtist((prevArtist) => ({
      ...prevArtist,
      [name]: value,
    }));
  };

  const handleEditSave = () => {
    setArtists((prevArtists) =>
      prevArtists.map((artist) =>
        artist.id === currentArtist.id ? currentArtist : artist
      )
    );
    setIsEditing(false);
    setCurrentArtist(null);
    toast.success("Artist updated successfully");
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setCurrentArtist(null);
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCurrentArtist((prevArtist) => ({
        ...prevArtist,
        artist_image: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="dashboard-cv">
      <ToastContainer />
      <fieldset className="cv-fieldset">
        <div className="cv" id="cv">
          <h1>Artists</h1>
          <table className="artists-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>AKA</th>
                <th>Image</th>
                <th>Art Type</th>
                <th>Country</th>
                <th>City</th>
                <th>Artist Work 1</th>
                <th>Image Work 1</th>
                <th>Artist Work 2</th>
                <th>Image Work 2</th>
                <th>Artist Work 3</th>
                <th>Image Work 3</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {artists.map((artist) => (
                <tr key={artist.id}>
                  <td>{artist.artist_name}</td>
                  <td>{artist.artist_lastname}</td>
                  <td>{artist.artist_aka}</td>
                  <td>
                    <img
                      src={artist.artist_image}
                      alt={artist.artist_aka}
                      className="artist-img"
                      onClick={() => openImageInNewTab(artist.artist_image)}
                    />
                  </td>
                  <td>{artist.artist_arttype}</td>
                  <td>{artist.artist_country}</td>
                  <td>{artist.artist_city}</td>
                  <td>{artist.artist_work1}</td>
                  <td>
                    <img
                      src={artist.artist_work1des}
                      alt={artist.artist_work1}
                      className="work-img"
                      onClick={() => openImageInNewTab(artist.artist_work1des)}
                    />
                  </td>
                  <td>{artist.artist_work2}</td>
                  <td>
                    <img
                      src={artist.artist_work2des}
                      alt={artist.artist_work2}
                      className="work-img"
                      onClick={() => openImageInNewTab(artist.artist_work2des)}
                    />
                  </td>
                  <td>{artist.artist_work3}</td>
                  <td>
                    <img
                      src={artist.artist_work3des}
                      alt={artist.artist_work3}
                      className="work-img"
                      onClick={() => openImageInNewTab(artist.artist_work3des)}
                    />
                  </td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEditClick(artist)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(artist.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isEditing && (
            <div className="edit-form">
              <h2>Edit Artist</h2>
              <label>
                First Name:
                <input
                  type="text"
                  name="artist_name"
                  value={currentArtist.artist_name}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="artist_lastname"
                  value={currentArtist.artist_lastname}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                AKA:
                <input
                  type="text"
                  name="artist_aka"
                  value={currentArtist.artist_aka}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                Image URL:
                <input
                  type="text"
                  name="artist_image"
                  value={currentArtist.artist_image}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                Art Type:
                <input
                  type="text"
                  name="artist_arttype"
                  value={currentArtist.artist_arttype}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                Country:
                <input
                  type="text"
                  name="artist_country"
                  value={currentArtist.artist_country}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                City:
                <input
                  type="text"
                  name="artist_city"
                  value={currentArtist.artist_city}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                Artist Work 1:
                <input
                  type="text"
                  name="artist_work1"
                  value={currentArtist.artist_work1}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                Image Work 1 URL:
                <input
                  type="text"
                  name="artist_work1des"
                  value={currentArtist.artist_work1des}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                Artist Work 2:
                <input
                  type="text"
                  name="artist_work2"
                  value={currentArtist.artist_work2}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                Image Work 2 URL:
                <input
                  type="text"
                  name="artist_work2des"
                  value={currentArtist.artist_work2des}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                Artist Work 3:
                <input
                  type="text"
                  name="artist_work3"
                  value={currentArtist.artist_work3}
                  onChange={handleEditChange}
                />
              </label>
              <label>
                Image Work 3 URL:
                <input
                  type="text"
                  name="artist_work3des"
                  value={currentArtist.artist_work3des}
                  onChange={handleEditChange}
                />
              </label>
              <button className="save-btn" onClick={handleEditSave}>
                Save
              </button>
              <button className="cancel-btn" onClick={handleEditCancel}>
                Cancel
              </button>
            </div>
          )}
        </div>
      </fieldset>
    </div>
  );
}

export default DashboardCV;
