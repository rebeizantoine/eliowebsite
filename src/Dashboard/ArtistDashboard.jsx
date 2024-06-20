import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Draggable from "react-draggable";
import "./dashboardcv.css";
import AddArtistForm from "../Components/AddArtistForm"; // Import your AddArtistForm component

const ArtistDashboard = () => {
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [isAdding, setIsAdding] = useState(false);
  const [newItem, setNewItem] = useState({
    item_name: "",
    item_price: 0,
    item_color1: "",
    item_color2: "",
    item_quantityAvailable: 0,
    item_dimensions: "",
    item_customizable: false,
    item_image1: "",
    item_image2: "",
    item_image3: "",
    item_description: "",
    item_featuredOnFront: false,
    item_mainTag: "",
    item_additionalTag1: "",
    item_additionalTag2: "",
    item_additionalTag3: "",
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    axios
      .get("http://localhost:8000/singleitem/")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the items!", error);
      });
  };

  const handleDelete = (itemId) => {
    axios
      .delete(`http://localhost:8000/singleitem/${itemId}`)
      .then(() => {
        setItems((prevItems) =>
          prevItems.filter((item) => item._id !== itemId)
        );
        toast.success("Item deleted successfully");
      })
      .catch((error) => {
        console.error("There was an error deleting the item!", error);
      });
  };

  const handleEditClick = (item) => {
    setCurrentItem(item);
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    const { name, value, checked, type } = e.target;
    setCurrentItem((prevItem) => ({
      ...prevItem,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEditSave = () => {
    axios
      .put(`http://localhost:8000/singleitem/${currentItem._id}`, currentItem)
      .then(() => {
        setItems((prevItems) =>
          prevItems.map((item) =>
            item._id === currentItem._id ? currentItem : item
          )
        );
        setIsEditing(false);
        setCurrentItem({});
        toast.success("Item updated successfully");
      })
      .catch((error) => {
        console.error("There was an error updating the item!", error);
      });
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setCurrentItem({});
  };

  const openImageInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleAddCancel = () => {
    setIsAdding(false);
    setNewItem({});
  };

  const handleImageUpload = (e, imageName) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCurrentItem((prevItem) => ({
        ...prevItem,
        [imageName]: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleNewImageUpload = (e, imageName) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewItem((prevItem) => ({
        ...prevItem,
        [imageName]: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="dashboard-cv">
      <ToastContainer />
      <fieldset className="cv-fieldset">
        <div className="cv" id="cv">
          <h1>Items</h1>
          <button className="add-btn" onClick={handleAddClick}>
            Add Item
          </button>
          <table className="items-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Color 1</th>
                <th>Color 2</th>
                <th>Quantity Available</th>
                <th>Dimensions</th>
                <th>Customizable</th>
                <th>Image 1</th>
                <th>Image 2</th>
                <th>Image 3</th>
                <th>Description</th>
                <th>Featured On Front</th>
                <th>Main Tag</th>
                <th>Additional Tag 1</th>
                <th>Additional Tag 2</th>
                <th>Additional Tag 3</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id}>
                  <td>{item.item_name}</td>
                  <td>{item.item_price}</td>
                  <td>{item.item_color1}</td>
                  <td>{item.item_color2}</td>
                  <td>{item.item_quantityAvailable}</td>
                  <td>
                    <Draggable>
                      <div>
                        <textarea
                          name=""
                          id=""
                          className="textarea"
                          readOnly
                          value={item.item_dimensions}
                        />
                      </div>
                    </Draggable>
                  </td>
                  <td>{item.item_customizable ? "Yes" : "No"}</td>
                  <td>
                    <img
                      src={item.item_image1}
                      alt={item.item_name}
                      className="item-img"
                      onClick={() => openImageInNewTab(item.item_image1)}
                    />
                  </td>
                  <td>
                    <img
                      src={item.item_image2}
                      alt={item.item_name}
                      className="item-img"
                      onClick={() => openImageInNewTab(item.item_image2)}
                    />
                  </td>
                  <td>
                    <img
                      src={item.item_image3}
                      alt={item.item_name}
                      className="item-img"
                      onClick={() => openImageInNewTab(item.item_image3)}
                    />
                  </td>
                  <td>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="textarea"
                        readOnly
                        value={item.item_description}
                      />
                    </div>
                  </td>
                  <td>{item.item_featuredOnFront ? "Yes" : "No"}</td>
                  <td>{item.item_mainTag}</td>
                  <td>{item.item_additionalTag1}</td>
                  <td>{item.item_additionalTag2}</td>
                  <td>{item.item_additionalTag3}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEditClick(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isAdding && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleAddCancel}>
                  &times;
                </span>
                <h2>Add Item</h2>
                <AddArtistForm
                  onCancel={handleAddCancel}
                  onSuccess={() => {
                    setIsAdding(false);
                    toast.success("Item added successfully");
                  }}
                />
              </div>
            </div>
          )}

          {isEditing && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleEditCancel}>
                  &times;
                </span>
                <h2>Edit Item</h2>
                <div className="modal-body">
                  <label>
                    Name:
                    <input
                      type="text"
                      name="item_name"
                      value={currentItem.item_name || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Price:
                    <input
                      type="number"
                      name="item_price"
                      value={currentItem.item_price || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Color 1:
                    <input
                      type="text"
                      name="item_color1"
                      value={currentItem.item_color1 || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Color 2:
                    <input
                      type="text"
                      name="item_color2"
                      value={currentItem.item_color2 || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Quantity Available:
                    <input
                      type="number"
                      name="item_quantityAvailable"
                      value={currentItem.item_quantityAvailable || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Dimensions:
                    <textarea
                      name="item_dimensions"
                      value={currentItem.item_dimensions || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Customizable:
                    <input
                      type="checkbox"
                      name="item_customizable"
                      checked={currentItem.item_customizable || false}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Image 1:
                    <input
                      type="file"
                      onChange={(e) => handleImageUpload(e, "item_image1")}
                      accept="image/*"
                    />
                    {currentItem.item_image1 && (
                      <img
                        src={currentItem.item_image1}
                        alt="Preview"
                        className="item-img-preview"
                      />
                    )}
                  </label>
                  <label>
                    Image 2:
                    <input
                      type="file"
                      onChange={(e) => handleImageUpload(e, "item_image2")}
                      accept="image/*"
                    />
                    {currentItem.item_image2 && (
                      <img
                        src={currentItem.item_image2}
                        alt="Preview"
                        className="item-img-preview"
                      />
                    )}
                  </label>
                  <label>
                    Image 3:
                    <input
                      type="file"
                      onChange={(e) => handleImageUpload(e, "item_image3")}
                      accept="image/*"
                    />
                    {currentItem.item_image3 && (
                      <img
                        src={currentItem.item_image3}
                        alt="Preview"
                        className="item-img-preview"
                      />
                    )}
                  </label>
                  <label>
                    Description:
                    <textarea
                      name="item_description"
                      value={currentItem.item_description || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Featured On Front:
                    <input
                      type="checkbox"
                      name="item_featuredOnFront"
                      checked={currentItem.item_featuredOnFront || false}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Main Tag:
                    <input
                      type="text"
                      name="item_mainTag"
                      value={currentItem.item_mainTag || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Additional Tag 1:
                    <input
                      type="text"
                      name="item_additionalTag1"
                      value={currentItem.item_additionalTag1 || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Additional Tag 2:
                    <input
                      type="text"
                      name="item_additionalTag2"
                      value={currentItem.item_additionalTag2 || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                  <label>
                    Additional Tag 3:
                    <input
                      type="text"
                      name="item_additionalTag3"
                      value={currentItem.item_additionalTag3 || ""}
                      onChange={handleEditChange}
                    />
                  </label>
                </div>
                <button className="save-btn" onClick={handleEditSave}>
                  Save
                </button>
                <button className="cancel-btn" onClick={handleEditCancel}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </fieldset>
    </div>
  );
};

export default ArtistDashboard;
