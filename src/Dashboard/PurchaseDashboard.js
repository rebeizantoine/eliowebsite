import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./dashboardcv.css";

const PurchasedDashboard = () => {
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    fetchPurchasedItems();
  }, []);

  const fetchPurchasedItems = async () => {
    try {
      const response = await axios.get(
        "https://allinone-14n7.onrender.com/purchased/"
      );
      setPurchasedItems(response.data);
    } catch (error) {
      console.error("Error fetching purchased items", error);
    }
  };

  const handleEditClick = (item) => {
    setCurrentItem(item);
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleSaveClick = async () => {
    try {
      await axios.put(
        `https://allinone-14n7.onrender.com/purchased/${currentItem._id}`,
        currentItem
      );
      setPurchasedItems((prevItems) =>
        prevItems.map((item) =>
          item._id === currentItem._id ? currentItem : item
        )
      );
      setIsEditing(false);
      setCurrentItem({});
      toast.success("Item updated successfully");
    } catch (error) {
      console.error("Error updating item", error);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setCurrentItem({});
  };

  return (
    <div className="dashboard-cv">
      <ToastContainer />
      <fieldset className="cv-fieldset">
        <div className="cv" id="cv">
          <h1>Purchased Items</h1>
          <table className="items-table">
            <thead>
              <tr>
                {[
                  "First Name",
                  "Last Name",
                  "Email",
                  "Phone 1",
                  "Phone 2",
                  "Delivery Option",
                  "Location",
                  "Additional Details",
                  "Item 1 Name",
                  "Item 1 Price",
                  "Item 2 Name",
                  "Item 2 Price",
                  "Item 3 Name",
                  "Item 3 Price",
                  "Item 4 Name",
                  "Item 4 Price",
                  "Subtotal",
                  "Date",
                  "Actions",
                ].map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {purchasedItems.map((item) => (
                <tr key={item._id}>
                  {[
                    item.purchased_firstname,
                    item.purchased_lastname,
                    item.purchased_email,
                    item.purchased_phonenumber1,
                    item.purchased_phonenumber2,
                    item.purchased_deliveryoption,
                    item.purchased_location,
                    item.purchased_additionaldetails,
                    item.purchased_item1name,
                    item.purchased_item1price,
                    item.purchased_item2name,
                    item.purchased_item2price,
                    item.purchased_item3name,
                    item.purchased_item3price,
                    item.purchased_item4name,
                    item.purchased_item4price,
                    item.purchased_subtotal,
                    new Date(item.purchased_date).toLocaleDateString(),
                  ].map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEditClick(item)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isEditing && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleCancelClick}>
                  &times;
                </span>
                <h2>Edit Purchased Item</h2>
                <form>
                  {[
                    {
                      label: "First Name",
                      name: "purchased_firstname",
                      type: "text",
                    },
                    {
                      label: "Last Name",
                      name: "purchased_lastname",
                      type: "text",
                    },
                    { label: "Email", name: "purchased_email", type: "email" },
                    {
                      label: "Phone Number 1",
                      name: "purchased_phonenumber1",
                      type: "text",
                    },
                    {
                      label: "Phone Number 2",
                      name: "purchased_phonenumber2",
                      type: "text",
                    },
                    {
                      label: "Delivery Option",
                      name: "purchased_deliveryoption",
                      type: "text",
                    },
                    {
                      label: "Location",
                      name: "purchased_location",
                      type: "text",
                    },
                    {
                      label: "Additional Details",
                      name: "purchased_additionaldetails",
                      type: "text",
                    },
                    {
                      label: "Item 1 Name",
                      name: "purchased_item1name",
                      type: "text",
                    },
                    {
                      label: "Item 1 Price",
                      name: "purchased_item1price",
                      type: "number",
                    },
                    {
                      label: "Item 2 Name",
                      name: "purchased_item2name",
                      type: "text",
                    },
                    {
                      label: "Item 2 Price",
                      name: "purchased_item2price",
                      type: "number",
                    },
                    {
                      label: "Item 3 Name",
                      name: "purchased_item3name",
                      type: "text",
                    },
                    {
                      label: "Item 3 Price",
                      name: "purchased_item3price",
                      type: "number",
                    },
                    {
                      label: "Item 4 Name",
                      name: "purchased_item4name",
                      type: "text",
                    },
                    {
                      label: "Item 4 Price",
                      name: "purchased_item4price",
                      type: "number",
                    },
                  ].map((field) => (
                    <label key={field.name}>
                      {field.label}:
                      <input
                        type={field.type}
                        name={field.name}
                        value={currentItem[field.name] || ""}
                        onChange={handleInputChange}
                      />
                    </label>
                  ))}
                </form>
                <button className="save-btn" onClick={handleSaveClick}>
                  Save
                </button>
                <button className="cancel-btn" onClick={handleCancelClick}>
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

export default PurchasedDashboard;
