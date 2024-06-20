import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Dashboard/dashboardhome.css";

const DashboardHome = () => {
  const [artists, setArtists] = useState([]);
  const [removeFromFrontConfirmed, setRemoveFromFrontConfirmed] =
    useState(false);
  const [featuredArtists, setFeaturedArtists] = useState([]);
  const [formStates, setFormStates] = useState(
    JSON.parse(localStorage.getItem("formStates")) ||
      Array.from({ length: 4 }, () => ({
        selectedArtistId: "",
        selectedArtwork: "",
        additionalInfo: "",
        isSaved: false,
        chosenArtist: null,
        formStep: 1,
      }))
  );

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get(
          "https://bridges-backend-ob24.onrender.com/artists/"
        );
        setArtists(response.data);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    fetchArtists();
  }, []);

  useEffect(() => {
    const fetchFeaturedArtists = async () => {
      try {
        const response = await axios.get(
          "https://bridges-backend-ob24.onrender.com/featured-artists/"
        );
        setFeaturedArtists(response.data);
      } catch (error) {
        console.error("Error fetching featured artists:", error);
      }
    };

    fetchFeaturedArtists();
  }, []);

  useEffect(() => {
    localStorage.setItem("formStates", JSON.stringify(formStates));
  }, [formStates]);

  const handleArtistChange = (index, e) => {
    const artistId = e.target.value;
    const artist = artists.find((artist) => artist._id === artistId);

    updateFormState(index, {
      selectedArtistId: artistId,
      selectedArtwork: "",
      additionalInfo: artist ? artist.artist_about : "",
      chosenArtist: artist || null,
      formStep: 2,
    });
  };

  const handleArtworkChange = (index, e) => {
    updateFormState(index, {
      selectedArtwork: e.target.value,
      formStep: 3,
    });
  };

  const handleInfoChange = (index, e) => {
    updateFormState(index, {
      additionalInfo: e.target.value,
    });
  };

  const handleSave = async (index) => {
    const formState = formStates[index];
    const selectedArtist = formState.chosenArtist;

    if (!selectedArtist) {
      toast.error("Please select an artist.");
      return;
    }

    if (!formState.removeFromFrontConfirmed) {
      toast.error("Please confirm removal from front before saving.");
      return;
    }

    try {
      // Find the previously featured artist
      const previouslyFeatured = featuredArtists.find(
        (artist) => artist.featured_on_front
      );

      // Update the previously featured artist to set featured_on_front to false
      if (previouslyFeatured && previouslyFeatured._id !== selectedArtist._id) {
        await axios.put(
          `https://bridges-backend-ob24.onrender.com/artists/${previouslyFeatured._id}`,
          {
            featured_on_front: false,
          }
        );
      }

      // Update the selected artist to set featured_on_front to true
      await axios.put(
        `https://bridges-backend-ob24.onrender.com/artists/${selectedArtist._id}`,
        {
          artist_about: formState.additionalInfo,
          featured_on_front: true,
        }
      );

      // Update the local state to reflect the changes
      setFeaturedArtists((prev) =>
        prev.map((artist) =>
          artist._id === selectedArtist._id
            ? { ...artist, featured_on_front: true }
            : { ...artist, featured_on_front: false }
        )
      );

      updateFormState(index, {
        isSaved: true,
        formStep: 1,
      });

      resetForm(index, selectedArtist);

      toast.success("Artist successfully saved and featured!");
    } catch (error) {
      console.error("Error saving artist:", error);
      toast.error("Error saving artist. Please try again later.");
    }
  };

  const handleEdit = (index) => {
    updateFormState(index, {
      isSaved: false,
      formStep: 1,
    });
  };

  const handleRemoveFromFront = async (index) => {
    try {
      const formState = formStates[index];
      const selectedArtist = formState.chosenArtist;

      if (!selectedArtist) {
        toast.error("No artist selected.");
        return;
      }

      await axios.put(
        `https://bridges-backend-ob24.onrender.com/artists/${selectedArtist._id}`,
        {
          featured_on_front: false,
        }
      );

      setFeaturedArtists((prev) =>
        prev.map((artist) =>
          artist._id === selectedArtist._id
            ? { ...artist, featured_on_front: false }
            : artist
        )
      );

      updateFormState(index, { selectedArtistId: "", formStep: 1 });

      // Update removeFromFrontConfirmed state
      setFormStates((prevState) => {
        const updatedState = [...prevState];
        updatedState[index] = {
          ...updatedState[index],
          removeFromFrontConfirmed: true,
        };
        return updatedState;
      });

      toast.success("Artist successfully removed from the front!");
    } catch (error) {
      console.error("Error removing artist from the front:", error);
      toast.error(
        "Error removing artist from the front. Please try again later."
      );
    }
  };

  const updateFormState = (index, newState) => {
    setFormStates((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = { ...updatedState[index], ...newState };
      return updatedState;
    });
  };

  const resetForm = (index, chosenArtist) => {
    setFormStates((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = {
        selectedArtistId: chosenArtist._id,
        selectedArtwork: "",
        additionalInfo: chosenArtist.artist_about,
        isSaved: false,
        chosenArtist: chosenArtist,
        formStep: 1,
        removeFromFrontConfirmed: false, // Reset confirmation state
      };
      return updatedState;
    });
  };

  return (
    <div className="dashboard-home">
      <h1>Homepage Featured</h1>
      <div className="artist-container">
        {formStates.map((formState, index) => (
          <div key={index} className="artist-featured123">
            <h2>Artist Featured {index + 1}</h2>
            {formState.isSaved && formState.chosenArtist ? (
              <div>
                <p>
                  Artist Chosen: {formState.chosenArtist.artist_name}{" "}
                  {formState.chosenArtist.artist_lastname} (
                  {formState.chosenArtist.artist_aka})
                </p>
                <p>Description: {formState.chosenArtist.artist_about}</p>
                <p>Artwork: {formState.selectedArtwork}</p>
                <p>Additional Info: {formState.additionalInfo}</p>
                <button onClick={() => handleEdit(index)} className="edit-btn">
                  Edit
                </button>
                <button
                  onClick={() => handleRemoveFromFront(index)}
                  className="remove-from-front"
                >
                  Remove/front
                </button>
              </div>
            ) : (
              <div>
                {formState.formStep >= 1 && (
                  <div className="form-group">
                    <label htmlFor={`artist-select-${index}`}>
                      Choose an Artist:
                    </label>
                    <select
                      id={`artist-select-${index}`}
                      value={formState.selectedArtistId}
                      onChange={(e) => handleArtistChange(index, e)}
                    >
                      <option value="">--Select Artist--</option>
                      {artists.length > 0 &&
                        artists.map((artist) => (
                          <option key={artist._id} value={artist._id}>
                            {artist.artist_name} {artist.artist_lastname} (
                            {artist.artist_aka})
                          </option>
                        ))}
                    </select>
                  </div>
                )}

                {formState.formStep >= 2 && formState.chosenArtist && (
                  <div className="form-group">
                    <label htmlFor={`artwork-select-${index}`}>
                      Choose an Artwork:
                    </label>
                    <select
                      id={`artwork-select-${index}`}
                      value={formState.selectedArtwork}
                      onChange={(e) => handleArtworkChange(index, e)}
                    >
                      <option value="">--Select Artwork--</option>
                      {formState.chosenArtist.artist_work1name && (
                        <option value={formState.chosenArtist.artist_work1}>
                          {formState.chosenArtist.artist_work1name}
                        </option>
                      )}
                      {formState.chosenArtist.artist_work2name && (
                        <option value={formState.chosenArtist.artist_work2}>
                          {formState.chosenArtist.artist_work2name}
                        </option>
                      )}
                      {formState.chosenArtist.artist_work3name && (
                        <option value={formState.chosenArtist.artist_work3}>
                          {formState.chosenArtist.artist_work3name}
                        </option>
                      )}
                    </select>
                  </div>
                )}

                {formState.formStep >= 3 && (
                  <div className="form-group">
                    <label htmlFor={`additional-info-${index}`}>
                      Additional Info:
                    </label>
                    <textarea
                      id={`additional-info-${index}`}
                      value={formState.additionalInfo}
                      onChange={(e) => handleInfoChange(index, e)}
                      className="resizable-textbox"
                    />
                  </div>
                )}

                <div className="form-group">
                  {formState.isSaved ? (
                    <button
                      onClick={() => handleEdit(index)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleSave(index)}
                        className="save-btn"
                      >
                        Save
                      </button>
                      {formState.chosenArtist && (
                        <button
                          onClick={() => handleRemoveFromFront(index)}
                          className="remove-from-front"
                        >
                          Remove/front
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default DashboardHome;
