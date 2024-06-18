import React, { useState } from "react";
import "../Styles/furniture.css";
import image1 from "../Images/imagelittle1.jpg";
import image2 from "../Images/imagelittle2.jpg";
import image3 from "../Images/imagelittle3.jpg";
import image4 from "../Images/imagelittle4.jpg";
import image5 from "../Images/imagelittle5.jpg";
import image6 from "../Images/imagelittle6.jpg";
import image7 from "../Images/imagelittle7.jpg";
import image8 from "../Images/imagelittle8.jpg";

const items = [
  {
    id: 1,
    image: image1,
    name: "LEO Wall Mounted Bar",
    price: "From $270 USD",
  },
  {
    id: 2,
    image: image2,
    name: "LEO Wall Mounted Bar",
    price: "From $270 USD",
  },
  {
    id: 3,
    image: image3,
    name: "LEO Wall Mounted Bar",
    price: "From $270 USD",
  },
  {
    id: 4,
    image: image4,
    name: "LEO Wall Mounted Bar",
    price: "From $270 USD",
  },
  {
    id: 5,
    image: image5,
    name: "LEO Wall Mounted Bar",
    price: "From $270 USD",
  },
  {
    id: 6,
    image: image6,
    name: "LEO Wall Mounted Bar",
    price: "From $270 USD",
  },
  {
    id: 7,
    image: image7,
    name: "LEO Wall Mounted Bar",
    price: "From $270 USD",
  },
  {
    id: 8,
    image: image8,
    name: "LEO Wall Mounted Bar",
    price: "From $270 USD",
  },

  {
    id: 9,
    image: image4,
    name: "LEO Wall Mounted Bar",
    price: "From $270 USD",
  },
  {
    id: 10,
    image: image5,
    name: "LEO Wall Mounted Bar",
    price: "From $270 USD",
  },
  {
    id: 11,
    image: image6,
    name: "LEO Wall Mounted Bar",
    price: "From $270 USD",
  },
  {
    id: 12,
    image: image7,
    name: "LEO Wall Mounted Bar",
    price: "From $270 USD",
  },
  {
    id: 13,
    image: image8,
    name: "LEO Wall Mounted Bar",
    price: "From $270 USD",
  },
  // Add more items here if needed
];

const Furniture = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = items.length;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(indexOfLastItem, indexOfFirstItem, currentItems);

  return (
    <div>
      <div>
        <h2 className="priceand-h21">Furniture</h2>
        <p className="priceand-p21">{totalItems} products</p>
        <div className="item-grid-container1">
          {currentItems.map((item) => (
            <div className="item-grid-11" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="image-priceand1"
              />
              <div className="priceand1">
                <h1>{item.name}</h1>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(items.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
