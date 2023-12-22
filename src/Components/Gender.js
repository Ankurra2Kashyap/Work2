import React, { useState } from 'react';

const MyDropdown = (props) => {
  const [selectedItem, setSelectedItem] = useState(props.name);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    // You can also perform additional actions here when an item is clicked
  }

  return (
    <div className='container my-3'>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {selectedItem}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" onClick={() => handleItemClick(props.first)}>{props.first}</a>
          <a className="dropdown-item" onClick={() => handleItemClick(props.second)}>{props.second}</a>
          <a className="dropdown-item" onClick={() => handleItemClick(props.third)}>{props.third}</a>
        </div>
      </div>
    </div>
  );
}

export default MyDropdown;
