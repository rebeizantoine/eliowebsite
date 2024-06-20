import React, { useState } from 'react';
import './Accordion.css'; // Assuming you have some CSS for styling

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      title: "Section 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum nulla at dui bibendum, a interdum justo efficitur."
    },
    {
      title: "Section 2",
      content: "Curabitur accumsan lorem at neque dignissim, sed cursus nunc aliquam. Integer aliquet sapien ut purus ultrices, id luctus nisl bibendum."
    },
    {
      title: "Section 3",
      content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer euismod dui sit amet arcu sagittis, in fermentum ligula efficitur."
    }
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => handleClick(index)}
          >
            <h3>{item.title}</h3>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
.accordion {
  width: 300px;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
}

.accordion-item {
  border-top: 1px solid #ddd;
}

.accordion-title {
  background: #f7f7f7;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-title h3 {
  margin: 0;
}

.accordion-content {
  background: #fff;
  padding: 10px;
}

.accordion-content p {
  margin: 0;
}

.accordion-title span {
  font-size: 20px;
}
import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import './index.css'; // Assuming you have some global CSS

const App = () => {
  return (
    <div className="App">
      <h1>Accordion Example</h1>
      <Accordion />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));